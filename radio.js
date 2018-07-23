var tune = $(".tune_mini_circle_2");
var volume = $(".tune_mini_circle")
var fm_slider = $(".tune_circle");
var angle = tune.css("transform", "rotate");
var fm_pole = $(".fm_slider_bar");
var fm_pole_loc = fm_pole.css("left");

// interaction functions
$('.btn').bind('click', function(){
  $(this).toggleClass('active');
});

$(function functionName() {

    // VOLUME CONTROLS

  var volumeMin;

  Draggable.create(volume, {
    type: "rotation",
    throwProps: true,
    bounds: {
      minRotation: -120,
      maxRotation: 120
    },
    liveSnap: function(endValue) {
      var middle = 0.50;
      if (endValue === 0) {
        $(".radio_list").prop("volume", middle);
      } else {
        $(".radio_list").prop("volume", ((endValue / 240) + middle));
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


$('#toggle').click(function() {
  if ($('#musicPlayer').prop('paused') == false) {
    $('#musicPlayer').trigger('pause');
  } else {
    $('#musicPlayer').trigger('play');
  }
});



$('.header3').on('click', function(event) {
  event.preventDefault();
    $('.smenu').toggleClass('share');
});