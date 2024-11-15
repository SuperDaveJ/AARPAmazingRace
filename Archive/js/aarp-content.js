var timer, videoWindow;
var msgViewed = false;

function showVideo() {
	videoWindow = window.open('video.html', 'Video', 'height=768,width=1024,toolbar=no,location=no,status=no,scrollbars=no,resizable=yes');

	timer = setInterval(checkVideoWindow, 1000);
}

function checkVideoWindow() {
    if (videoWindow.closed) {
        $("a#dialog").css("display", "block").addClass("animated slideInDown");
		//fadeInDown, zoomInDown, 
		$("a#dialog").attr("tabindex", 0);
        clearInterval(timer);
    }
}

var infoPanelVisible = false;
function toggleInfoPanel() {
  if ( infoPanelVisible ) {
	$( "#container" ).animate({
	  left: "-341",
	}, 1000, function() {
	  infoPanelVisible = false;
	  $("#close-panel").attr({"tabindex":-1});
	  $("#info-panel").attr("aria-hidden", true);
	});
  } else {
	$( "#container" ).animate({
	  left: "0",
	}, 1000, function() {
	  infoPanelVisible = true;
	  $("#close-panel").attr({"tabindex":0});
	  $("#info-panel").attr("aria-hidden", false);
	});
  }
}


$(document).ready(function() {
  $("img").attr("title", function() { return this.alt; } );
	
  /* Modal video keep playing after the modal is closed.
     The following code is used to stop it.
   */
  $('#vModal').on('hidden.bs.modal', function (e) {
    
	document.getElementById("video1").pause();
    if ( !msgViewed ) {
		$("a#dialog").css("display", "block").addClass("animated slideInDown");
		$("a#dialog").attr("tabindex", 0);
		$("a#dialog").focus();	//this does not work
	}
	$("a#tech-place").addClass("visited");
	msgViewed = true;
  });
});

(function() {

	var dlgtrigger = document.querySelector( '[data-dialog]' ),
		myDialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
		dlg = new DialogFx( myDialog );

	dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );
	$("#A-envelope").on("click", dlg.toggle.bind(dlg) );
	//$("#E-TBD").on("click", dlg.toggle.bind(dlg) );

})();

