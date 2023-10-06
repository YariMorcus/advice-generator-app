export default class View {
  _data = null;

  render(data) {
    // 1) Store data for further usage
    this._data = data;

    // 2) Generate markup
    const markup = this._generateMarkup();

    // 3) Clear parent element
    this._clear();

    // 4) Show advice in UI
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }
}
