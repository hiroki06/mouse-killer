'use strict';
(function(){
	// var で宣言したものは、関数内で使うという便宜的myルール。
	// TODO: 若干safetyじゃない気もするので、後ほど改良
	// ちなみに、この程度の開発レベルなので コメントで次やることを管理しているのである。
	var elmName = "#rcnt .r a";
	let forwardKey = 78,
		backwardKey = 80,
		currentLinkNum = -1,
		lastLinkNum = $(elmName).length - 1;

	const focusElm = (elmNum) => {
		$(elmName).eq(elmNum).focus();
	};

	$(document).on('keydown', function(e) {
		if (e.ctrlKey && e.shiftKey) {
			switch(e.keyCode){
				case forwardKey:
					currentLinkNum += 1;
					currentLinkNum <= lastLinkNum ? focusElm(currentLinkNum) : focusElm(currentLinkNum = 0);
					break;
				case backwardKey:
					currentLinkNum -= 1;
					currentLinkNum >= 0 ? focusElm(currentLinkNum) :focusElm(currentLinkNum = lastLinkNum);
					break;
			}
		}
	});
}());