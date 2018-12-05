

function AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

//$(document).ready(function () {
//    $(".slide-3").hide();
//    $("#slider-3").hide();
//    $(".page3").hide();

//})

function getTime() {
    var date = new Date(), // current date

        timeNow = date.getHours() + ':' + AddZero(date.getMinutes()); // again, you get the idea

    //var start = 10 * 60 + 20;
    //var end = 12 * 60 + 10;

    //function inTime() {
    //    var now = new Date();
    //    var time = now.getHours() * 60 + now.getMinutes();
    //    return time >= start && time < end;
    //}

    //if (inTime() === true) {
    //    $(".slide-3").show();
    //    $("#slider-3").show();
    //    $(".page3").show();

    //} else if (inTime() === false){
           
    //        $(".slide-3").hide();
    //        $("#slider-3").hide();
    //        $(".page3").hide();
       
        
    //}

    var timeN = setTimeout(getTime, 1000);

   
}
getTime();


function updateClock() {
    var now = new Date(), // current date

        time = now.getHours() + ':' + AddZero(now.getMinutes()); // again, you get the idea



    // set the content of the element with the ID time to the formatted string
    document.getElementById('horaActual').innerHTML = time;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call


var TIMEOUT = 30000;


var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
    var $activeRadio = $('input[class*="slide-radio"]:checked');
  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);


  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);

    }



}

$(function () {
    var options = {
        scale: {
            startValue: 0, endValue: 100,
            tickInterval: 50,
            label: {
                customizeText: function (arg) {
                    return arg.valueText + ' min';
                }
            }
        }
    };


    $("#c5").dxLinearGauge($.extend(true, {}, options, {
        
        rangeContainer: {
            offset: 10,
            ranges: [
                { startValue: 0, endValue: 35, color: "#AA0622" },
            ]
        },
        scale: {
            startValue: 0,
            endValue: 35,
            tickInterval: 5,
            minorTickInterval: 1,
            minorTick: {
                visible: true
            },
            visible: true,
            label: {
                customizeText: function (arg) {
                    return arg.valueText + ' min';
                },
                font: {
                    color: "#fff",
                    family: "Segoe UI",
                    opacity: 1,
                    size: 12,
                    weight: 400
                },
                
            }
        },
       
        subvalueIndicator: {
            offset: -45,
            type: 'rangebar',
            color: '#3EC300',
            text: {
                customizeText: function (arg) {
                    return 'Meta';
                }
            }
        },
       
        subvalues: [15]
    }));

   

    //$("#gauge").dxCircularGauge({
    //    rangeContainer: {
    //        offset: 10,
    //        ranges: [
    //            { startValue: 0, endValue: 15, color: "#3EC300" },
    //            { startValue: 15, endValue: 35, color: "#FFFC31" },
    //            { startValue: 35, endValue: 60, color: "#FF1D15" }
    //        ]
    //    },

    //    scale: {
    //        startValue: 0,
    //        endValue: 60,
    //        tick: {
    //            visible: false,
    //        },
    //        majorTick: { tickInterval: 1 },
    //        label: {
    //            font: {
    //                color: "#fff",
    //                family: "Segoe UI",
    //                opacity: 0,
    //                size: 12,
    //                weight: 400
    //            },
    //        }
    //    },
    //    tooltip: {
    //        enabled: true,
    //        customizeText: function (arg) {
    //            return 'Logrado ' + arg.valueText;
    //        }
    //    },
    //    subvalueIndicator: {
    //        type: 'textCloud',
    //        text: {
    //            customizeText: function (arg) {
    //                return 'Meta ' + arg.valueText;
    //            }
    //        }
    //    },
    //    valueIndicator: {
    //        type: 'textCloud',
    //        text: {
    //            customizeText: function (arg) {
    //                return 'Logrado ' + arg.valueText;
    //            }
    //        }
    //    },
    //    value: 30,
    //    subvalues: [15]
    //});


    //    dxLinearGauge({
    //    scale: {
    //        startValue: 0,
    //        endValue: 60,
    //        tickInterval: 10,
    //        tick: {
    //            color: "#fff"
    //        },
    //        label: {
    //            indentFromTick: -3,
    //            font: {
    //                color: "#fff",
    //                family: "Segoe UI",
    //                opacity: 1,
    //                size: 12,
    //                weight: 400
    //            },
    //            useRangeColors: false,
    //            visible: true,
    //            format: 'minutes'
    //        }
    //    },
    //    rangeContainer: {
    //        offset: 10,
    //        ranges: [
    //            { startValue: 0, endValue: 15, color: "#3EC300" },
    //            { startValue: 15, endValue: 35, color: "#FFFC31" },
    //            { startValue: 35, endValue: 60, color: "#FF1D15" }
    //        ]
    //    },
    //    subvalueIndicator: {
    //        offset: -15,         
    //    },
    //    "export": {
    //        enabled: false
    //    },

    //    value: 23,
    //    valueIndicator: {
    //        arrowLength: 5,
    //        backgroundColor: "none",
    //        baseValue: undefined,
    //        beginAdaptingAtRadius: 50,
    //        color: "#fff",
    //        horizontalOrientation: "right",
    //        indentFromCenter: 0,
    //        length: 15,
    //        offset: 20,
    //        palette: "Pastel",
    //        secondColor: "#fff",
    //        secondFraction: 0.4,
    //        size: 10,
    //        spindleGapSize: 10,
    //        spindleSize: 14,
    //        type: "rangeBar",
    //        verticalOrientation: "bottom",
    //        width: 2
    //    },
        
    //});
});