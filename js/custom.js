//movement for the cat eyes

$(document).ready(function(){
  $('body').mousemove(function(e){
    var x = e.pageX - this.offsetLeft;
    if(x<=400){
      $(".inner-eye").css('right: x')
    }
  });
});
