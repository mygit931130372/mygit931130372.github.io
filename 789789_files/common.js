$(document).ready(function(){
	$('.newListStyle .list').bind({
		mousemove:function() {
			$(this).addClass('mousemove');

			var width = $(this).css('width');
			var obj = $(this).offset();

			if ($.browser.mozilla) {
				var ileft = (parseInt(width) - 94) / 2;
			}
			else {
				var ileft = (parseInt(width) - 94) / 1.7;
			}

			$(this).children("ul").css('top', obj.top + 25);
			$(this).children("ul").css('left', obj.left + ileft);

			$(this).children("ul").css('display', 'block');
		},
		mouseout:function() {
			$(this).removeClass('mousemove');
			$(this).children("ul").css('display', 'none');
		}
	});

	$('.newListStyleNotClass .list').bind({
		mousemove:function() {
			$(this).addClass('mousemove');

			var width = $(this).css('width');
			var obj = $(this).offset();

			if ($.browser.mozilla) {
				var ileft = (parseInt(width) - 94) / 2;
			}
			else {
				var ileft = (parseInt(width) - 94) / 1.7;
			}

			$(this).children("ul").css('top', obj.top + 25);
			$(this).children("ul").css('left', obj.left + ileft);

			$(this).children("ul").css('display', 'block');
		},
		mouseout:function() {
			$(this).removeClass('mousemove');
			$(this).children("ul").css('display', 'none');
		}
	});

	$('#subNav li').bind({
		mousemove:function() {
			var obj = $(this).offset();

			$(this).children("div").css('top', obj.top);
			$(this).children('div').css('left', obj.left);
			$(this).children("div").css('display', 'block');
		},
		mouseout:function() {
			$(this).children("div").css('display', 'none');
		}
	});
	$('.fanpai .b').hover(function(){
		$(this).css({'z-index' : '10'});
		$(this).find('img').addClass("hover").stop()
		.animate({
			marginTop: '-18px',
			marginLeft: '-21px',
			top: '50%',
			left: '50%',
			width: '150px',
			height: '70px',
			padding: '10px'
		}, 200);}, function() {
		$(this).css({'z-index' : '0'});
		$(this).find('img').removeClass("hover").stop()
		.animate({
			marginTop: '0',
			marginLeft: '0',
			top: '0',
			left: '0',
			width: '128px',
			height: '60px',
			padding: '0px'
		}, 400);
	});
})

var i = false;
function show_sub(id) {

	if (i == false) {
		$('.nav li').removeClass('current');
		$('#subNav ul').removeClass('show');
		$('#sub_0').removeClass('show');

		if (id == 0) {
			$('#p_0').addClass('current');
			$('#sub_0').addClass('show');
		}
		else {
			$('#p_'+id).addClass('current');
			$('#sub_'+id).addClass('show');
		}

		i = true;
	}

	setTimeout(function() {i=false}, 1000);
}

