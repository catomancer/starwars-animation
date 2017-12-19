function move(){
	$('#luke-move').tween({
        left: {
            start: 0,
            stop: 175,
            time: 0,
            units: 'px',
            duration: 1,
            effect: 'easeInOut'
        }
    });
	$.play();
}

function glow(){
	$( '#luke-glow' ).tween({
		shadow:{
			start: '0px 0px 0px #000',
			stop: '10px 10px 30px #00f',
			time: 0,
			duration: 0.5,
			effect: 'easeInOut'
		}
	});
	$.play();
}

function rotate(){
	$('#luke-rotate').tween({
		rotate:{
		  start: 0,
		  stop: 360,
		  units: 'degress',
		  time: 0,
		  duration: 1,
		  effect: 'easeInOut'
	   }
	});
	$.play();
}

function fade(){
	$('#luke-fade').tween({
		opacity:{
			start: 100,
			stop: 0,
			time: 0,
			duration: 1,
			effect:'easeInOut'
		}
	  });
	$.play();
}

function delay(){
	$('#luke-delay').tween({
        left: {
            start: 0,
            stop: 175,
            time: 3,
            units: 'px',
            duration: 1,
            effect: 'easeInOut'
        }
	});
	$.play();
}

function slow(){
	$('#luke-slow').tween({
        left: {
            start: 0,
            stop: 175,
            time: 0,
            units: 'px',
            duration: 3,
            effect: 'easeInOut'
        }
	});
	$.play();
}

function jumpAndSpin(){
	$('#luke-jump-spin').tween({
        left: {
            start: 0,
            stop: 200,
            time: 0,
            units: 'px',
            duration: 1,
            effect: 'easeInOut'
        },
		rotate: {
			start: 0,
			stop: 360,
			units: 'degrees',
			time: 0,
			duration: 1,
			effect: 'easeInOut'
		}
    });
	$.play();
}

function glowAndFade(){
	$('#luke-glow-fade').tween({
        shadow:{
			start: '0px 0px 0px #000',
			stop: '10px 10px 30px #00f',
			time: 0,
			duration: 1,
			effect: 'easeInOut'
		},
		shadow:{
			start: '10px 10px 30px #00f',
			stop: '0px 0px 0px #000',
			time: 1,
			duration: 1,
			effect: 'easeInOut'
		}
    });
	$.play();
}

function bounce(){
	$('#luke-bounce').tween({
		left:{
            start: 0,
            stop: 175,
            time: 0,
            units: 'px',
            duration: 1,
            effect: 'bounceInOut'
		}
	});
	$.play();
}

function elastic(){
	$('#luke-elastic').tween({
		left:{
            start: 0,
            stop: 175,
            time: 0,
            units: 'px',
            duration: 1,
            effect: 'elasticInOut'
		}
	});
	$.play();
}