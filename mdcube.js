var solved = [	[0,1,2,3,4,5,6,7,8],	[9,10,11,12,13,14,15,16,17],	[18,19,20,21,22,23,24,25,26],	[27,28,29,30,31,32,33,34,35],	[36,37,38,39,40,41,42,43,44],	[45,46,47,48,49,50,51,52,53]	]
var cubestate=solved;

function movemaker(move,cubestate) {
if (move=="U"){
		cubestate=Umove(cubestate);
	}
	if (move=="U2"){
		cubestate=Umove(Umove(cubestate));
	}
	else if (move=="U'"){
		cubestate=Umove(Umove(Umove(cubestate)));
	}
	else if (move=="D"){
		cubestate=Dmove(cubestate);
	}
	else if (move=="D2"){
		cubestate=Dmove(Dmove(cubestate));
	}
	else if (move=="D'"){
		cubestate=Dmove(Dmove(Dmove(cubestate)));
	}
	else if (move=="R"){
		cubestate=Rmove(cubestate);
	}
	else if (move=="R2"){
		cubestate=Rmove(Rmove(cubestate));
	}
	else if (move=="R'"){
		cubestate=Rmove(Rmove(Rmove(cubestate)));
	}
	else if (move=="L"){
		cubestate=Lmove(cubestate);
	}
	else if (move=="L2"){
		cubestate=Lmove(Lmove(cubestate));
	}
	else if (move=="L'"){
		cubestate=Lmove(Lmove(Lmove(cubestate)));
	}
	else if (move=="F"){
		cubestate=Fmove(cubestate);
	}
	else if (move=="F2"){
		cubestate=Fmove(Fmove(cubestate));
	}
	else if (move=="F'"){
		cubestate=Fmove(Fmove(Fmove(cubestate)));
	}
	else if (move=="B"){
		cubestate=Bmove(cubestate);
	}
	else if (move=="B2"){
		cubestate=Bmove(Bmove(cubestate));
	}
	else if (move=="B'"){
		cubestate=Bmove(Bmove(Bmove(cubestate)));
	}	
	else if (move=="M"){
		cubestate=Lmove(Lmove(Lmove(Rmove(Xmove(Xmove(Xmove(cubestate)))))));
	}
	else if (move=="M2"){
		cubestate=Rmove(Rmove(Lmove(Lmove(Xmove(Xmove(cubestate))))));
	}
	else if (move=="M'"){
		cubestate=Rmove(Rmove(Rmove(Lmove(Xmove(cubestate)))));
	}
	else if (move=="E"){
		cubestate=Dmove(Dmove(Dmove(Umove(Ymove(Ymove(Ymove(cubestate)))))));
	}
	else if (move=="E2"){
		cubestate=Dmove(Dmove(Umove(Umove(Ymove(Ymove(cubestate))))));
	}
	else if (move=="E'"){
		cubestate=Umove(Umove(Umove(Dmove(Ymove(cubestate)))));
	}
	else if (move=="S"){
		cubestate=Fmove(Fmove(Fmove(Bmove(Zmove(cubestate)))));
	}
	else if (move=="S2"){
		cubestate=Fmove(Fmove(Bmove(Bmove(Zmove(Zmove(cubestate))))));
	}
	else if (move=="S'"){
		cubestate=Bmove(Bmove(Bmove(Fmove(Zmove(Zmove(Zmove(cubestate)))))));
	}	
	else if (move=="r"){
		cubestate=Lmove(Xmove(cubestate));
	}
	else if (move=="r2"){
		cubestate=Xmove(Xmove(Lmove(Lmove(cubestate))));
	}
	else if (move=="r'"){
		cubestate=Xmove(Xmove(Xmove(Lmove(Lmove(Lmove(cubestate))))));
	}
	else if (move=="l"){
		cubestate=Rmove(Xmove(Xmove(Xmove(cubestate))));
	}
	else if (move=="l2"){
		cubestate=Xmove(Xmove(Rmove(Rmove(cubestate))));
	}
	else if (move=="l'"){
		cubestate=Xmove(Rmove(Rmove(Rmove(cubestate))));
	}
	else if (move=="f"){
		cubestate=Bmove(Zmove(cubestate));
	}
	else if (move=="f2"){
		cubestate=Bmove(Bmove(Zmove(Zmove(cubestate))));
	}
	else if (move=="f'"){
		cubestate=Bmove(Bmove(Bmove(Zmove(Zmove(Zmove(cubestate))))));
	}	
	else if (move=="b"){
		cubestate=Fmove(Zmove(Zmove(Zmove(cubestate))));
	}
	else if (move=="b2"){
		cubestate=Fmove(Fmove(Zmove(Zmove(cubestate))));
	}
	else if (move=="b'"){
		cubestate=Fmove(Fmove(Fmove(Zmove(cubestate))));
	}
	else if (move=="d"){
		cubestate=Umove(Ymove(Ymove(Ymove(cubestate))));
	}
	else if (move=="d2"){
		cubestate=Umove(Umove(Ymove(Ymove(cubestate))));
	}
	else if (move=="d'"){
		cubestate=Umove(Umove(Umove(Ymove(cubestate))));
	}
	else if (move=="u"){
		cubestate=Ymove(Dmove(cubestate));
	}
	else if (move=="u2"){
		cubestate=Ymove(Ymove(Dmove(Dmove(cubestate))));
	}
	else if (move=="u'"){
		cubestate=Ymove(Ymove(Ymove(Dmove(Dmove(Dmove(cubestate))))));
	}		
	else if (move=="x"){
		cubestate=Xmove(cubestate);
	}
	else if (move=="x2"){
		cubestate=Xmove(Xmove(cubestate));
	}
	else if (move=="x'"){
		cubestate=Xmove(Xmove(Xmove(cubestate)));
	}
	else if (move=="y"){
		cubestate=Ymove(cubestate);
	}
	else if (move=="y2"){
		cubestate=Ymove(Ymove(cubestate));
	}
	else if (move=="y'"){
		cubestate=Ymove(Ymove(Ymove(cubestate)));
	}
	else if (move=="z"){
		cubestate=Zmove(cubestate);
	}
	else if (move=="z2"){
		cubestate=Zmove(Zmove(cubestate));
	}
	else if (move=="z'"){
		cubestate=Zmove(Zmove(Zmove(cubestate)));
	}		
		
return cubestate;
}



