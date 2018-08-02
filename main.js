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


$(document).ready(function() {
      console.log("Trigger");
        if($('.radioco_artwork').children('img').attr("src") === "https://images.radio.co/station_logos/") {
          $('.radioco_artwork').children('img').attr("src","./Images/default.png");
        }
});