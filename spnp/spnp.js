$(document).ready(function() {
  var place = new Array("Los Angeles CA","San Francisco CA","Brooklyn NY","Boston MA","Toronto ON","Houston TX","Miami FL","New York NY","Philadelphia PA","Cleveland OH","Milwaukee WI","San Antonio TX","Chicago IL","Dallas TX","Salt Lake UT","New Orleans LA","Charlotte NC","Oklahoma OK","Phoenix AZ","Portland ME","Atlanta GA","Detroit MI","Indianapolis IN","Minneapolis MN","Sacramento CA","Orlando FL","Seattle WA","Memphis TN");
  var i=0;
  function call_social_proof(){
  i++;
      //alert("recall"+i);
    $(".place").html(place[Math.floor(Math.random() * place.length)]);
    $(".time-counter").html(Math.floor(10 + Math.random() * 50));
    
    $("#social-proof").animate({bottom:"10px"},1000,"easeInOutBack",function(){
      $(this).delay(5000).animate({bottom:"-110px"},500,"easeInQuart",function(){
        setTimeout(function(){call_social_proof()}, Math.floor(3000 + Math.random() * 10000));
        console.log(Math.floor(3000 + Math.random() * 10000));
      });
      
    });
  }
  call_social_proof();
});