function Umove(cubestate){

	cubestate=[[cubestate[0][6],cubestate[0][7],cubestate[0][0],cubestate[0][1],cubestate[0][2],cubestate[0][3],cubestate[0][4],cubestate[0][5],cubestate[0][8]],

	[cubestate[4][0],cubestate[4][1],cubestate[4][2],cubestate[1][3],cubestate[1][4],cubestate[1][5],cubestate[1][6],cubestate[1][7],cubestate[1][8]],

	[cubestate[1][0],cubestate[1][1],cubestate[1][2],cubestate[2][3],cubestate[2][4],cubestate[2][5],cubestate[2][6],cubestate[2][7],cubestate[2][8]],

	[cubestate[3][0],cubestate[3][1],cubestate[3][2],cubestate[3][3],cubestate[3][4],cubestate[3][5],cubestate[3][6],cubestate[3][7],cubestate[3][8]],

	[cubestate[5][0],cubestate[5][1],cubestate[5][2],cubestate[4][3],cubestate[4][4],cubestate[4][5],cubestate[4][6],cubestate[4][7],cubestate[4][8]],

	[cubestate[2][0],cubestate[2][1],cubestate[2][2],cubestate[5][3],cubestate[5][4],cubestate[5][5],cubestate[5][6],cubestate[5][7],cubestate[5][8]]]

return cubestate;

	}

function Dmove(cubestate){

	cubestate=[[cubestate[0][0],cubestate[0][1],cubestate[0][2],cubestate[0][3],cubestate[0][4],cubestate[0][5],cubestate[0][6],cubestate[0][7],cubestate[0][8]],

	[cubestate[1][0],cubestate[1][1],cubestate[1][2],cubestate[1][3],cubestate[2][4],cubestate[2][5],cubestate[2][6],cubestate[1][7],cubestate[1][8]],

	[cubestate[2][0],cubestate[2][1],cubestate[2][2],cubestate[2][3],cubestate[5][4],cubestate[5][5],cubestate[5][6],cubestate[2][7],cubestate[2][8]],

	[cubestate[3][6],cubestate[3][7],cubestate[3][0],cubestate[3][1],cubestate[3][2],cubestate[3][3],cubestate[3][4],cubestate[3][5],cubestate[3][8]],

	[cubestate[4][0],cubestate[4][1],cubestate[4][2],cubestate[4][3],cubestate[1][4],cubestate[1][5],cubestate[1][6],cubestate[4][7],cubestate[4][8]],

	[cubestate[5][0],cubestate[5][1],cubestate[5][2],cubestate[5][3],cubestate[4][4],cubestate[4][5],cubestate[4][6],cubestate[5][7],cubestate[5][8]]]

return cubestate;

	}

