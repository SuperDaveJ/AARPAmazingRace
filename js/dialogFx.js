/**
 * dialogFx.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';

	var support = { animations : Modernizr.cssanimations },
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		onEndAnimation = function( el, callback ) {
			var onEndCallbackFn = function( ev ) {
				if( support.animations ) {
					if( ev.target != this ) return;
					this.removeEventListener( animEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { callback.call(); }
			};
			if( support.animations ) {
				el.addEventListener( animEndEventName, onEndCallbackFn );
			}
			else {
				onEndCallbackFn();
			}
		};

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function DialogFx( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this.ctrlClose = this.el.querySelector( '[data-dialog-close]' );
		this.isOpen = false;
		this._initEvents();
	}

	DialogFx.prototype.options = {
		// callbacks
		onOpenDialog : function() { return false; },
		onCloseDialog : function() { return false; }
	}

	DialogFx.prototype._initEvents = function() {
		var self = this;

		// close action
		this.ctrlClose.addEventListener( 'click', this.toggle.bind(this) );

//console.log(this.el.id);

		// esc key closes dialog
		document.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;
			if( keyCode === 27 && self.isOpen ) {
				self.toggle();
			}
		} );

		this.el.querySelector( '.dialog__overlay' ).addEventListener( 'click', this.toggle.bind(this) );
	}

	DialogFx.prototype.toggle = function() {
		var self = this;
		
		// added by XZ for switch statement below
		var elementId = self.el.id;
		
		if( this.isOpen ) {
			classie.remove( this.el, 'dialog--open' );
			classie.add( self.el, 'dialog--close' );
			
			onEndAnimation( this.el.querySelector( '.dialog__content' ), function() {
				classie.remove( self.el, 'dialog--close' );
			} );

			// callback on close
			this.options.onCloseDialog( this );

			//Show when dialog is closed - added by XZ
			switch (elementId) {
				case "A-dialogBox":
					$("a#A-lg-env").removeClass("animated slideInDown");
					$("a#A-close-dialog").attr("tabindex", -1);
					$("#A-dialogBox").attr("aria-hidden", true);
					$("#A-sm-env").css("display", "block");
					break;
				case "B-dialogBox":
					$("a#B-lg-env").removeClass("animated slideInDown");
					$("a#B-close-dialog").attr("tabindex", -1);
					$("#B-dialogBox").attr("aria-hidden", true);
					$("#B-sm-env").css("display", "block");
					break;
				case "C-dialogBox":
					$("a#C-lg-env").removeClass("animated slideInDown");
					$("a#C-close-dialog").attr("tabindex", -1);
					$("#C-dialogBox").attr("aria-hidden", true);
					$("#C-sm-env").css("display", "block");
					break;
				case "D-dialogBox":
					$("a#D-lg-env").removeClass("animated slideInDown");
					$("a#D-close-dialog").attr("tabindex", -1);
					$("#D-dialogBox").attr("aria-hidden", true);
					$("#D-sm-env").css("display", "block");
					break;
				case "E-dialogBox":
					$("a#E-lg-env").removeClass("animated slideInDown");
					$("a#E-close-dialog").attr("tabindex", -1);
					$("#E-dialogBox").attr("aria-hidden", true);
					$("#E-sm-env").css("display", "block");
					break;
				default:
					//do nothing
					break;
			}
		}
		else {
			classie.add( this.el, 'dialog--open' );

			// callback on open
			this.options.onOpenDialog( this );

			//Hide the trigger when dialog is open - added by XZ
			$(".dlg-trigger").css("display", "none");
			switch (elementId) {
				case "A-dialogBox":
					$("#A-dialogBox").focus().attr("aria-hidden", false);
					$("a#A-close-dialog").attr("tabindex", 0);
					$("a#A-lg-env").attr("tabindex", -1);
					$("a#A-lg-env").hide();
					msgViewed_A = true;
					break
				case "B-dialogBox":
					$("#B-dialogBox").focus().attr("aria-hidden", false);
					$("a#B-close-dialog").attr("tabindex", 0);
					$("a#B-lg-env").attr("tabindex", -1);
					$("a#B-lg-env").hide();
					msgViewed_B = true;
					break
				case "C-dialogBox":
					$("#C-dialogBox").focus().attr("aria-hidden", false);
					$("a#C-close-dialog").attr("tabindex", 0);
					$("a#C-lg-env").attr("tabindex", -1);
					$("a#C-lg-env").hide();
					msgViewed_C = true;
					break
				case "D-dialogBox":
					$("#D-dialogBox").focus().attr("aria-hidden", false);
					$("a#D-close-dialog").attr("tabindex", 0);
					$("a#D-lg-env").attr("tabindex", -1);
					$("a#D-lg-env").hide();
					msgViewed_D = true;
					break
				case "E-dialogBox":
					$("#E-dialogBox").focus().attr("aria-hidden", false);
					$("a#E-close-dialog").attr("tabindex", 0);
					$("a#E-lg-env").attr("tabindex", -1);
					$("a#E-lg-env").hide();
					msgViewed_E = true;
					break
				default:
					//do nothing
					break;
			}
		}
		this.isOpen = !this.isOpen;
		
	};

	// add to global namespace
	window.DialogFx = DialogFx;

})( window );