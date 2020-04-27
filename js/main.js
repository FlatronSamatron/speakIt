!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="js/",n(n.s=2)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(0),i=n.n(r),o=n(1),u=n.n(o),c=function(){function e(t,n,r){i()(this,e),this.parent=document.querySelector(".words"),this.baseURL="https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/",this.word=t.word,this.transcription=t.transcription,this.image=this.baseURL+t.image.slice(6),this.audio=new Audio(this.baseURL+t.audio.slice(6)),this.cardHTML=null,this.wordHTML=null,this.transcriptionHTML=null,this.mainImage=n,this.buttonResult=r}return u()(e,[{key:"renderHtmlElement",value:function(e,t,n,r,i,o){var u=document.createElement(t);return r&&(u.id=r),i&&(u.innerText=i),n&&(u.className=n),o&&(u.src=o),e.appendChild(u),u}},{key:"translateWord",value:function(e){var t=this,n="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ".concat(e," &lang=en-ru");fetch(n).then((function(e){return e.json()})).then((function(e){t.mainImage.updateState(t.image,e.text)}))}},{key:"translateInfo",value:function(e){var t=this,n="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ".concat(e," &lang=en-ru");fetch(n).then((function(e){return e.json()})).then((function(e){t.buttonResult.renderInfo(t.word,t.transcription,e.text)}))}},{key:"render",value:function(){var e=this.renderHtmlElement(this.parent,"div","item");this.renderHtmlElement(e,"p","word",null,this.word),this.renderHtmlElement(e,"p","transcription",null,this.transcription),this.renderHtmlElement(e,"img","audio-img",null,null,"./speaker.png");this.cardHTML=e}},{key:"init",value:function(){this.render(),this.setHandler(),this.translateInfo(this.word)}},{key:"setHandler",value:function(){var e=this;this.cardHTML.onclick=function(){e.audio.play(),e.translateWord(e.word),document.querySelectorAll(".item").forEach((function(e){return e.classList.remove("activeItem")})),e.cardHTML.classList.add("activeItem")}}},{key:"updateState",value:function(e,t){}}]),e}(),l=function(){function e(){i()(this,e),this.img="./blank.jpg",this.description="",this.pHTML=null,this.imgHTML=null}return u()(e,[{key:"renderHtmlElement",value:function(e,t,n,r,i,o){var u=document.createElement(t);return r&&(u.id=r),i&&(u.innerText=i),n&&(u.className=n),o&&(u.src=o),e.appendChild(u),u}},{key:"render",value:function(){var e=document.querySelector(".main-img");this.imgHTML=this.renderHtmlElement(e,"img","img",null,null,this.img),this.pHTML=this.renderHtmlElement(e,"p","translate",null,this.description)}},{key:"updateState",value:function(e,t){this.image=e,this.description=t,this.imgHTML.src=e,this.pHTML.innerText=t}}]),e}(),a=function(){function e(){i()(this,e)}return u()(e,[{key:"construcor",value:function(){this.dot=null,this.mainImage=null,this.point=0}},{key:"renderHtmlElement",value:function(e,t,n,r,i,o){var u=document.createElement(t);return r&&(u.id=r),i&&(u.innerText=i),n&&(u.className=n),o&&(u.src=o),e.appendChild(u),u}},{key:"init",value:function(e,t){this.render(e),this.setHandler(e),this.mainImage=t}},{key:"setHandler",value:function(e){var t=this;this.dot.addEventListener("click",(function(n){document.querySelectorAll(".dif").forEach((function(e){e.classList.remove("active")})),t.dot.classList.add("active");y(Math.floor(29*Math.random()+0),e,!1),t.mainImage.updateState("./blank.jpg",""),document.querySelectorAll(".item").forEach((function(e){return e.classList.remove("stopHover")})),document.querySelector(".main-img input")&&document.querySelector(".main-img input").remove(),document.querySelector(".wrong").innerHTML=""}))}},{key:"render",value:function(e){var t=document.querySelector("nav ul");this.dot=0==e?this.renderHtmlElement(t,"li","dif active"):this.renderHtmlElement(t,"li","dif")}}]),e}(),s=function(){function e(){i()(this,e),this.description="Restart",this.buttonHTML=null}return u()(e,[{key:"renderHtmlElement",value:function(e,t,n,r,i,o){var u=document.createElement(t);return r&&(u.id=r),i&&(u.innerText=i),n&&(u.className=n),o&&(u.src=o),e.appendChild(u),u}},{key:"init",value:function(){this.render(),this.setHandler()}},{key:"render",value:function(){var e=document.querySelector(".buttons");this.buttonHTML=this.renderHtmlElement(e,"p","button",null,this.description)}},{key:"setHandler",value:function(){this.buttonHTML.addEventListener("click",(function(){document.querySelectorAll(".item").forEach((function(e){e.classList.remove("activeItem"),e.classList.remove("stopHover")})),document.querySelector(".main-img .translate").innerHTML="",document.querySelector(".input").remove(),document.querySelector(".sucess").childNodes.forEach((function(e){return document.querySelector(".wrong").append(e)})),document.querySelector(".sucess").childNodes.forEach((function(e){return e.remove()})),document.querySelector(".suc").innerHTML="Не знаю: "+document.querySelector(".sucess").childNodes.length,document.querySelector(".error").innerHTML="Ошибок: "+document.querySelector(".wrong").childNodes.length}))}}]),e}(),d=function(){function e(){i()(this,e),this.description="Speak please",this.buttonHTML=null,this.words=null,this.img=null,this.mainImage=null,this.inputText=null,this.isRec=!0}return u()(e,[{key:"renderHtmlElement",value:function(e,t,n,r,i,o,u,c){var l=document.createElement(t);return r&&(l.id=r),i&&(l.innerText=i),n&&(l.className=n),o&&(l.src=o),u&&l.setAttribute(u,c),e.appendChild(l),l}},{key:"init",value:function(){this.render(),this.setHandler()}},{key:"render",value:function(){var e=document.querySelector(".buttons");this.buttonHTML=this.renderHtmlElement(e,"p","button",null,this.description)}},{key:"setHandler",value:function(){var e=this;this.buttonHTML.addEventListener("click",(function(){e.recognitionSpeak()}))}},{key:"setInfo",value:function(e,t){this.words=e.map((function(e){return e.word.toLowerCase()})),this.img=e.map((function(e){return"https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/"+e.image.slice(6)})),this.mainImage=t}},{key:"correctItem",value:function(e){var t=this;document.querySelectorAll(".item").forEach((function(n,r){n.querySelector(".word").innerText.toLowerCase()==e&&(n.classList.add("activeItem"),t.mainImage.updateState(t.img[r],""),t.upgradeInfo(e))}))}},{key:"upgradeInfo",value:function(e){var t;document.querySelectorAll(".item-info .word").forEach((function(n){n.innerHTML.toLowerCase()==e&&(t=n.parentElement,n.parentElement.remove(),document.querySelector(".sucess").append(t),document.querySelector(".suc").innerHTML="Не знаю: "+document.querySelector(".sucess").childNodes.length,document.querySelector(".error").innerHTML="Ошибок: "+document.querySelector(".wrong").childNodes.length)}))}},{key:"recognitionSpeak",value:function(){var e=this;document.querySelectorAll(".item").forEach((function(e){return e.classList.remove("activeItem")})),document.querySelectorAll(".item").forEach((function(e){return e.classList.add("stopHover")})),null!=this.inputText&&document.querySelector(".main-img input")&&document.querySelector(".main-img input").remove(),this.inputText=this.renderHtmlElement(document.querySelector(".main-img"),"input","input",null,"",null,"readonly"),window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;var t=new SpeechRecognition;t.interimResults=!0,t.lang="en-US",t.onresult=function(t){var n=Array.from(t.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");e.words.forEach((function(t){t==n.toLowerCase()&&e.correctItem(n.toLowerCase()),e.inputText.value=n}))},this.isRec?t.onend=t.start:t.onend=t.stop,t.start(),this.isRec=!1}}]),e}(),m=function(){function e(){i()(this,e),this.description="Result",this.buttonHTML=null,this.sound=null}return u()(e,[{key:"renderHtmlElement",value:function(e,t,n,r,i,o){var u=document.createElement(t);return r&&(u.id=r),i&&(u.innerText=i),n&&(u.className=n),o&&(u.src=o),e.appendChild(u),u}},{key:"init",value:function(){this.render(),this.setHandler()}},{key:"render",value:function(){var e=document.querySelector(".buttons");this.buttonHTML=this.renderHtmlElement(e,"p","button",null,this.description)}},{key:"renderInfo",value:function(e,t,n){var r=this.renderHtmlElement(document.querySelector(".wrong"),"div","item-info");this.renderHtmlElement(r,"p","word",null,e),this.renderHtmlElement(r,"p","transcription",null,t),this.renderHtmlElement(r,"p","translate",null,n)}},{key:"setHandler",value:function(){this.buttonHTML.addEventListener("click",(function(){document.querySelector(".container").style.display="none",document.querySelector(".result").style.display="flex"}))}}]),e}(),h=new l;h.render(),(new s).init();var f=new d;f.init();var p=new m;function y(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r="https://afternoon-falls-25894.herokuapp.com/words?page=".concat(e,"&group=").concat(t);fetch(r).then((function(e){return e.json()})).then((function(e){return v(e,n)}))}p.init();var v=function(e,t){var n=e.slice(0,10);f.setInfo(n,h),n.forEach((function(e,n){if(t){var r=new a;n<6&&t&&r.init(n,h),new c(e,h,p).init()}else{document.querySelectorAll(".item")[0].remove(),new c(e,h,p).init()}}))};y(0,0),document.querySelector(".return").addEventListener("click",(function(){document.querySelector(".container").style.display="flex",document.querySelector(".result").style.display="none"})),document.querySelector(".intro-btn").addEventListener("click",(function(){document.querySelector(".container").style.display="flex",document.querySelector(".main").style.display="none"})),document.querySelector(".newGame").addEventListener("click",(function(){document.querySelectorAll(".item").forEach((function(e){e.classList.remove("activeItem"),e.classList.remove("stopHover")})),document.querySelector(".input").value="",document.querySelector(".sucess").childNodes.forEach((function(e){return document.querySelector(".wrong").append(e)})),document.querySelector(".sucess").childNodes.forEach((function(e){return e.remove()})),document.querySelector(".suc").innerHTML="Не знаю: "+document.querySelector(".sucess").childNodes.length,document.querySelector(".error").innerHTML="Ошибок: "+document.querySelector(".wrong").childNodes.length}))}]);