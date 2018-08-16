function offlineDetect() {
    if( $(".radioco_status").html() === "offline" ) {
      $(".radioco_song").hide();
      $(".radioco_next").hide();
      $(".radioco_artwork").hide();
      $(".next").hide();
      $(".now").hide();
      $(".online_green").hide();
      $(".offline_red").show();
      $(".radio_offline").show();
    }
    else {
      $(".radioco_song").show();
      $(".radioco_next").show();
      $(".radioco_artwork").show();
      $(".next").show();
      $(".now").show();
      $(".online_green").show();
      $(".offline_red").hide();
      $(".radio_offline").hide();
    }
}

$(document).ready(function() {
  setTimeout(function() {
    offlineDetect();
  },2000);
  setInterval(function() {
      offlineDetect();
  },2000);

});

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

      console.log(endValue);
      
      if (endValue == -40) {
        text.style.display = "none",
          $("#musicPlayer").trigger('pause');
          $("#displayText").hide();
      }
      else if(endValue = 40) {
        text.style.display = "block",
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

$('.social-toggle').on('click', function() {
  $(this).next().toggleClass('open-menu');
});

$('.contact-toggle').on('click', function() {
  $(this).next().toggleClass('open-menu');
});



