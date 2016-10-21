// var triangle = function(side1, side2, side3) {
//    if (side1 === side2 && side1 === side3 && side1 === side2) {
//
//    console.log("equil attempt");
//    return "This is an equilateral triangle!";
//
//  } else if (side1 === side2 || side1 === side3) {
//
//    return "This is an isoceles triangle!";
//    console.log("iso attempt");
//
//  } else if (side1 != side2 && side1 != side3 && side2 != side3) {
//
//     return "This is an scalene triangle!";
//     console.log("scalene attempt");
//
//  } else if (side1 === side2 && side1 === side3) {
//
//    return "This is NOT a triangle!";
//    console.log("NOT attempt");
//
//  } else {
//    return "test";
//  }
//  }
//
//  $(document).ready(function() {
//    $("form").submit(function(event) {
//      event.preventDefault();
//      var side1 = parseInt($("input#side1").val());
//      var side2 = parseInt($("input#side2").val());
//      var side3 = parseInt($("input#side3").val());
//
//      var t1 = triangle(side1, side2, side3);
//       $("#t1").text(t1);
//    });
//  });
