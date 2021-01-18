var quotes = [
	"One day or day one. You decide.",
	"Hustle in silence. Let your success make the noise.",
	"Have patience. All things are difficult before they are easy.",
	"You will never be ready. Just start.",
	"Postpone procrastination.",
	"Start where you are. Use what you have. Do what you can.",
	"Quotes won't work unless you do.",
	"Hustle until your signature becomes an autograph.",
	"Let your fear of regret be stronger than your fear of anything else.",
	"Hustle until your bank account looks like a phone number.",
	"Work while they sleep. Learn while they party. Save while they spend. Then live like they dream.",
	"Hustle until your name no longer needs an introduction.",
	"Discipline is choosing what you want most over what you want now.",	
	"Hustle until it pains because being broke as fuck hurts even more.",
	"Never look down on anyone unless you are admiring their shoes.",
	"Good things may come to those who wait, but only the ones left by those who hustle.",
	"Don't do the same shit and expect different results.",
	"You don't have to be great to embrace the hustle, but you have to embrace the hustle to be great.",
	"Don't watch the clock; do what it does. Keep going.",
	"The past is in your head, but the future is in your hands.",
	"Remember why you started.",
	"Do something instead of killing time. Because time is killing you.",
	"Yesterday you said tomorrow. Today you'll say done.",
	"You've got everything it takes, but it will take everything you've got.",
	"You can't just beat the person who never gives up.",
];

function genQuote() {
	var randNum = Math.floor(Math.random() * 24) + 1;	
	document.getElementById('quote').innerHTML = quotes[randNum];
}

function spinQuote() {
	if(quotes.length==0)
		{
			location.reload();
		}
	var rand = Math.floor(Math.random()*quotes.length);	
	var num = quotes[rand];
	quotes.splice(rand,1);
	document.getElementById("quote").innerHTML = num;	
}

$("#more-quote").hover(function() {
  $('.icon').toggleClass('pe-spin');
});

$(document).ready(function() {
	$('#more-quote').click(function(event) {
		event.preventDefault();
		var $fadeElems = $('#quote').animate({opacity: 0}, function() {
			spinQuote();
			$fadeElems.animate({opacity: 1});
		});
	});
});