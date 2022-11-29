export default class UserInfo {
  constructor(name, about, image) {
    this._name = name;
    this._about = about
    this._image = image;
  }

  getUserInfo() {
    const object = {
      nameInput: this._name.textContent,
      jobInput: this._about.textContent
    }
    return object
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._name.textContent = name
    this._about.textContent = about
  }

  setUserAvatar(image) {
    this._image.src = image;
  }
}
  