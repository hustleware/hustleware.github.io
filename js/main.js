var quotes = [
	"One day or day one. You decide.",
	"Hustle in silence. Let your success make the noise.",
	"All things are difficult before they are easy.",
	"Hustle until your haters ask if you're hiring.",
	"Postpone procrastination.",
	"Hustle until your idols become you're rivals.",
	"Do something instead of killing time. Because time is killing you.",
	"Hustle until your signature becomes an autograph.",
	"Let your fear of regret be stronger than your fear of anything else.",
	"Hustle until your bank account looks like a phone number.",
	"You can't have a million-dollar dream with a minimum-wage work ethic.",
	"Hustle until you don't have to introduce yourself.",
	"You are what you do, not what you say you'll do.",
	"Hustle until it pains because being broke as fuck hurts even more.",
	"Never look down on anyone unless you are admiring their shoes.",
	"Good things may come to those who wait, but only the ones left by those who hustle.",
	"Don't do the same shit and expect different results.",
	"You don't have to be great to embrace the hustle, but you have to embrace the hustle to be great.",
	"It's not about how much sleep you get. It's about what you do when you're awake."
];

function genQuote() {
	var randNum = Math.floor(Math.random() * 18) + 1;	
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