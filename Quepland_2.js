// ==UserScript==
// @name         Quepland_2
// @namespace   mailto:steelcrusher@hotmail.com
// @license     MIT (https://opensource.org/licenses/MIT)
// @version      0.2
// @updateURL    https://raw.githubusercontent.com/Steelcrusher/Tampermonkey_scripts/main/Quepland_2.js
// @downloadURL  https://raw.githubusercontent.com/Steelcrusher/Tampermonkey_scripts/main/Quepland_2.js
// @updateURL    http://localhost/Tampermokey/Quepland_2.js
// @downloadURL  http://localhost/Tampermokey/Quepland_2.js
// @description  Quepland_2 Helper
// @author       SteelCrusher

// @match        https://quepland2.github.io/World/SunsHarbor/
// @include      /^https:\/\/quepland2\.github\.io\/.*$/
// @icon         https://www.google.com/s2/favicons?domain=github.io

// @run-at       document-start
// @grant        GM_addStyle
// @grant        unsafeWindow
// @grant        window.onurlchange
// @require      http://code.jquery.com/jquery-3.4.1.min.js

// ==/UserScript==

(function() {
	'use strict';
	window.$ = window.jQuery;
	window.q = {};
	var $ = window.jQuery;

	q.FishingRodloop = null;

	q.FishingRod.interval = 100;
	q.FishingRod.loop = null;
	q.FishingRod.fish = function()
	{
		q.clickBtn('Reel');
		q.clickBtn('Add Bait');
		q.clickBtn('Cast');
	}
	q.FishingRod.start()
	{
		if(q.FishingRod.loop !== null){ q.FishingRod.stop(); }

		q.FishingRod.loop = setInterval(q.FishingRod.fish, q.FishingRod.interval);
	}

	q.FishingRod.stop()
	{
		clearInterval(q.FishingRod.loop);
		q.FishingRod.loop == null;
	}





	q.clickBtn = function(txt){
		for (const a of document.getElementsByTagName("button")) {
			//console.warn(a);
			if(a.textContent.trim() == txt){
				//console.warn(a);
				a.click();
			}
		}
	}
})();