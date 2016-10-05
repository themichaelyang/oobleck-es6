// draw buttons and game ui with html instead of canvas
class Interface {
  // interface should potentially handle all the elements within this?
  // and define them itself instead of getting programmatically added within Game

  // interfaceElementSelector is required
  constructor(width, height, interfaceElementSelector) {
    this._container = document.querySelector(interfaceElementSelector);
    this._container.style.width = width;
    this._container.style.height = height;

    this._elements = {};
  }

  // expects dom element
  addElement(name, element) {
    this._container.appendChild(element);
    this._elements[name] = element;
  }

  getElement(name) {
    return this._elements[name];
  }

  rewriteElement(name, content) {
    this.getElement(name).innerHTML = content;
  }

}
