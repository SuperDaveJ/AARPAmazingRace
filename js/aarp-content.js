var timer, videoWindow;
var msgViewed_A = false;
var msgViewed_B = false;
var msgViewed_C = false;
var msgViewed_D = false;
var msgViewed_E = false;

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
  $('#aVideo').on('hidden.bs.modal', function (e) {
	$(".dlg-trigger").css("display", "none");
	document.getElementById("video1").pause();
    if ( !msgViewed_A ) {
		$("a#A-lg-env").css("display", "block").addClass("animated slideInDown");
		$("a#A-lg-env").attr("tabindex", 0);
		$("a#A-lg-env").focus();	//this does not work
		//msgViewed_A = true;
	}
	$("a#A-tech-place").addClass("visited");
  });

  $('#bVideo').on('hidden.bs.modal', function (e) {
	$(".dlg-trigger").css("display", "none");
	document.getElementById("video2").pause();
    if ( !msgViewed_B ) {
		$("a#B-lg-env").css("display", "block").addClass("animated slideInDown");
		$("a#B-lg-env").attr("tabindex", 0);
		$("a#B-lg-env").focus();	//this does not work
		//msgViewed_B = true;
	}
	$("a#B-dc-office").addClass("visited");
  });

  $('#cVideo').on('hidden.bs.modal', function (e) {
	$(".dlg-trigger").css("display", "none");
	document.getElementById("video3").pause();
    if ( !msgViewed_C ) {
		$("a#C-lg-env").css("display", "block").addClass("animated slideInDown");
		$("a#C-lg-env").attr("tabindex", 0);
		$("a#C-lg-env").focus();	//this does not work
		//msgViewed_C = true;
	}
	$("a#C-library").addClass("visited");
  });

  $('#dVideo').on('hidden.bs.modal', function (e) {
	$(".dlg-trigger").css("display", "none");
	document.getElementById("video4").pause();
    if ( !msgViewed_D ) {
		$("a#D-lg-env").css("display", "block").addClass("animated slideInDown");
		$("a#D-lg-env").attr("tabindex", 0);
		$("a#D-lg-env").focus();	//this does not work
		//msgViewed_D = true;
	}
	$("a#D-studios").addClass("visited");
  });

  $('#eVideo').on('hidden.bs.modal', function (e) {
	$(".dlg-trigger").css("display", "none");
	document.getElementById("video5").pause();
    if ( !msgViewed_E ) {
		$("a#E-lg-env").css("display", "block").addClass("animated slideInDown");
		$("a#E-lg-env").attr("tabindex", 0);
		$("a#E-lg-env").focus();	//this does not work
		//msgViewed_E = true;
	}
	$("a#E-lobby").addClass("visited");
  });

	var el_dialog_A = document.getElementById( "A-dialogBox" );
	var dlg_A = new DialogFx( el_dialog_A );
	$("#A-lg-env").on("click", dlg_A.toggle.bind(dlg_A) );
	$("#A-sm-env").on("click", dlg_A.toggle.bind(dlg_A) );

	var el_dialog_B = document.getElementById( "B-dialogBox" );
	var dlg_B = new DialogFx( el_dialog_B );
	$("#B-lg-env").on("click", dlg_B.toggle.bind(dlg_B) );
	$("#B-sm-env").on("click", dlg_B.toggle.bind(dlg_B) );

	var el_dialog_C = document.getElementById( "C-dialogBox" );
	var dlg_C = new DialogFx( el_dialog_C );
	$("#C-lg-env").on("click", dlg_C.toggle.bind(dlg_C) );
	$("#C-sm-env").on("click", dlg_C.toggle.bind(dlg_C) );

	var el_dialog_D = document.getElementById( "D-dialogBox" );
	var dlg_D = new DialogFx( el_dialog_D );
	$("#D-lg-env").on("click", dlg_D.toggle.bind(dlg_D) );
	$("#D-sm-env").on("click", dlg_D.toggle.bind(dlg_D) );

	var el_dialog_E = document.getElementById( "E-dialogBox" );
	var dlg_E = new DialogFx( el_dialog_E );
	$("#E-lg-env").on("click", dlg_E.toggle.bind(dlg_E) );
	$("#E-sm-env").on("click", dlg_E.toggle.bind(dlg_E) );

});
