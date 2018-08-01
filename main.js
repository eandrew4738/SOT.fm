var tune = $(".tune_mini_circle_2");
var volume = $(".tune_mini_circle");
var angle = tune.css("transform", "rotate");


// interaction functions

$(function functionName() {

  // ON/OFF CONTROLS

  
  var text = document.getElementById("text");
  Draggable.create(tune, {
    type: "rotation",
    throwProps: true,
    bounds: {
      minRotation: -40,
      maxRotation: 40
    },
    liveSnap: function (endValue)
     {
      var text = document.getElementById("text");
      var displayText = document.getElementById("displayText");

      if (endValue < 40) {
        text.style.display = "none",
          $("#musicPlayer").trigger('pause');
          $("#displayText").hide();
      }
      else {
        text.style.display = "block",
          $("#musicPlayer").trigger('play');
          $("#displayText").show();
      }
      var text = document.getElementById("text1");
      if (endValue < 40) {
        text.style.display = "block",
          $("#musicPlayer").trigger('pause');
          $("#displayText").hide();
      } else {
        text.style.display = "none",
          $("#musicPlayer").trigger('play');
          $("#displayText").show();
      }
      return Math.round(endValue / 40) * 40;
    }
  });


  // VOLUME CONTROLS

  var volumeMin;

  Draggable.create(volume, {
    type: "rotation",
    throwProps: true,
    bounds: {
      minRotation: -120,
      maxRotation: 120
    },
    liveSnap: function (endValue) {
      var middle = 0.50;
      if (endValue === 0) {
        $("#musicPlayer").prop("volume", middle);
      } else {
        $("#musicPlayer").prop("volume", ((endValue / 240) + middle));
      }
      return Math.round(endValue / 20) * 20;
    }
  });

});

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('timeText').innerHTML =
    h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

$( document ).ready(function() {
  $('.radioco_artwork').bind('DOMNodeInserted', function(event) {
    
    if($(this).children('img').attr("src") == "https://images.radio.co/station_logos/") {
      $(this).children('img').attr("src","./Images/default.png");
    }
    $(this).children('img').css({"width":"80px", "height":"80px"});
  });
});