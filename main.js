//MAIN

//creazione tabella vuota
	tabella=document.getElementById("tabella");
	var tabrutta=new String;//stringa di appoggio
	tabrutta="<table>";
	for(var i=0;i<4; i++)
	{
		tabrutta+="<tr>";
		for(var j=0; j<4; j++)
		{
				tabrutta+="<td id='"+i+" "+j+"'></td>";
		}
		tabrutta+="</tr>";
	}
	tabrutta+="</table>";
	tabella.innerHTML=tabrutta;
	
	
	
	
//creo una matrice di istanze	
	var tab = new Array();
	tab[0] = new Array();
	tab[1] = new Array();
	tab[2] = new Array();
	tab[3] = new Array();
	
	for(var i=0;i<4; i++)
	{
		for(var j=0; j<4; j++)
		{
			tab[i][j]=new cell(i,j,0);
		}
	}
//creo matrice di istanze per istanze precedenti alla mossa
	var tabPrec = new Array();
	tabPrec[0] = new Array();
	tabPrec[1] = new Array();
	tabPrec[2] = new Array();
	tabPrec[3] = new Array();
	
	for(var i=0;i<4; i++)
	{
		for(var j=0; j<4; j++)
		{
			tabPrec[i][j]=new cell(i,j,0);
		}
	}
	
//istanzio la griglia
	grid= new Grid();
//inizializzo il punteggio
	var score=0;
//do i primi due valori e visualizzo
	grid.randomNewCell();
	grid.randomNewCell();
	grid.dopoMossa();

//input da tastiera
 $(document).keydown(function(e){ 
	switch (e.keyCode) 
	{
		case 37:
			grid.memoPrec();
			grid.pushSx();
			break;
		case 38:
			grid.memoPrec();
			grid.pushUp();
			break;
		case 39:
			grid.memoPrec();
			grid.pushDx();
			break;
		case 40:
			grid.memoPrec();
			grid.pushDown();
			break;
	}				
}); 
	
	