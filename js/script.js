var instance = $(".show");
$.each( instance, function(key, value) {
    
  var arrows = $(instance[key]).find(".arrow"),
      box = $(instance[key]).find(".content"), 
      x = 0,
      mx = 0;

  $(arrows).on('click', function() {
      
    if ($(this).hasClass("arrow-next")) {
      x = ((box.width() / 2)) + box.scrollLeft() +100;
      box.animate({
        scrollLeft: x,
      })
    } else {
      x = ((box.width() / 2)) - box.scrollLeft() +100;
      box.animate({
        scrollLeft: -x,
      })
    }
      
  });
    
  $(box).on({
    mousemove: function(e) {
      var mx2 = e.pageX - this.offsetLeft;
      if(mx) this.scrollLeft = this.sx + mx - mx2;
    },
    mousedown: function(e) {
      this.sx = this.scrollLeft;
      mx = e.pageX - this.offsetLeft;
    },

  });

  $(document).on("mouseup", function(){
    mx = 0;
  });
  

  
});

