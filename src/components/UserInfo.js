export default class UserInfo {
  constructor(objectForUserInform) {
    this._name = objectForUserInform.profileName;
    this._about = objectForUserInform.profileJob;
    this._image = objectForUserInform.profileAvatar;
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
  