function Fmove(cubestate){

	cubestate=[[cubestate[0][0],cubestate[0][1],cubestate[0][2],cubestate[0][3],cubestate[5][2],cubestate[5][3],cubestate[5][4],cubestate[0][7],cubestate[0][8]],

	[cubestate[0][6],cubestate[1][1],cubestate[1][2],cubestate[1][3],cubestate[1][4],cubestate[1][5],cubestate[0][4],cubestate[0][5],cubestate[1][8]],

	[cubestate[2][6],cubestate[2][7],cubestate[2][0],cubestate[2][1],cubestate[2][2],cubestate[2][3],cubestate[2][4],cubestate[2][5],cubestate[2][8]],

	[cubestate[1][6],cubestate[1][7],cubestate[1][0],cubestate[3][3],cubestate[3][4],cubestate[3][5],cubestate[3][6],cubestate[3][7],cubestate[3][8]],

	[cubestate[4][0],cubestate[4][1],cubestate[4][2],cubestate[4][3],cubestate[4][4],cubestate[4][5],cubestate[4][6],cubestate[4][7],cubestate[4][8]],

	[cubestate[5][0],cubestate[5][1],cubestate[3][0],cubestate[3][1],cubestate[3][2],cubestate[5][5],cubestate[5][6],cubestate[5][7],cubestate[5][8]]]	

return cubestate;

	}

function Bmove(cubestate){

	cubestate=[[cubestate[1][2],cubestate[1][3],cubestate[1][4],cubestate[0][3],cubestate[0][4],cubestate[0][5],cubestate[0][6],cubestate[0][7],cubestate[0][8]],

	[cubestate[1][0],cubestate[1][1],cubestate[3][4],cubestate[3][5],cubestate[3][6],cubestate[1][5],cubestate[1][6],cubestate[1][7],cubestate[1][8]],

	[cubestate[2][0],cubestate[2][1],cubestate[2][2],cubestate[2][3],cubestate[2][4],cubestate[2][5],cubestate[2][6],cubestate[2][7],cubestate[2][8]],

	[cubestate[3][0],cubestate[3][1],cubestate[3][2],cubestate[3][3],cubestate[5][6],cubestate[5][7],cubestate[5][0],cubestate[3][7],cubestate[3][8]],

	[cubestate[4][6],cubestate[4][7],cubestate[4][0],cubestate[4][1],cubestate[4][2],cubestate[4][3],cubestate[4][4],cubestate[4][5],cubestate[4][8]],

	[cubestate[0][2],cubestate[5][1],cubestate[5][2],cubestate[5][3],cubestate[5][4],cubestate[5][5],cubestate[0][0],cubestate[0][1],cubestate[5][8]]]	

return cubestate;

	}

function Rmove(cubestate){

	cubestate=[[cubestate[0][0],cubestate[0][1],cubestate[2][2],cubestate[2][3],cubestate[2][4],cubestate[0][5],cubestate[0][6],cubestate[0][7],cubestate[0][8]],

	[cubestate[1][6],cubestate[1][7],cubestate[1][0],cubestate[1][1],cubestate[1][2],cubestate[1][3],cubestate[1][4],cubestate[1][5],cubestate[1][8]],

	[cubestate[2][0],cubestate[2][1],cubestate[3][2],cubestate[3][3],cubestate[3][4],cubestate[2][5],cubestate[2][6],cubestate[2][7],cubestate[2][8]],

	[cubestate[3][0],cubestate[3][1],cubestate[4][6],cubestate[4][7],cubestate[4][0],cubestate[3][5],cubestate[3][6],cubestate[3][7],cubestate[3][8]],

	[cubestate[0][4],cubestate[4][1],cubestate[4][2],cubestate[4][3],cubestate[4][4],cubestate[4][5],cubestate[0][2],cubestate[0][3],cubestate[4][8]],

	[cubestate[5][0],cubestate[5][1],cubestate[5][2],cubestate[5][3],cubestate[5][4],cubestate[5][5],cubestate[5][6],cubestate[5][7],cubestate[5][8]]]	

	return cubestate;

	}

function Lmove(cubestate){

	cubestate=[[cubestate[4][4],cubestate[0][1],cubestate[0][2],cubestate[0][3],cubestate[0][4],cubestate[0][5],cubestate[4][2],cubestate[4][3],cubestate[0][8]],

	[cubestate[1][0],cubestate[1][1],cubestate[1][2],cubestate[1][3],cubestate[1][4],cubestate[1][5],cubestate[1][6],cubestate[1][7],cubestate[1][8]],

	[cubestate[0][0],cubestate[2][1],cubestate[2][2],cubestate[2][3],cubestate[2][4],cubestate[2][5],cubestate[0][6],cubestate[0][7],cubestate[2][8]],

	[cubestate[2][0],cubestate[3][1],cubestate[3][2],cubestate[3][3],cubestate[3][4],cubestate[3][5],cubestate[2][6],cubestate[2][7],cubestate[3][8]],

	[cubestate[4][0],cubestate[4][1],cubestate[3][6],cubestate[3][7],cubestate[3][0],cubestate[4][5],cubestate[4][6],cubestate[4][7],cubestate[4][8]],

	[cubestate[5][6],cubestate[5][7],cubestate[5][0],cubestate[5][1],cubestate[5][2],cubestate[5][3],cubestate[5][4],cubestate[5][5],cubestate[5][8]]]	

return cubestate;

}

