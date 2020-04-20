var vST=`
precision mediump float;
attribute vec3 vPos;
attribute float vCol;
varying vec3 fCol;
uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;
void main(){
	gl_Position=mProj*mView*mWorld*vec4(vPos,1);
	if(vCol==0.0){fCol=vec3(0,0,1);}
	else if(vCol==1.0){fCol=vec3(1,.5,0);}
	else if(vCol==2.0){fCol=vec3(1,1,1);}
	else if(vCol==3.0){fCol=vec3(0,.6,0);}
	else if(vCol==4.0){fCol=vec3(1,0,0);}
	else if(vCol==5.0){fCol=vec3(1,1,0);}
}
`;
var fST=`
precision mediump float;
varying vec3 fCol;
void main(){
	gl_FragColor=vec4(fCol,1);
}
`;
function rotateX(m,a){
	var c=Math.cos(a);
	var s=Math.sin(a);
	var mv1=m[1],mv5=m[5],mv9=m[9];
	m[1]=m[1]*c-m[2]*s;
	m[5]=m[5]*c-m[6]*s;
	m[9]=m[9]*c-m[10]*s;
	m[2]=m[2]*c+mv1*s;
	m[6]=m[6]*c+mv5*s;
	m[10]=m[10]*c+mv9*s;
}
function rotateY(m,a){
	var c=Math.cos(a);
	var s=Math.sin(a);
	var mv0=m[0],mv4=m[4],mv8=m[8];
	m[0]=c*m[0]+s*m[2];
	m[4]=c*m[4]+s*m[6];
	m[8]=c*m[8]+s*m[10];
	m[2]=c*m[2]-s*mv0;
	m[6]=c*m[6]-s*mv4;
	m[10]=c*m[10]-s*mv8;
}
function persp(fovy,aspect,nr,fr){
	return[1.0/Math.tan(fovy/2)/aspect,0,0,0,0,1.0/Math.tan(fovy/2),0,0,0,0,(fr+nr)/(nr-fr),-1,0,0,2*fr*nr/(nr-fr),0];
}
function initShader(gl,name,source){
	gl.shaderSource(name,source);
	gl.compileShader(name);
}
function linkProgram(gl,program,shader1,shader2){
	gl.attachShader(program,shader1);
	gl.attachShader(program,shader2);
	gl.linkProgram(program);
}
var ks=[38,37,36,39,44,43,40,41,42,
	45,46,47,52,53,48,51,50,49,
	0,1,2,7,8,3,6,5,4,
	18,19,20,25,26,21,24,23,22,
	11,10,9,12,17,16,13,14,15,
	33,32,31,34,35,30,27,28,29];
function tamperVertices(){
	for(i=0;i<54;i++)
		for(j=0;j<6;j++)
			v[ic[6*i+j]*4+3]=Math.floor(ks.indexOf(cs[Math.floor(ks[i]/9)][ks[i]%9])/9);
	gl.bufferSubData(gl.ARRAY_BUFFER,0,new Float32Array(v));
}
function assembleVertices(){
	locs=[.95,.35,.3,-.3,-.35,-.95];
	v=[];
	for(f=0;f<locs.length;f++)
		for(y=0;y<locs.length;y++)
			for(x=0;x<locs.length;x++)
				if(!(f%3))
					v.push(locs[x],locs[y],1-2*Math.floor(f/3),f);
				else if(!((f-1)%3))
					v.push(1-2*Math.floor(f/3),locs[y],locs[x],f);
				else
					v.push(locs[x],1-2*Math.floor(f/3),locs[y],f);
	return v;
}
function assembleIndices(){
	ic=[];
	var b;
	for(i=0;i<6;i++)
		for(j=0;j<3;j++)
			for(k=0;k<3;k++)
			{
				b=i*36+j*12+k*2;
				ic.push(b,b+6,b+7,b,b+7,b+1);
			}
	return ic;
}
function initGraphics(){
	var ca=document.getElementById('glC');
	ca.width=window.innerWidth*.5;
	ca.height=window.innerHeight*.5;
	gl=ca.getContext('webgl');
	gl.clearColor(0,0,0,1);
	gl.enable(gl.DEPTH_TEST);
	var vSh=gl.createShader(gl.VERTEX_SHADER);
	initShader(gl,vSh,vST);
	var fSh=gl.createShader(gl.FRAGMENT_SHADER);
	initShader(gl,fSh,fST);
	var prog=gl.createProgram();
	linkProgram(gl,prog,vSh,fSh);
	var drag=false;
	var old_x,old_y;
	var dX=0,dY=0;
	var mD=function(e){
		drag=true;
		old_x=e.pageX,old_y=e.pageY;
		e.preventDefault();
		return false;
	};
	var mU=function(e){drag=false};
	var mM=function(e){
		if(!drag) return false;
		dX=(e.pageX-old_x)*2*Math.PI/ca.width,
		dY=(e.pageY-old_y)*2*Math.PI/ca.height;
		a2+=dY;
		if((Math.abs(a2)%(2*Math.PI)<(Math.PI/2))||(Math.abs(a2)%(2*Math.PI)>(3*Math.PI/2))){a1+=dX}
		else{a1-=dX}
		old_x=e.pageX,old_y=e.pageY;
		e.preventDefault();
	};
	ca.addEventListener("mousedown",mD,false);
	ca.addEventListener("mouseup",mU,false);
	ca.addEventListener("mouseout",mU,false);
	ca.addEventListener("mousemove",mM,false);
	ic=assembleIndices();
	v=assembleVertices();
	var bVBO=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,bVBO);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(v),gl.DYNAMIC_DRAW);
	var bIBO=gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,bIBO);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(ic),gl.STATIC_DRAW);
	var pAtt=gl.getAttribLocation(prog,'vPos');
	var cAtt=gl.getAttribLocation(prog,'vCol');
	gl.vertexAttribPointer(pAtt,3,gl.FLOAT,gl.FALSE,16,0);
	gl.vertexAttribPointer(cAtt,1,gl.FLOAT,gl.FALSE,16,12);
	gl.enableVertexAttribArray(pAtt);
	gl.enableVertexAttribArray(cAtt);
	gl.useProgram(prog);
	wUNI=gl.getUniformLocation(prog,'mWorld');
	var vUNI=gl.getUniformLocation(prog,'mView');
	var pUNI=gl.getUniformLocation(prog,'mProj');
	var vMat=new Float32Array(16);
	var pMat=new Float32Array(16);	
	vMat=[-.9284766908852592,.1293016367670472,-.3481553119113957,0,0,.937436866561092,.3481553119113957,0,.3713906763541037,.32325409191761795,-.8703882797784892,0,0,0,-5.744562646538029,1];
	pMat=persp(Math.PI/4,ca.width/ca.height,0.1,100);
	gl.uniformMatrix4fv(vUNI,gl.FALSE,vMat);
	gl.uniformMatrix4fv(pUNI,gl.FALSE,pMat);
	a1=0;
	a2=0;
	requestAnimationFrame(loop);
}
function loop(){
	var mo_matrix=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
	rotateY(mo_matrix,a1);
	rotateX(mo_matrix,-a2);
	gl.uniformMatrix4fv(wUNI,gl.FALSE,mo_matrix);
	gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
	gl.drawElements(gl.TRIANGLES,ic.length,gl.UNSIGNED_SHORT,0);
	requestAnimationFrame(loop);		
};