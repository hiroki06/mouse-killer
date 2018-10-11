'use strict';
(function(){
    class Clicklin (url,elmName,keySetting) {
        constructor(){
            this.url = url;
            this.elmName = elmName;
            // 内部
            this.forwardKey = keySetting.forwardKey;
            this.backwardKey = keySetting.backwardKey;
            this.currentLinkNum = -1;
            this.lastLinkNum = getLastNum(elmName);
            this.init();
        }
        init () {

        }
        appendKeyAct () {
            $(document).on('keydown', function(e) {
                if (e.ctrlKey && e.shiftKey) {

                }
            });
        }
        actions () {
            switch(e.keyCode){
                case this.forwardKey:
                    this.currentLinkNum += 1;
                    this.currentLinkNum <= this.lastLinkNum ? focusElm(this.currentLinkNum) : focusElm(this.currentLinkNum = 0);
                    break;
                case this.backwardKey:
                    this.currentLinkNum -= 1;
                    this.currentLinkNum >= 0 ? focusElm(this.currentLinkNum) :focusElm(this.currentLinkNum = this.lastLinkNum);
                    break;
            }
        }
        check (countOperator,inequality) {
            if(countOperator=='+'){
                this.currentLinkNum +=1;
            } else if( countOperator=='+' ) {
                this.currentLinkNum -=1;
            }
            this.currentLinkNum <= this.lastLinkNum ? focusElm(this.currentLinkNum) : focusElm(this.currentLinkNum = 0);
        }
        focusElm (elmNum) {
            $(elmName).eq(elmNum).focus();
        }
        len (elmName) {
            return $(elmName).length - 1;
        }

    }
}());