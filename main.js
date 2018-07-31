var tune = $(".tune_mini_circle_2");
var volume = $(".tune_mini_circle");
var fm_slider = $(".tune_circle");
var angle = tune.css("transform", "rotate");
var fm_pole = $(".fm_slider_bar");
var fm_pole_loc = fm_pole.css("left");

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


  // FM CONTROLS
  var radio = $(".radio_list");
  var filename;

  Draggable.create(fm_slider, {
    type: "rotation",
    throwProps: true,
    bounds: {
      minRotation: -100,
      maxRotation: 100,
    },
    liveSnap: function(endValue) {

      fm_pole.css("left", endValue + 150);
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