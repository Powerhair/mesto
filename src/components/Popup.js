export default class Popup {
    constructor(popupSelector) {    
      this._popup = popupSelector;
    }
  
    open() {
      this._popup.classList.add("popup_opened");
      document.addEventListener("keydown", this._handleEscapeClose);
    }
  
    close() {
      this._popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscapeClose);
    }
  
    _handleEscapeClose = (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    };
  
    setEventListeners() {
      this._popup.addEventListener("mousedown", (evt) => {
        if (evt.button == 0) {
          if (
            evt.target.classList.contains("popup_opened") ||
            evt.target.classList.contains("popup__close")
          ) {
            this.close();
          }
        }
      });
    }
  }
  