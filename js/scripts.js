var suggester = function(frontIn, companyIn, userIn, stateIn, payIn, nameIn) {
   if (frontIn === 1) {
   return "Well, " + nameIn + ", You should study CSS and design.";
 } else if (payIn === 1 ) {
   return "Hey, " + nameIn +", you should study PHP.";
} else if (stateIn === 3 || stateIn === 4 || payIn === 3) {
    return "Thanks, " + nameIn + ", why don't you give Java/Android a try?";
 } else if (stateIn === 2 || companyIn === 1) {
   return "Looks like Ruby/Rails is the best route for you, " + nameIn;
  //  console.log("ruby attempt");
 } else {
   return "test";
 }
 }
 function myFunction() {
   location.reload();
 }

 $(document).ready(function() { ;
   $("form").submit(function(event) {
     event.preventDefault();
     var frontIn = parseInt($("#frontBack").val());
     var companyIn= parseInt($("#companyType").val());
     var userIn = parseInt($("#userInteraction").val());
     var stateIn= parseInt($("#state").val());
     var payIn = parseInt($("#pay").val());
     var nameIn = $("input#name").val();
     var response = suggester(frontIn, companyIn, userIn, stateIn, payIn, nameIn);

     $("#response").text(response);
     $("#whichTrack").remove("form");
     $("p").show();


     $(".clickable").click(function() {
      $("p").hide();
      $("#goodbye h2").fadeIn();
      $("#reload").show();

     });
   });
 });
