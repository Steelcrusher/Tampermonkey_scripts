// ==UserScript==
// @name        Jira Helper
// @namespace   mailto:steelcrusher@hotmail.com
// @license     MIT (https://opensource.org/licenses/MIT)
// @version     1.0.0
// @updateURL   https://raw.githubusercontent.com/Steelcrusher/Tampermonkey_scripts/main/jira.js
// @downloadURL https://raw.githubusercontent.com/Steelcrusher/Tampermonkey_scripts/main/jira.js
// @description Design to modify how Onepspan's management interface displays elements to help with alignment of items and also expand the zoom fonction. Add a button in the top of the page to activate or deactivate changes.
// @author      SteelCrusher


// @match       http://jira.lunikit.com:8080*
// @match       http://jira.lunikit.com*
// @match       https://jira.lunikit.com:8080*
// @match       https://jira.lunikit.com*

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

//GM_addStyle(".devModeOn .js-setDevMode { background-color: lightgreen; }");

(function() {
	'use strict';

	var $ = window.jQuery;
	var devMode = false;

	console.log( "Loading Changes " );
	$(window).on('load', function () { init(); });

	var init = function (){
        console.log( "--- Init Started" );
        var height = $('._canvas__days_wrapper___1CFlF').height();
        $('._canvas__days_wrapper___1CFlF').height(height * 1.5);
        console.log( "--- Init Done" );
	};

})();
