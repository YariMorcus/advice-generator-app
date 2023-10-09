export default class View {
  _data = null;
  _errorMessage = 'Could not retrieve an advice';

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

  renderError(errorMessage = this._errorMessage) {
    const markup = `
      <h1 class="advice__title advice__title--error">${errorMessage}</h1>
      <p class="advice__quote">Try again later!</p>
      <hr class="advice__divider">
      <button class="advice__dice-btn js-advice__dice-btn" aria-label="Generate advice"></button>
    `;

    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }
}
