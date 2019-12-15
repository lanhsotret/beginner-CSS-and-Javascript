$(document).ready(()=>{
	// giới hạn nội dung trong box
	let MaxText = 100;
	let TextP = $('.container p').html();
	console.log(TextP);
	if(TextP.length > MaxText) {
	 	for(MaxText += 1; ; MaxText++) {
	 		if(TextP.charAt(MaxText) === " ") {
	 			$('.container p').html(TextP.substring(0, MaxText + 1));
	 			break;
	 			}
	 		}
	 	let TextNow = $('.container p').html();
 		let moreText = TextP.substring(TextNow.length - 1, TextP.length + 1);
 		let SpanMore = $('<span></span').text(moreText);
 		$('.container p').append(SpanMore);
 		$('.container p').append('<span>...</span>');
 		$('.container p').append('<span>&#10012</span>');
 		let spanShowHide = $('.container p > span:nth-of-type(1)');
 		let SpanMoreTexxt = $('.container p > span:nth-of-type(2)');
 		let SpanButton = $('.container p > span:nth-of-type(3)');
 		spanShowHide.css('display', 'none');
 		SpanButton.click(()=>{
 			if(spanShowHide.css('display') == "none") {
 				$('container p').css('height', $('container p').width() + 'px');
 				spanShowHide.css('display','inline');
 				SpanMoreTexxt.css('display', 'none');
 				SpanButton.html('&#9866');
 			} else {
 				$('container p').css('height', 'initial');
 				spanShowHide.css('display','none');
 				SpanMoreTexxt.css('display', 'inline');
 				SpanButton.html('&#10012');
 			}
 		});
	}

});