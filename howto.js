$(document).ready(function () {

});

function startBattle() {
	/* Move */
    $('#luke').tween({
        left: {
            start: 0,
            stop: 175,
            time: 0,
            units: 'px',
            duration: 1,
            effect: 'bounceOut'
        },
    });
	$('#vader').tween({
        right: {
            start: 0,
            stop: 150,
            time: 0,
            units: 'px',
            duration: 1,
            effect: 'bounceOut'
        },
    });
	/* Blue Force Powers */
	$( '#luke' ).tween({
	   shadow:{
		  start: '0px 0px 0px #000',
		  stop: '10px 10px 30px #00f',
		  time: 0,
		  duration: 0.5,
		  effect:'bounceInOut'
	   },
	  borderRadius:{
		  start: 0,
		  stop: 20,
		  time: 0,
		  duration: 0.5,
		  units: 'px',
		  effect:'easeInOut'
	   }
	});
	$( '#vader' ).tween({
	   shadow:{
		  start: '0px 0px 0px #000',
		  stop: '10px 10px 30px #00f',
		  time: 0,
		  duration: 0.5,
		  effect:'bounceInOut'
	   },
	  borderRadius:{
		  start: 0,
		  stop: 20,
		  time: 0,
		  duration: 0.5,
		  units: 'px',
		  effect:'easeInOut'
	   },
	   /* rotate */
	   rotate:{
		  start:0,
		  stop:360,
		  units: 'degrees',
		  time: 1,
		  duration:1,
		  effect:'easeInOut'
	   }
	});
	/* Blue Force Go Away */
	$( '#luke' ).tween({
	   shadow:{
		  start: '10px 10px 30px #00f',
		  stop: '0px 0px 0px #000',
		  time: 1,
		  duration: 0.5,
		  effect:'bounceInOut'
	   },
	  borderRadius:{
		  start: 20,
		  stop: 0,
		  time: 1,
		  duration: 0.5,
		  units: 'px',
		  effect:'easeInOut'
	   }
	});
	$( '#vader' ).tween({
	   shadow:{
		  start: '10px 10px 30px #00f',
		  stop: '0px 0px 0px #000',
		  time: 1,
		  duration: 0.5,
		  effect:'bounceInOut'
	   },
	  borderRadius:{
		  start: 20,
		  stop: 0,
		  time: 1,
		  duration: 0.5,
		  units: 'px',
		  effect:'easeInOut'
	   }
	});
	/* Vader Push Luke */
	    $('#luke').tween({
        left: {
            start: 175,
            stop: 0,
            time: 2,
            units: 'px',
            duration: 1,
            effect: 'bounceOut'
        },
    });
	/* Luke Jump Back Blue Force */
	$( '#luke' ).tween({
	   shadow:{
		  start: '0px 0px 0px #000',
		  stop: '10px 10px 30px #00f',
		  time: 2,
		  duration: 0.5,
		  effect:'bounceInOut',
	   },
	   /* rotate */
	   rotate:{
		  start:0,
		  stop:-360,
		  units: 'degrees',
		  time: 2,
		  duration:1,
		  effect:'easeInOut'
	   },
	  borderRadius:{
		  start: 0,
		  stop: 20,
		  time: 2,
		  duration: 1,
		  units: 'px',
		  effect:'easeInOut'
	   }
	});
	/* Blue Force Go Away */
	$( '#luke' ).tween({
	   shadow:{
		  start: '10px 10px 30px #00f',
		  stop: '0px 0px 0px #000',
		  time: 3,
		  duration: 0.5,
		  effect:'bounceInOut'
	   },
	  borderRadius:{
		  start: 20,
		  stop: 0,
		  time: 3,
		  duration: 0.5,
		  units: 'px',
		  effect:'easeInOut'
	   }
	});
	/* Luke and Vader attack */
	$('#luke').tween({
		left:{
			start: 0,
			stop: 100,
			time: 3,
			duration: 1,
			units: 'px',
			effect:'bounceOut'
		}
	});
	$('#vader').tween({
		right:{
			start: 150,
			stop: 200,
			time: 3,
			duration: 1,
			units: 'px',
			effect:'bounceOut'
		}
	});
		/* Blue Force Powers */
	$( '#luke' ).tween({
	   shadow:{
		  start: '0px 0px 0px #000',
		  stop: '10px 10px 30px #00f',
		  time: 3,
		  duration: 0.5,
		  effect:'bounceInOut'
	   },
	  borderRadius:{
		  start: 0,
		  stop: 20,
		  time: 3,
		  duration: 0.5,
		  units: 'px',
		  effect:'easeInOut'
	   }
	});
	$( '#vader' ).tween({
	   shadow:{
		  start: '0px 0px 0px #000',
		  stop: '10px 10px 30px #00f',
		  time: 4,
		  duration: 0.5,
		  effect:'bounceInOut'
	   },
	  borderRadius:{
		  start: 0,
		  stop: 20,
		  time: 4,
		  duration: 0.5,
		  units: 'px',
		  effect:'easeInOut'
	   }
	  });
	  /* Luke Blue Force Go Away */
	  	$( '#luke' ).tween({
	   shadow:{
		  start: '10px 10px 30px #00f',
		  stop: '0px 0px 0px #000',
		  time: 4,
		  duration: 0.5,
		  effect:'bounceInOut'
	   },
	  borderRadius:{
		  start: 20,
		  stop: 0,
		  time: 4,
		  duration: 0.5,
		  units: 'px',
		  effect:'easeInOut'
	   }
	});
	  /* Vader Pushed Back */
	  $('#vader').tween({
		right:{
			start: 200,
			stop: 0,
			time: 4,
			duration: 1,
			units: 'px',
			effect:'elasticOut'
		}
	  });
	  /* Vader Blue Force Go Away */
	  	$( '#vader' ).tween({
	   shadow:{
		  start: '10px 10px 30px #00f',
		  stop: '0px 0px 0px #000',
		  time: 5,
		  duration: 0.5,
		  effect:'bounceInOut'
	   },
	  borderRadius:{
		  start: 20,
		  stop: 0,
		  time: 5,
		  duration: 0.5,
		  units: 'px',
		  effect:'easeInOut'
	   }
	});
	  /* Fade Out */
	  $('#finished').tween({
		opacity:{
			start: 100,
			stop: 0,
			time: 5,
			duration: 1,
			effect:'easeInOut'
		}
	  });
	  /* play animation */
	$.play();
};

function resetBattle() {
	/* reset Luke position */
	$('#luke').tween({
        left: {
            stop: 0,
            time: 0,
            units: 'px',
        },
    });
	/* reset Vader position */
	$('#vader').tween({
        right: {
            stop: 0,
            time: 0,
            units: 'px',
        },
    });
	/* reset background visibility */
	  $('#finished').tween({
		opacity:{
			start: 0,
			stop: 100,
			time: 0,
		}
	  });
	  /* play animation */
	  $.play();
};