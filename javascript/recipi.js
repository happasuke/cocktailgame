var showRecipiflg = 0;

function mixCocktail(){
	if(tequila==1){
		if(limejuice==1){
			if(cointreau==1){
				if(logc==0){
					alert("compleate!");
					logc=1;
				}
			}
		}
	}
}

function deleteRecipi(){
	deletedom('bentou');
	var a = document.createElement("div");
	a.id = "bentou";
	document.body.appendChild(a);

	if(showRecipiflg==1){
		showRecipiflg = 0;
	}
}

function showRecipi(){
	if(showRecipiflg==0){
		showRecipiflg = 1;
		var adwilcontent = document.createElement("div"); 
		adwilcontent.id = 'generate';
		adwilcontent.innerHTML =  '<img src="image/backgroundbottle.png" id="backgroundbottle" /><img src="image/backtop1.bmp" id="backtop1button" />';

		adwilcontent.innerHTML += '<img src="image/cointreau.bmp" id="cointreaupicture" class="bottlepicture" onClick="readcointreau()"/>';
		adwilcontent.innerHTML += '<img src="image/tequila.bmp" id="tequilapicture" class="bottlepicture" onClick="readtequila()"/>';
		adwilcontent.innerHTML += '<img src="image/limejuice.bmp" id="limejuicepicture" class="bottlepicture" onClick="readlimejuice()"/>';
		var adwilobj = document.getElementById("bentou");
		adwilobj.appendChild(adwilcontent);
	}
}