export default class UserInfo {
  constructor({name, about, image}) {
    this._name = name;
    this._about = about;
    this._image = image;
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
  