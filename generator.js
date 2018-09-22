//Javascript to generate Fortune Cookie messages
//Created by Amy Kim

document.getElementById("break").onclick = function() {generate();};

var img = document.getElementById("cookie");

var messages = ["Your shoes will make you happy today.", "You can make your own happiness.", "You are very talented in many ways.", "A new voyage will fill your life with untold memories.", "Now is the time to try something new.", "Bread today is better than cake tomorrow.", "Friendship is an ocean that you cannot see bottom.", "You don't need talent to gain experience."];

function generate(){
	img.src = "./src/break.jpg";
	var pick = messages[Math.floor(Math.random() * messages.length)];
	
		document.getElementById("break").innerHTML = pick;
		document.getElementById("break").style.marginLeft= 0;
		document.getElementById("break").style.color= "#109792";	
		
  
	
}