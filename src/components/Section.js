// класс Section на вход получает массив карточек, функцию renderer которая добавляет карточку на страницу, и место куда добавить карточки (containerSelector)
export default class Section {
    constructor({renderer}, containerSelector) {
      this._container = containerSelector;
      this._renderer = renderer;
    }

    clear() {
      this._container.innerHTML = '';
    }

//   перебираем каждую карточку и каждой полученной добавляем функцию renderer тем самым добавляем ее на страницу
    renderItems(items) {
      this.clear();
      items.forEach((item) => {
        this._renderer(item);
      });
    }
  
    addItem(element) {
      this._container.prepend(element);
    }

    addItemServer(element) {
      this._container.append(element);
    }
  }