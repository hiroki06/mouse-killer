// 'use strict';
// content.jsからアクセス localStorageの設定情報を取得する
function getLocalStorage () {
  chrome.runtime.onMessage.addListener(
      function (request, sender, sendResponse) {
        if (request.method == "getLocalStorage"){
            let data = { setting: localStorage['setting']};
            sendResponse(data);
        } else if (request.method == "setLocalStorage"){
          let initSettings = {
            url: "https://www.google.com/search",
            keysets: [
              {
                id: 0,
                forwardKey: 78,
                backwardKey: 80,
                elmName: "#rcnt .rc .r > a:nth-of-type(1)"
              }
            ]
          }
          localStorage.setItem('setting',JSON.stringify([initSettings]));
        }
      }
    );
  };

getLocalStorage();