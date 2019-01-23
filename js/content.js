'use strict';
(function () {
  class Clicklink {
    constructor(setting) {
      let elmName = setting.elmName,
        forwardKey = parseFloat(setting.forwardKey),
        backwardKey = parseFloat(setting.backwardKey),
        currentLinkNum = -1,
        lastLinkNum = $(elmName).length - 1;

      $(document).on('keydown', function (e) {
        if (e.ctrlKey && e.shiftKey) {
          switch (e.keyCode) {
            case forwardKey:
              currentLinkNum += 1;
              currentLinkNum <= lastLinkNum ? focusElm(elmName,currentLinkNum) : focusElm(elmName,currentLinkNum = 0);
              break;
            case backwardKey:
              currentLinkNum -= 1;
              currentLinkNum >= 0 ? focusElm(elmName,currentLinkNum) : focusElm(elmName,currentLinkNum = lastLinkNum);
              break;
          }
        }
      });
    };
  };
  const focusElm = (elmName,elmNum) => {
    $(elmName).eq(elmNum).focus();
  };
  const addLinkFocusEvent = () => {
    chrome.runtime.sendMessage({ method: "getLocalStorage"}, function (response) {
      let settings = JSON.parse(response.setting);
      let this_url = location.href;
      settings.forEach(keyBinds => {
        let reg = new RegExp(keyBinds.url);
        if( reg.test(this_url) ) {
          keyBinds.keysets.forEach(keyBind => {
            new Clicklink(keyBind);
          })
        }
      });
    });
  };
  addLinkFocusEvent();
}());