function Ymove(cubestate){

	cubestate=[[cubestate[0][6],cubestate[0][7],cubestate[0][0],cubestate[0][1],cubestate[0][2],cubestate[0][3],cubestate[0][4],cubestate[0][5],cubestate[0][8]], // U

	[cubestate[4][0],cubestate[4][1],cubestate[4][2],cubestate[4][3],cubestate[4][4],cubestate[4][5],cubestate[4][6],cubestate[4][7],cubestate[4][8]], //R

	[cubestate[1][0],cubestate[1][1],cubestate[1][2],cubestate[1][3],cubestate[1][4],cubestate[1][5],cubestate[1][6],cubestate[1][7],cubestate[1][8]], //F

	[cubestate[3][2],cubestate[3][3],cubestate[3][4],cubestate[3][5],cubestate[3][6],cubestate[3][7],cubestate[3][0],cubestate[3][1],cubestate[3][8]],//D

	[cubestate[5][0],cubestate[5][1],cubestate[5][2],cubestate[5][3],cubestate[5][4],cubestate[5][5],cubestate[5][6],cubestate[5][7],cubestate[5][8]],//B

	[cubestate[2][0],cubestate[2][1],cubestate[2][2],cubestate[2][3],cubestate[2][4],cubestate[2][5],cubestate[2][6],cubestate[2][7],cubestate[2][8]]]//L

return cubestate;

}

function Xmove(cubestate){

	cubestate=[[cubestate[2][0],cubestate[2][1],cubestate[2][2],cubestate[2][3],cubestate[2][4],cubestate[2][5],cubestate[2][6],cubestate[2][7],cubestate[2][8]],

	[cubestate[1][6],cubestate[1][7],cubestate[1][0],cubestate[1][1],cubestate[1][2],cubestate[1][3],cubestate[1][4],cubestate[1][5],cubestate[1][8]], //R
	
	[cubestate[3][0],cubestate[3][1],cubestate[3][2],cubestate[3][3],cubestate[3][4],cubestate[3][5],cubestate[3][6],cubestate[3][7],cubestate[3][8]],
	
	[cubestate[4][4],cubestate[4][5],cubestate[4][6],cubestate[4][7],cubestate[4][0],cubestate[4][1],cubestate[4][2],cubestate[4][3],cubestate[4][8]], //F

	[cubestate[0][4],cubestate[0][5],cubestate[0][6],cubestate[0][7],cubestate[0][0],cubestate[0][1],cubestate[0][2],cubestate[0][3],cubestate[0][8]],//B

	[cubestate[5][2],cubestate[5][3],cubestate[5][4],cubestate[5][5],cubestate[5][6],cubestate[5][7],cubestate[5][0],cubestate[5][1],cubestate[5][8]]]//L

return cubestate;

}

function Zmove(cubestate){

	cubestate=[[cubestate[5][6],cubestate[5][7],cubestate[5][0],cubestate[5][1],cubestate[5][2],cubestate[5][3],cubestate[5][4],cubestate[5][5],cubestate[5][8]],

	[cubestate[0][6],cubestate[0][7],cubestate[0][0],cubestate[0][1],cubestate[0][2],cubestate[0][3],cubestate[0][4],cubestate[0][5],cubestate[0][8]], //R
	
	[cubestate[2][6],cubestate[2][7],cubestate[2][0],cubestate[2][1],cubestate[2][2],cubestate[2][3],cubestate[2][4],cubestate[2][5],cubestate[2][8]],
	
	[cubestate[1][6],cubestate[1][7],cubestate[1][0],cubestate[1][1],cubestate[1][2],cubestate[1][3],cubestate[1][4],cubestate[1][5],cubestate[1][8]], //F

	[cubestate[4][2],cubestate[4][3],cubestate[4][4],cubestate[4][5],cubestate[4][6],cubestate[4][7],cubestate[4][0],cubestate[4][1],cubestate[4][8]],//B

	[cubestate[3][6],cubestate[3][7],cubestate[3][0],cubestate[3][1],cubestate[3][2],cubestate[3][3],cubestate[3][4],cubestate[3][5],cubestate[3][8]]]//L

return cubestate;

}