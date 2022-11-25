(()=>{"use strict";var e=document.querySelector(".profile__addButton"),t=document.querySelector(".profile__editButton"),n=document.querySelector(".profile__title"),r=document.querySelector(".profile__text"),o=document.querySelector(".profile__avatar"),i=document.querySelector(".popup-profile"),u=(document.querySelector(".form__name"),document.querySelector(".form__description"),document.querySelector(".form"),document.querySelector(".popupDelete")),a=document.querySelector(".popupChangeAvatar"),s=document.querySelector(".popup_card-add"),c=document.querySelector(".popup_fullscreen"),l=document.querySelector(".elements");function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClassActiv=t.inputErrorClassActiv,this._inputErrorClass=t.inputErrorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClassActiv),t.textContent=e.validationMessage,t.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClassActiv),t.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtoneState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtoneState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtoneState()}))}))}},{key:"toggleSubmitButtonOnOpeningPopup",value:function(){this._toggleButtoneState(this._inputList,this._buttonElement)}},{key:"resetValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtoneState()}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n,r,o,i,u,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._name=t.name,this._link=t.link,this._templateSelector=n,this._openPopupPhoto=r,this._id=t._id,this._likes=t.likes,this._userId=o,this._ownerId=t.owner._id,this._removeCard=a,this._addLike=i,this._removeLike=u,this._element=this._getTemplate()}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"generateCard",value:function(){return this._imageElement=this._element.querySelector(".element__image"),this._imageElement.src=this._link,this._element.querySelector(".element__title").textContent=this._name,this._imageElement.alt=this._name,this._likeElement=this._element.querySelector(".element__like"),this._deleteBtn=this._element.querySelector(".element__trash"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._likeCounter.textContent="".concat(this._likes.length),this._setEventListeners(),this.isLiked(),this.isOwner(),this._element}},{key:"setLikeCounter",value:function(e){this._likeCounter.textContent=e.likes.length}},{key:"isLiked",value:function(){var e=this;this._likes.forEach((function(t){t._id===e._userId?e.addLike():e.removeLike()}))}},{key:"addLike",value:function(){this._likeElement.classList.add("element__like-active")}},{key:"removeLike",value:function(){this._likeElement.classList.remove("element__like-active")}},{key:"isOwner",value:function(){this._userId!==this._ownerId&&this._deleteBtn.remove()}},{key:"_handleLikeClick",value:function(e){this._likeElement.classList.contains("element__like-active")?this._removeLike(e):this._addLike(e),this._likeElement.classList.toggle("element__like-active")}},{key:"_setEventListeners",value:function(){var e=this;this._likeElement.addEventListener("click",(function(){e._handleLikeClick(e._id)})),this._deleteBtn.addEventListener("click",(function(){e._removeCard(e._id)})),this._imageElement.addEventListener("click",(function(){e._openPopupPhoto(e._name,e._link)}))}},{key:"_handleDeleteElementsCard",value:function(){this._element.remove()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._container=n,this._renderer=o}var t,n;return t=e,(n=[{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"addItemServer",value:function(e){this._container.append(e)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscapeClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscapeClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscapeClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){0==t.button&&(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n._formInputs=Array.from(n._popup.querySelectorAll(".form__input")),n._popupForm=n._popup.querySelector(".form"),n._button=n._popupForm.querySelector(".popup__button-submit"),n._buttonText=n._button.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formInputValues={},this._formInputs.forEach((function(t){e._formInputValues[t.name]=t.value})),this._formInputValues}},{key:"setInputValue",value:function(e){this._formInputs.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){g(L(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setNewSubmitForm",value:function(e){this._submitForm=e}},{key:"setEventListeners",value:function(){var e=this;g(L(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"load",value:function(e){this._button.textContent=e?"Сохранение...":this._buttonText}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._about=n,this._image=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;e.avatar,e._id,this._name.textContent=t,this._about.textContent=n}},{key:"setUserAvatar",value:function(e){this._image.src=e}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function T(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._link=t._popup.querySelector(".popup__image"),t._name=t._popup.querySelector(".popup__image-title"),t}return t=u,(n=[{key:"open",value:function(e,t){q(B(u.prototype),"open",this).call(this),this._link.src=t,this._name.alt=e,this._name.textContent=e}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkRequest",value:function(e){return e.ok?e.json():Promise.reject("error")}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkRequest)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkRequest)}},{key:"getData",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"getUserAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkRequest)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkRequest)}},{key:"postUserCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({link:e.link,name:e.name})}).then(this._checkRequest)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkRequest)}},{key:"removeLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkRequest)}},{key:"removeCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRequest)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F,N=new C(s,(function(e){N.load(!0),$.postUserCard(e).then((function(e){K.addItemUser(Q(e)),N.close()})).catch((function(e){console.log(e)})).finally((function(){N.load(!1)}))})),H=new C(u),J=new C(a,(function(e){J.load(!0),$.getUserAvatar(e.link).then((function(e){G.setUserAvatar(e.avatar),J.close()})).catch((function(e){console.log(e)})).finally((function(){J.load(!1)}))})),M=new C(i,(function(e){M.load(!0);var t=e.name,n=e.about;$.setUserInfo(t,n).then((function(e){G.setUserInfo(e),M.close(),console.log(ok)})).catch((function(e){console.log(e)})).finally((function(){M.load(!1)}))})),z=new x(c),$=new V({url:"https://mesto.nomoreparties.co/v1/cohort-54/",headers:{authorization:"eef832b0-db39-4c9c-94d9-9862628b85e3","Content-Type":"application/json"}}),G=new I(n,r,o);$.getData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];F=o._id,G.setUserInfo(o),G.setUserAvatar(o.avatar),K.renderItems(i)})).catch((function(e){console.log(e)}));var K=new y({items:[],renderer:function(e){K.addItemServer(Q(e))}},l);function Q(e){var t=new _(e,"#element-template",W,F,(function(e){$.addLike(e).then((function(e){t.setLikeCounter(e),t.addLike()})).catch((function(e){console.log(e)}))}),(function(e){$.removeLike(e).then((function(e){t.setLikeCounter(e),t.removeLike()})).catch((function(e){console.log(e)}))}),(function(e){H.open(),H.setNewSubmitForm((function(){$.removeCard(e).then((function(){t.deleteCard(),H.close()})).catch((function(e){console.log(e)}))}))}));return t.generateCard()}function W(e,t){z.open(e,t)}t.addEventListener("click",(function(){Y.formEdit.resetValidationErrors(),M.open();var e=G.getUserInfo();M.setInputValue(e),M.open()})),e.addEventListener("click",(function(){Y.formAdd.resetValidationErrors(),N.open()})),o.addEventListener("click",(function(){J.open(),Y.formAvatar.resetValidationErrors()})),z.setEventListeners(),N.setEventListeners(),M.setEventListeners(),H.setEventListeners(),J.setEventListeners();var X,Y={};X={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".popup__button-submit",inactiveButtonClass:"popup__button_invalid",inputErrorClassActiv:"form-input-message-error-activ",inputErrorClass:"form__input-invalid"},Array.from(document.querySelectorAll(X.formSelector)).forEach((function(e){var t=new h(X,e),n=e.getAttribute("name");Y[n]=t,t.enableValidation()}))})();