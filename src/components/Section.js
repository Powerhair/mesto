// класс Section на вход получает массив карточек, функцию renderer которая добавляет карточку на страницу, и место куда добавить карточки (containerSelector)
export default class Section {
    constructor({items, renderer}, containerSelector) {
      this._items = items;
      this._container = containerSelector;
      this._renderer = renderer;
    }
//   перебираем каждую карточку и каждой полученной добавляем функцию renderer тем самым добавляем ее на страницу
    renderItems(items) {
      items.forEach((item) => {
        this._renderer(item);
      });
    }
  
    addItem(element) {
      this._container.prepend(element);
    }
  }