function cell(posI,posJ,val){
		this.posI=posI;
		this.posJ=posJ;
		this.val=val;
		this.visualVal=function()
		{
			if(this.val!=0)
				document.getElementById(posI+" "+posJ).innerHTML=this.val;
			else
				document.getElementById(posI+" "+posJ).innerHTML="";
		}
	}