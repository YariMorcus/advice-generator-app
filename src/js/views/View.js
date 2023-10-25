export default class View {
  _data = null;
  _errorMessage = 'Could not retrieve an advice';

  /**
   * Generate and render markup based on given data
   * @param {Object} data
   * @returns {undefined}
   */
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

  /**
   * Generate and render error message
   * @param {string} [errorMessage=string] The error message
   * @returns {undefined}
   */
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

  /**
   * Render loading spinner
   *
   * @returns {undefined}
   */
  renderSpinner() {
    const markup = `<div class="loading-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Clear parent element
   * @this {Object} Current view instance
   * @returns {undefined}
   */
  _clear() {
    this._parentEl.innerHTML = '';
  }
}
