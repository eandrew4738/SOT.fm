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


var clock = new Vue({
  el: '#clock',
  data: {
      time: '',
      date: ''
  }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
  var cd = new Date();
  clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
  clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
  var zero = '';
  for(var i = 0; i < digit; i++) {
      zero += '0';
  }
  return (zero + num).slice(-digit);
}