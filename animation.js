// Author: Harsh Patel

// so we only do then when the webpage is loaded up
$(document).ready
(
function()
{
	// hide the message input box.
	$('.chatRoom').addClass('hide');
	// for the fields,  get the third one and hide it..
	$('li.fields').filter(':nth-child(n+3)').addClass('hide');
	
	// for all list iteams with the class title, perform this lambda expression.. 
	// slide down at the speed of 200 and the rest, slid up at the speed of 200
	$('ul').on('click','li.title',function()
	{
		$(this).next().slideDown(200).siblings('li.fields').slideUp(200);
	});	

}
 
);
