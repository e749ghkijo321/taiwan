 var instanc = $(".box");
 $.each(instanc, function(key, value) {

     var pic1 = $(instanc[key]).find("#firstpic"),
         pic2 = $(instanc[key]).find("#firstpic1"),
         show = $(instanc[key]).find("#show"),
         boxx = $(instanc[key]);


     $(pic1).on('click', function() {

         boxx.removeClass("col-md-3 col-sm-4 col-6 my-3");
         show.removeClass("d-none");
         pic1.addClass("d-none");

     });


     $(pic2).on('click', function() {

         boxx.addClass("col-md-3 col-sm-4 col-6 my-3");
         show.addClass("d-none");
         pic1.removeClass("d-none");

     });




 });