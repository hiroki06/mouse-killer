// 'use strict';
// content.jsからアクセス localStorageの設定情報を取得する
function getLocalStorage () {
  chrome.runtime.onMessage.addListener(
      function (request, sender, sendResponse) {
        if (request.method == "getLocalStorage"){
            let data = { setting: localStorage['setting']};
            sendResponse(data);
        }
      }
    );
  };

getLocalStorage();