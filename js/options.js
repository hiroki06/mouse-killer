(function() {
  'use strict';

  let vm = new Vue({
    el:"#options",
    data: {
      urls: [
        {
          url: "https://www.google.com/search",
          keysets: [
            {
              // id: 0,
              // forwordKeyStr: "n",
              // backwardKeyStr: "p",
              // forwardKey: 78,
              // backwardKey: 80,
              // elmName: "#rcnt .rc .r > a:nth-of-type(1)"
            }
          ]
        }
      ]
    },
    watch: {
      urls: {
        handler: function() {
          localStorage.setItem('setting', JSON.stringify(this.urls));
          // ls.set('clicklinData', this.urls);
        },
          deep: true
      }
    },
    mounted: function() {
        this.urls = JSON.parse(localStorage.getItem('setting')) || [];
    },
    methods: {
      addSetting:function () {
        // this.urls.push(this.newurl);
      },
      deleteUrl: function (index) {
        if (confirm('are you sure?')) {
          this.urls.splice(index, 1);
        }
      },
      deleteItem: function(urlIndex,itemIndex) {
        if (confirm('are you sure?')) {
          this.urls[urlIndex].keysets.splice(itemIndex, 1);
        }
      },
      addUrl: function () {
        // let len = this.urls.length + 1;
        this.urls.push({
          url:"",
          keysets:[{
            id:0,
            forwardKeyStr:"",
            backwardKeyStr:"",
            forwardKey:"",
            backwardKey:"",
            elmName:""
          }]
        });
      },
      addItem: function (urlIndex,itemIndex) {
        this.urls[urlIndex].keysets.push({
          id:itemIndex+1,
          forwardKeyStr: "",
          backwardKeyStr: "",
          forwardKey:"",
          backwardKey:"",
          elmName:""
        });
      },
      saveItems: function() {
        localStorage.setItem('setting', JSON.stringify(this.urls));
      },
      showDataToConsole: function () {
        console.dir(this.urls);
      },
      setKeyCode: function (urlIndex, itemIndex, keyType, event, prop) {
        this.urls[urlIndex].keysets.forEach(hash => {
          if (hash['id'] == itemIndex && event.key.length == 1) {
            if(hash[`${keyType}Str`] == "" || hash[`${keyType}Str`] == event.key) {
              hash[keyType] = event.keyCode;
            }
          }
        });
      }
    },
  });
}());
