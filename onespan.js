// ==UserScript==
// @name        Onespan Management Helper
// @namespace   mailto:steelcrusher@hotmail.com
// @license     MIT (https://opensource.org/licenses/MIT)
// @version     1.0.1
// @updateURL   https://github.com/Steelcrusher/Tampermonkey_scripts/blob/main/onespan.js
// @downloadURL https://github.com/Steelcrusher/Tampermonkey_scripts/blob/main/onespan.js
// @description Design to modify how Onepspan's management interface displays elements to help with alignment of items and also expand the zoom fonction. Add a button in the top of the page to activate or deactivate changes.
// @author      SteelCrusher


// @match       https://sandbox.esignlive.com*
// @match       https://sandbox.esignlive.com/*
// @match       https://sandbox.esignlive.com/a/template/

// @run-at      document-start
// @grant       GM_addStyle
// @grant       unsafeWindow
// @grant       window.onurlchange
// @require     http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

/*
// Requires @grant window.onurlchange
if (window.onurlchange === null) {
	// feature is supported
	window.addEventListener('urlchange', (info) => ...);
}
 */

//Test of TamperMonkey Update

GM_addStyle(".devModeOn .js-setDevMode { background-color: lightgreen; }");
GM_addStyle(".js-setDevMode { background-color: lightgrey; }");
GM_addStyle(".devModeOn * [tabIndex]:focus:not(li):not([tabIndex='-1']):not(button):not(.border-focus-style):not(.border-focus-style-alternative):not(.no-focus-style) { outline-width: 0px !important }");
GM_addStyle(".devModeOn *:not(li):not(.border-focus-style):not(.border-focus-style-alternative):not(.no-focus-style)>button:focus { outline-width: 0px !important }");
GM_addStyle(".devModeOn * textarea:focus:not(li):not(.border-focus-style):not(.border-focus-style-alternative):not(.no-focus-style) { outline-width: 0px !important }");
GM_addStyle(".devModeOn * a:focus:not(li):not(.border-focus-style):not(.border-focus-style-alternative):not(.no-focus-style) { outline-width: 0px !important }");
GM_addStyle(".devModeOn * select:focus:not(li):not(.border-focus-style):not(.border-focus-style-alternative):not(.no-focus-style) { outline-width: 0px !important }");
GM_addStyle(".devModeOn * input:focus:not(li):not(.border-focus-style):not(.border-focus-style-alternative):not(.no-focus-style):not(.search-field-outline) { outline-width: 0px !important }");
GM_addStyle(".devModeOn .Select.is-focused>.Select-control{ outline-width: 0px !important }");
GM_addStyle(".devModeOn .spot-rule{ display:none !important }");
GM_addStyle(".devModeOn .spot .edge-icon { margin: 10px; }");
GM_addStyle('.js-setDevMode {'+
            '    color: rgba(0, 0, 0, 0.87);'+
            '    padding: 0px 8px;'+
            '    font-size: 0.775rem;'+
            '    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;'+
            '    transition-property: background-color, box-shadow, border;'+
            '    transition-duration: 250ms, 250ms, 250ms;'+
            '    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1);'+
            '    transition-delay: 0ms, 0ms, 0ms;'+
            '    font-family: "Lato",Helvetica,Arial,sans-serif;'+
            '    font-weight: 500;'+
            '    line-height: 1.75;'+
            '    text-transform: uppercase;'+
            '    cursor: pointer;'+
            '    margin: 0;'+
            '    position: relative;'+
            '    align-items: center;'+
            '    user-select: none;'+
            '    vertical-align: middle;'+
            '    justify-content: center;'+
            '     border: 1px solid; border-radius: 5px;background: lightgray;}');

(function() {
	'use strict';

	var $ = window.jQuery;
	var devMode = false;
	var maxLoopInit = 100;
	var cntLoopInit = 0;

	console.log( "Loading Changes " );
	$(window).on('load', function () { init(); });
	$(document).on( "click", '.js-setDevMode', function(){ changeDevMode(); });

	var init = function (){
		if($('nav.main-nav ul').length > 0){
			$('body').append('<div class"js-setDevMode-absolute" style="position: absolute;top: 0;left: 50%;z-index: 9000;"><button class="js-setDevMode" tabindex="0" type="button" id="admin-set-devmode" aria-label="Admin" aria-haspopup="true" aria-expanded="false"><span class="MuiButton-label">Dev Mode - Off</span></button></div>');
			//$('nav.main-nav ul').append('<li class="list-item" role="none"><button class="MuiButtonBase-root MuiButton-root js-setDevMode MuiButton-text" tabindex="0" type="button" id="admin-set-devmode" aria-label="Admin" aria-haspopup="true" aria-expanded="false"><span class="MuiButton-label">Dev Mode - Off</span></button></li>');
			console.log( "Loading Changes - Done!" );
		}else{
			console.log('.');
			if(++cntLoopInit > maxLoopInit){
				console.log( "Loading Changes - Failed..." );
				return false;
			}
			setTimeout(init, 100);
		}
	};

	var changeDevMode = function (){
		devMode = !devMode

		if(devMode){
			$('.js-setDevMode').text('Dev Mode - On');
			$('body').addClass('devModeOn');
			if(iscrollInstance && iscrollInstance.options && iscrollInstance.options.zoomMax && iscrollInstance.options.zoomMax < 10){
				iscrollInstance.options.zoomMax = 10;
			}
		}else{
			$('.js-setDevMode').text('Dev Mode - Off');
			$('body').removeClass('devModeOn');
		}
	};
})();
