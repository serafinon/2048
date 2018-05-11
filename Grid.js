function Grid(){
		this.pushUp=function()								//metodo per mandare in su le caselle
		{
			var isMoved=false;		//per vedere se si è mosso qualcosa
			for(var x=0;x<4;x++)							//ripeti 4 volte per controllo caselle vuote
			{
				for(var i=0;i<3;i++)							//controlla righe 0-1-2, 
				{
					for(var j=0; j<4; j++)
					{
						if(tab[i][j].val==0 && tab[i+1][j].val!=0) //se il valore di un oggetto è zero e quello sotto è diverso da zero,		
						{
							tab[i][j].val=tab[i+1][j].val;			//prende il valore dell'oggetto sottostante 
							tab[i+1][j].val=0;
							isMoved=true;		
						}
						
					}
				}
			}
			
			for(var i=0;i<3;i++)							//controlla righe 0-1-2, 1 volta per controllo somme
			{
				for(var j=0; j<4; j++)
				{
					if(tab[i][j].val==tab[i+1][j].val && tab[i][j].val!=0) //se il valore di un oggetto è uguale al sottostante, li somma
					{
						tab[i][j].val+=tab[i+1][j].val;
						tab[i+1][j].val=0;
						score+=tab[i][j].val;				//aumento il punteggio
						isMoved=true;
					}
				}
			}
			for(var i=0;i<3;i++)							//controlla righe 0-1-2, per controllare se si sono formate caselle vuote dopo la somma
				{
					for(var j=0; j<4; j++)
					{
						if(tab[i][j].val==0 && tab[i+1][j].val!=0) //se il valore di un oggetto è zero e quello sotto è diverso da zero,		
						{
							tab[i][j].val=tab[i+1][j].val;			//prende il valore dell'oggetto sottostante 
							tab[i+1][j].val=0;
							isMoved=true;
						}	
					}
				}
			
			if(isMoved==true)
				grid.randomNewCell(); //assegna un valore a un altro oggetto casella
			grid.dopoMossa();
		}
	
		this.pushDown=function()								//metodo per mandare in giù le caselle
		{
			var isMoved=false;		//per vedere se si è mosso qualcosa
			for(var x=0;x<4;x++)							//ripeti 4 volte per controllo caselle vuote
			{
				for(var i=3;i>0;i--)							//controlla righe 3-2-1, 
				{
					for(var j=0; j<4; j++)
					{
						if(tab[i][j].val==0 && tab[i-1][j].val!=0) //se il valore di un oggetto è zero, prende il valore dell'oggetto sovrastante
						{
							tab[i][j].val=tab[i-1][j].val;
							tab[i-1][j].val=0;
							isMoved=true;						
						}
					}
				}
			}
			for(var i=3;i>0;i--)							//controlla righe 3-2-1, 
			{
				for(var j=0; j<4; j++)
				{
					if(tab[i][j].val==tab[i-1][j].val && tab[i][j].val!=0) //se il valore di un oggetto è uguale al sovrastante, li somma
					{
						tab[i][j].val+=tab[i-1][j].val;
						tab[i-1][j].val=0;
						score+=tab[i][j].val;				//aumento il punteggio
						isMoved=true;
					}
				}
			}
			for(var i=3;i>0;i--)							//controlla righe 3-2-1, per controllare se si sono formate caselle vuote dopo la somma
				{
					for(var j=0; j<4; j++)
					{
						if(tab[i][j].val==0 && tab[i-1][j].val!=0) //se il valore di un oggetto è zero, prende il valore dell'oggetto sovrastante
						{
							tab[i][j].val=tab[i-1][j].val;
							tab[i-1][j].val=0;
							isMoved=true;
						}
					}
				}
			
			if(isMoved==true)
				grid.randomNewCell(); //assegna un valore a un altro oggetto casella
			grid.dopoMossa();
		}
		
		this.pushSx=function()								//metodo per mandare a sx le caselle
		{
			var isMoved=false;		//per vedere se si è mosso qualcosa
			for(var x=0;x<4;x++)							//ripeti 4 volte per controllo caselle vuote
			{
				for(var i=0;i<4;i++)							
				{
					for(var j=0; j<3; j++)					//controlla colonne 0-1-2, 
					{
						if(tab[i][j].val==0 && tab[i][j+1].val!=0) //se il valore di un oggetto è zero, prende il valore dell'oggetto a dx 
						{
							tab[i][j].val=tab[i][j+1].val;
							tab[i][j+1].val=0;
							isMoved=true;
						}
					}
				}
			}
			for(var i=0;i<4;i++)							
			{
				for(var j=0; j<3; j++)					//controlla colonne 0-1-2, 
				{
					if(tab[i][j].val==tab[i][j+1].val && tab[i][j].val!=0) //se il valore di un oggetto è uguale a quello a sx, li somma
					{
						tab[i][j].val+=tab[i][j+1].val;
						tab[i][j+1].val=0;
						score+=tab[i][j].val;				//aumento il punteggio
						isMoved=true;
					}
				}
			}
			
			for(var i=0;i<4;i++)							
				{
					for(var j=0; j<3; j++)					//controlla colonne 0-1-2, 
					{
						if(tab[i][j].val==0 && tab[i][j+1].val!=0) //se il valore di un oggetto è zero, prende il valore dell'oggetto a dx 
						{
							tab[i][j].val=tab[i][j+1].val;
							tab[i][j+1].val=0;
							isMoved=true;
						}
					}
				}
			if(isMoved==true)
				grid.randomNewCell(); //assegna un valore a un altro oggetto casella
			grid.dopoMossa();
		}
		
		this.pushDx=function()								//metodo per mandare a dx le caselle
		{
			var isMoved=false;		//per vedere se si è mosso qualcosa
			for(var x=0;x<4;x++)							//ripeti 4 volte per controllo caselle vuote
			{
				for(var i=0;i<4;i++)							
				{
					for(var j=3; j>0; j--)					//controlla colonne 3-2-1, 
					{
						if(tab[i][j].val==0 && tab[i][j-1].val!=0) //se il valore di un oggetto è zero, prende il valore dell'oggetto a sx
						{
							tab[i][j].val=tab[i][j-1].val;
							tab[i][j-1].val=0;
							isMoved=true;
						}	
					}
				}
			}
			for(var i=0;i<4;i++)							
			{
				for(var j=3; j>0; j--)					//controlla colonne 3-2-1, 
				{
					if(tab[i][j].val==tab[i][j-1].val && tab[i][j].val!=0) //se il valore di un oggetto è uguale a quello a sx, li somma
					{
						tab[i][j].val+=tab[i][j-1].val;
						tab[i][j-1].val=0;
						score+=tab[i][j].val;				//aumento il punteggio					
						isMoved=true;
					}
				}
			}
			for(var i=0;i<4;i++)							
				{
					for(var j=3; j>0; j--)					//controlla colonne 3-2-1, 
					{
						if(tab[i][j].val==0 && tab[i][j-1].val!=0) //se il valore di un oggetto è zero, prende il valore dell'oggetto a sx
						{
							tab[i][j].val=tab[i][j-1].val;
							tab[i][j-1].val=0;
							isMoved=true;
						}	
					}
				}
			if(isMoved==true)
				grid.randomNewCell(); //assegna un valore a un altro oggetto casella
			grid.dopoMossa();
		}
		
		this.dopoMossa=function()		//visualizza la griglia aggiornata, controlla se perde, aggiorna il punteggio
		{
		
			var isPerso=true;			//per controllare se la partita è persa
			for(var i=0;i<4;i++)
			{
				for(var j=0;j<4;j++)
				{
					tab[i][j].visualVal();		//visualizza valori nella griglia
					
					var temp=document.getElementById(i+" "+j).innerHTML; //aggiorna le classi con il valore assegnato, per colorare
					document.getElementById(i+" "+j).className=("a"+temp);
					
					if(tab[i][j].val==0)		//se trova una casella senza valore, può ancora fare una mossa
						isPerso=false;
					
					if(j==3 && i!=0 && i!=3)	//controlla se perde per caselle specifiche laterali
					{
						if(tab[i][j].val==tab[i+1][j].val || tab[i][j].val==tab[i-1][j].val || tab[i][j].val==tab[i][j-1].val )
							isPerso=false;
					}
					else if(j==0 && i!=0 && i!=3)	//controlla se perde per caselle specifiche laterali
					{
						if(tab[i][j].val==tab[i+1][j].val || tab[i][j].val==tab[i-1][j].val || tab[i][j].val==tab[i][j+1].val )
							isPerso=false;
					}
					else if(i==3 && j!=0 && j!=3)	//controlla se perde per caselle specifiche laterali
					{
						if(tab[i][j].val==tab[i-1][j].val || tab[i][j].val==tab[i][j+1].val || tab[i][j].val==tab[i][j-1].val )
							isPerso=false;
					}
					else if(i==0 && j!=0 && j!=3)	//controlla se perde per caselle specifiche laterali
					{
						if(tab[i][j].val==tab[i+1][j].val || tab[i][j].val==tab[i][j+1].val || tab[i][j].val==tab[i][j-1].val )
							isPerso=false;
					}
					else if(j!=0 && j!=3 && i!=0 && i!=3) //controlla se perde per caselle specifiche centrali
					{
						if(tab[i][j].val==tab[i+1][j].val || tab[i][j].val==tab[i][j+1].val || tab[i][j].val==tab[i][j-1].val || tab[i][j].val==tab[i-1][j].val)
							isPerso=false;
					}
					//non c'è bisogno di contrallare gli angoli ,non sbagliare pliz
				}
			}
			document.getElementById("nScore").innerHTML=score;//visualizza il punteggio
			
			if(isPerso==true )			//controlla se perde
			{
				grid.perso();
			}
				
		}
		
		this.randomNewCell=function()
		{
			do{	
				var ranX=Math.floor((Math.random()*4)+0);
				var ranY=Math.floor((Math.random()*4)+0);
			}while(tab[ranX][ranY].val!=0);
	
			if(Math.floor((Math.random()*2)+0)==0)		//inserisce o un 2
				tab[ranX][ranY].val=2;
			else
				tab[ranX][ranY].val=4;					//o un 4
			//$("")
		}
		
		this.memoPrec=function()
		{
			//CONTROLLA SE LA MOSSA è DA MEMORIZZARE(SE LA TABELLA è INVAERIATA NON LA MEMORIZZA
			//var isEgualPrec=true;
			/*for(var i=0;i<4;i++)
			{
				for(var j=0;j<4;j++)
				{
					/*if(tabPrec[i][j].val!=tab[i][j].val);
						isEgualPrec=false;
				}
			}*/
			
			/*if(isEgualPrec==false)
			{*/
				for(var i=0;i<4;i++)
				{
					for(var j=0;j<4;j++)
					{
						tabPrec[i][j].val=tab[i][j].val;
					}
				}
			/*}*/
		}
		
		this.mossPrec=function()
		{		
			for(var i=0;i<4;i++)
			{
				for(var j=0;j<4;j++)
				{
					tab[i][j].val=tabPrec[i][j].val;
				}
			}
			grid.dopoMossa();
		}
		
		this.perso=function()
		{
			alert("HAI PERSO! Score: "+score);
			window.location.href = "index.html";
		}
}
