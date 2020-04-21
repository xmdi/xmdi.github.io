var vST=`
precision mediump float;
attribute vec3 P;
attribute float C;
varying vec3 fC;
uniform mat4 mW,mV,mP;
uniform float f,a;
void main(){
	vec3 T;
	float c=cos(a),s=sin(a),t=sin(-a);
	if(a!=0.){
		if(f==0.){if(P[1]>.3){T=vec3(P[2]*t+P[0]*c,P[1],P[2]*c-P[0]*t);}else{T=P;}}
		if(f==1.){if(P[0]<-.3){T=vec3(P[0],P[1]*c-P[2]*s,P[1]*s+P[2]*c);}else{T=P;}}
		if(f==2.){if(P[2]<-.3){T=vec3(P[1]*t+P[0]*c,P[1]*c-P[0]*t,P[2]);}else{T=P;}}
		if(f==3.){if(P[1]<-.3){T=vec3(P[2]*s+P[0]*c,P[1],P[2]*c-P[0]*s);}else{T=P;}}
		if(f==4.){if(P[2]>.3){T=vec3(P[1]*s+P[0]*c,P[1]*c-P[0]*s,P[2]);}else{T=P;}}
		if(f==5.){if(P[0]>.3){T=vec3(P[0],P[1]*c-P[2]*t,P[1]*t+P[2]*c);}else{T=P;}}
		if(f==6.){if(P[0]>=-.3&&P[0]<=.3){T=vec3(P[0],P[1]*c-P[2]*t,P[1]*t+P[2]*c);}else{T=P;}}
		if(f==7.){if(P[1]>=-.3&&P[1]<=.3){T=vec3(P[2]*s+P[0]*c,P[1],P[2]*c-P[0]*s);}else{T=P;}}
		if(f==8.){if(P[2]>=-.3&&P[2]<=.3){T=vec3(P[1]*t+P[0]*c,P[1]*c-P[0]*t,P[2]);}else{T=P;}}
		if(f==9.){T=vec3(P[0],P[1]*c-P[2]*s,P[1]*s+P[2]*c);}
		if(f==10.){T=vec3(P[2]*t+P[0]*c,P[1],P[2]*c-P[0]*t);}
		if(f==11.){T=vec3(P[1]*t+P[0]*c,P[1]*c-P[0]*t,P[2]);}
		if(f==12.){if(P[1]>-.35){T=vec3(P[2]*t+P[0]*c,P[1],P[2]*c-P[0]*t);}else{T=P;}}
		if(f==13.){if(P[0]<.35){T=vec3(P[0],P[1]*c-P[2]*s,P[1]*s+P[2]*c);}else{T=P;}}
		if(f==14.){if(P[2]<.35){T=vec3(P[1]*t+P[0]*c,P[1]*c-P[0]*t,P[2]);}else{T=P;}}
		if(f==15.){if(P[1]<.35){T=vec3(P[2]*s+P[0]*c,P[1],P[2]*c-P[0]*s);}else{T=P;}}
		if(f==16.){if(P[2]>-.35){T=vec3(P[1]*s+P[0]*c,P[1]*c-P[0]*s,P[2]);}else{T=P;}}
		if(f==17.){if(P[0]>-.35){T=vec3(P[0],P[1]*c-P[2]*t,P[1]*t+P[2]*c);}else{T=P;}}
	}
	else{T=P;}
	gl_Position=mP*mV*mW*vec4(T,1);
	if(C==0.){fC=vec3(0,0,1);}
	if(C==1.){fC=vec3(1,.5,0);}
	if(C==2.){fC=vec3(1,1,1);}
	if(C==3.){fC=vec3(0,.6,0);}
	if(C==4.){fC=vec3(1,0,0);}
	if(C==5.){fC=vec3(1,1,0);}
}
`,fST=`
precision mediump float;
varying vec3 fC;
void main(){
	gl_FragColor=vec4(fC,1);
}
`,
animF,animN,anim0,anim=0,ks=[38,37,36,39,44,43,40,41,42,45,46,47,52,53,48,51,50,49,0,1,2,7,8,3,6,5,4,18,19,20,25,26,21,24,23,22,11,10,9,12,17,16,13,14,15,33,32,31,34,35,30,27,28,29]
function rX(m,a){
	var c=Math.cos(a),s=Math.sin(a),mv1=m[1],mv5=m[5],mv9=m[9]
	m[1]=m[1]*c-m[2]*s
	m[5]=m[5]*c-m[6]*s
	m[9]=m[9]*c-m[10]*s
	m[2]=m[2]*c+mv1*s
	m[6]=m[6]*c+mv5*s
	m[10]=m[10]*c+mv9*s
}
function rY(m,a){
	var c=Math.cos(a),s=Math.sin(a),mv0=m[0],mv4=m[4],mv8=m[8]
	m[0]=c*m[0]+s*m[2]
	m[4]=c*m[4]+s*m[6]
	m[8]=c*m[8]+s*m[10]
	m[2]=c*m[2]-s*mv0
	m[6]=c*m[6]-s*mv4
	m[10]=c*m[10]-s*mv8
}
function persp(fv,as,nr,fr){
	return[1.0/Math.tan(fv/2)/as,0,0,0,0,1.0/Math.tan(fv/2),0,0,0,0,(fr+nr)/(nr-fr),-1,0,0,2*fr*nr/(nr-fr),0];
}
function initShader(gl,n,s){
	gl.shaderSource(n,s)
	gl.compileShader(n)
}
function linkProgram(gl,p,s1,s2){
	gl.attachShader(p,s1)
	gl.attachShader(p,s2)
	gl.linkProgram(p)
}
function tamperVertices(){
	for(i=0;i<54;i++)
		for(j=0;j<6;j++)
			v[ic[6*i+j]*4+3]=Math.floor(ks.indexOf(cs[Math.floor(ks[i]/9)][ks[i]%9])/9)
	gl.bufferSubData(gl.ARRAY_BUFFER,0,new Float32Array(v))
}
function assembleVertices(){
	locs=[.95,.35,.3,-.3,-.35,-.95]
	v=[]
	for(f=0;f<locs.length;f++)
		for(y=0;y<locs.length;y++)
			for(x=0;x<locs.length;x++)
				if(!(f%3))
					v.push(locs[x],locs[y],1-2*Math.floor(f/3),f)
				else if(!((f-1)%3))
					v.push(1-2*Math.floor(f/3),locs[y],locs[x],f)
				else
					v.push(locs[x],1-2*Math.floor(f/3),locs[y],f)
	return v;
}
function assembleIndices(){
	ic=[]
	var b
	for(i=0;i<6;i++)
		for(j=0;j<3;j++)
			for(k=0;k<3;k++){
				b=i*36+j*12+k*2
				ic.push(b,b+6,b+7,b,b+7,b+1)
			}
	return ic
}
function initGraphics(){
	var ca=document.getElementById('glC'),drag=0,old_x,old_y,dX=0,dY=0
	ca.width=window.innerWidth*.8
	ca.height=window.innerHeight*.5
	gl=ca.getContext('webgl')
	gl.clearColor(0,0,0,1)
	gl.enable(gl.DEPTH_TEST)
	var vSh=gl.createShader(gl.VERTEX_SHADER)
	initShader(gl,vSh,vST)
	var fSh=gl.createShader(gl.FRAGMENT_SHADER)
	initShader(gl,fSh,fST)
	var p=gl.createProgram()
	linkProgram(gl,p,vSh,fSh)
	var mD=function(e){
		drag=1
		old_x=e.pageX,old_y=e.pageY
		e.preventDefault()
		return 0
	};
	var mU=function(e){drag=0}
	var mM=function(e){
		if(!drag) return 0
		dX=(e.pageX-old_x)*2*Math.PI/ca.width
		dY=(e.pageY-old_y)*2*Math.PI/ca.height
		a2+=dY
		if((Math.abs(a2)%(2*Math.PI)<(Math.PI/2))||(Math.abs(a2)%(2*Math.PI)>(3*Math.PI/2))){a1+=dX}
		else{a1-=dX}
		old_x=e.pageX,old_y=e.pageY
		e.preventDefault()
	};
	ca.addEventListener("mousedown",mD,0)
	ca.addEventListener("mouseup",mU,0)
	ca.addEventListener("mouseout",mU,0)
	ca.addEventListener("mousemove",mM,0)
	ic=assembleIndices()
	v=assembleVertices()
	var bVBO=gl.createBuffer()
	gl.bindBuffer(gl.ARRAY_BUFFER,bVBO)
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(v),gl.DYNAMIC_DRAW)
	var bIBO=gl.createBuffer()
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,bIBO)
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(ic),gl.STATIC_DRAW)
	var pAtt=gl.getAttribLocation(p,'P')
	var cAtt=gl.getAttribLocation(p,'C')
	gl.vertexAttribPointer(pAtt,3,gl.FLOAT,gl.FALSE,16,0)
	gl.vertexAttribPointer(cAtt,1,gl.FLOAT,gl.FALSE,16,12)
	gl.enableVertexAttribArray(pAtt)
	gl.enableVertexAttribArray(cAtt)
	gl.useProgram(p);
	wUNI=gl.getUniformLocation(p,'mW')
	fUNI=gl.getUniformLocation(p,'f')
	aUNI=gl.getUniformLocation(p,'a')
	var vUNI=gl.getUniformLocation(p,'mV')
	var pUNI=gl.getUniformLocation(p,'mP')
	var vMat=new Float32Array(16)
	var pMat=new Float32Array(16)
	vMat=[-.9284766908852592,.1293016367670472,-.3481553119113957,0,0,.937436866561092,.3481553119113957,0,.3713906763541037,.32325409191761795,-.8703882797784892,0,0,0,-5.744562646538029,1]
	pMat=persp(Math.PI/4,ca.width/ca.height,0.1,100)
	gl.uniformMatrix4fv(vUNI,gl.FALSE,vMat)
	gl.uniformMatrix4fv(pUNI,gl.FALSE,pMat)
	a1=0;a2=0
	requestAnimationFrame(loop)
}
function loop(){
	var mo_matrix=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
	rY(mo_matrix,a1)
	rX(mo_matrix,-a2)
	gl.uniformMatrix4fv(wUNI,gl.FALSE,mo_matrix)
	if(anim){
		gl.uniform1f(fUNI,animF)
		gl.uniform1f(aUNI,animN*Math.PI/2000*(performance.now()-anim0))
		if((performance.now()-anim0)>999){
			anim=0;
			ani(++animoves);
		}
	}
	else{
	gl.uniform1f(fUNI,0)
	gl.uniform1f(aUNI,0)}
	gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT)
	gl.drawElements(gl.TRIANGLES,ic.length,gl.UNSIGNED_SHORT,0)
	requestAnimationFrame(loop)	
};
function animate(mv){
	var d=[1,2,-2,-1],ad=["","2","2'","'"]
	if (ms.includes(mv[0])&&ad.includes(mv.substring(1))){
		animF=ms.indexOf(mv[0])
		animN=d[ad.indexOf(mv.substring(1))]
		anim0=performance.now()
		anim=1	
	}
	else{ani(++animoves)}
}