var suggester = function(frontIn, companyIn, userIn, stateIn, payIn) {
   if (frontIn === 1) {
   return "You should study CSS and design.";
 } else if (stateIn === 1 ) {
   return "You should study Perl.";
} else if (stateIn === 3 || stateIn === 4 || payIn === 3) {
    return "You should study Java";
 } else if (stateIn === 2 || companyIn === 1) {
   return "You should study Ruby";
  //  console.log("ruby attempt");
 } else {
   return "test";
 }
 }

 $(document).ready(function() { ;
   $("form").submit(function(event) {
     event.preventDefault();
     var frontIn = parseInt($("#frontBack").val());
     var companyIn= parseInt($("#companyType").val());
     var userIn = parseInt($("#userInteraction").val());
     var stateIn= parseInt($("#state").val());
     var payIn = parseInt($("#pay").val());
     var response = suggester(frontIn, companyIn, userIn, stateIn, payIn);

     $("#response").text(response);
     $("#whichTrack").remove("form");
     $("p").show();

     $(".clickable").click(function() {
      $("p").remove();
     });
   });
 });
