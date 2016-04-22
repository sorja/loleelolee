$( document ).ready(function() {
    var oldspeedlolee = 0;
    var loleespeed = [];
    var spotoldlolee = 0;
    var loleeloleebeep = new Audio("assets/biip.wav");

  var loleeColorereslolee = ["Red", "Orange", "Yellow", "Olive", "Green", "Teal", "Blue", "Violet", "Purple", "Pink", "Brown", "Grey"];
  $(document).on('click','.ui.button',function(){
    with (Math){
      var loleeClass = loleeColorereslolee[floor(random() * loleeColorereslolee.length)].toLowerCase() + " ui button"
      var posx = (random() * ($(document).width() - 80)).toFixed();
      var posy = (random() * ($(document).height() - 80)).toFixed();
      var lolees = Array(floor(random()* 6)).join("!")
      var loleelolee = random() < 0.001 ? "SUPER LOLEE LOLEE LOLEE LOLEE !!!!!!!!!!!!!!!!" : random() < 0.05 ? "loleelolee" : "lolee";
    }

    var loleeloleeButton = $("<button />").html(loleelolee + lolees).css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).addClass(loleeClass)
    .fadeIn(100)
    .appendTo('body' )
    .delay(1000)
    .fadeOut(4500, function(){$(this).remove();});
      dosomeloleeloleetimethings();
      loleeloleebeep.play();
  });

    function dosomeloleeloleetimethings(){
        var i = spotoldlolee++ % 5;
        loleespeed[i] = new Date().getTime();
        if (loleespeed.length < 2) return;

        var loleetext = (new Date().getTime() - getloleeloleeaverage())/1000
        $("h1").html("lolee lolee <br/> "+  loleetext.toFixed(4) + "s")
    }

    function getloleeloleeaverage() {
        return (loleespeed.reduce(function(a,b){ return a + b;})) / loleespeed.length;
    }
});
