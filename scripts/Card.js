export class Card {

    constructor(data, templateSelector, openPopupPhoto) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopupPhoto = openPopupPhoto;
    this._element = this._getTemplate();

    this._imageElement =  this._element.querySelector(".element__image");
    this._likeElement = this._element.querySelector(".element__like")
      }
      
      

    _getTemplate() {
        const elementsCardTemplate = document
          .querySelector(this._templateSelector)
          .content.querySelector(".element")
          .cloneNode(true);
    
        return elementsCardTemplate;
      }

    generateCard() {
        this._setEventListeners();

        this._imageElement.src = this._link;
        this._element.querySelector(".element__title").textContent = this._name;
        this._imageElement.alt = this._name;
    
        return this._element;
      }

    _setEventListeners() {
        this._likeElement.addEventListener("click", () => {
        this._handleLikeElementsCard();
        });
    
        this._element
            .querySelector(".element__trash")
            .addEventListener("click", () => {
        this._handleDeleteElementsCard();
        });
    
        this._imageElement.addEventListener("click", () => {
        this._openPopupPhoto(this._name, this._link);
        });
    }

    _handleLikeElementsCard() {
      this._likeElement.classList.toggle("element__like-active");
      }

    _handleDeleteElementsCard() {
        this._element.remove();
      }  
};