/*
**	Changing a website tab text when changing tab
*/

//
// Normal
//

window.onload = function() {

	  var pageTitle = document.title;
	  var attentionMessage = 'Come Back!';

	  document.addEventListener('visibilitychange', function(e) {
		      var isPageActive = !document.hidden;

		      if(!isPageActive){
			            document.title = attentionMessage;
			          }else {
					        document.title = pageTitle;
					      }
		    });
};

//
// with blink animation
//

window.onload = function() {

	  var pageTitle = document.title;
	  var attentionMessage = '*Come Back!';
	  var blinkEvent = null;

	  document.addEventListener('visibilitychange', function(e) {
		      var isPageActive = !document.hidden;

		      if(!isPageActive){
			            blink();
			          }else {
					        document.title = pageTitle;
					        clearInterval(blinkEvent);
					      }
		    });

	  function blink(){
		      blinkEvent = setInterval(function() {
			            if(document.title === attentionMessage){
					            document.title = pageTitle;
					          }else {
							          document.title = attentionMessage;
							        }
			          }, 100);
		    }
};
