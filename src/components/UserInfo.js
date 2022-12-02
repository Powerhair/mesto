export default class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._image = document.querySelector(avatarSelector);
  }


  getUserInfo() {
   
    const object = {
      nameInput: this._name.textContent,
      jobInput: this._about.textContent
    }
    return object
  }

  setUserInfo( user ) {

    this._name.textContent = user.name,
    this._about.textContent = user.about
  }

  setUserAvatar(image) {
    this._image.src = image;
  }
}
  