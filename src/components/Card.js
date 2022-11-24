export default class Card {

    constructor(data, templateSelector, openPopupPhoto, idUser, addLike, removeLike, removeCard) {
      this._data = data;
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._openPopupPhoto = openPopupPhoto;
      this._id = data._id;
      this._likes = data.likes;
      this._userId = idUser;
      this._ownerId = data.owner._id;
      this._removeCard = removeCard;
      this._addLike = addLike;
      this._removeLike = removeLike;
      this._element = this._getTemplate();

    }
      
      

    _getTemplate() {
      const elementsCardTemplate = document
        .querySelector(this._templateSelector)
        .content.querySelector(".element")
        .cloneNode(true);
  
      return elementsCardTemplate;
    }

      //удаляет карточку
    deleteCard() {
       this._element.remove()
    }

    generateCard() {

      this._imageElement =  this._element.querySelector(".element__image");
      this._imageElement.src = this._link;
      this._element.querySelector(".element__title").textContent = this._name;
      this._imageElement.alt = this._name;

      this._likeElement = this._element.querySelector(".element__like")
      this._deleteBtn = this._element.querySelector('.element__trash');
      this._likeCounter = this._element.querySelector('.element__like-counter');
      this._likeCounter.textContent = `${this._likes.length}`;
      this._setEventListeners();

      this.isLiked();
      this.isOwner();
  
      return this._element;
      }

      setLikeCounter(res) {
        this._likeCounter.textContent = res.likes.length;
      }
  

      isLiked() {
        this._likes.forEach((user) => {
          if (user._id === this._userId) {
            this.addLike();
          } else {
            this.removeLike();
          }
        });
      }
      addLike() {
        this._likeElement.classList.add('element__like-active');
      }
      removeLike() {
        this._likeElement.classList.remove('element__like-active');
      }
      isOwner() {
        if (this._userId !== this._ownerId) {
          this._deleteBtn.remove()
        }
      }
      _handleLikeClick(id) {
        if (this._likeElement.classList.contains('element__like-active')) {
          this._removeLike(id)
        } else {
          this._addLike(id)
        }
        this._likeElement.classList.toggle('element__like-active');
      }

      _setEventListeners() {
        this._likeElement.addEventListener('click', () => {
          this._handleLikeClick(this._id);
        });
    
        this._deleteBtn.addEventListener('click', () => {
          this._removeCard(this._id);
        });
    
        this._imageElement.addEventListener('click', () => {
          this._openPopupPhoto(this._name, this._link)
        });
      }

      _handleDeleteElementsCard() {
          this._element.remove();
          
        }  
};