import View from './View.js';
class adviceView extends View {
  advice = document.querySelector('.advice__quote');
  _parentEl = document.querySelector('.advice');

  addHandlerGenerate(handler) {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target.closest('.js-advice__dice-btn');

      if (!btn) return;

      handler();
    });
  }

  enableButton() {
    this._parentEl.querySelector('.js-advice__dice-btn').disabled = false;
  }

  disableButton() {
    this._parentEl.querySelector('.js-advice__dice-btn').disabled = true;
  }

  toggleDisableButtonClass() {
    this._parentEl
      .querySelector('.js-advice__dice-btn')
      .classList.toggle('advice__dice-btn--disabled');
  }

  _generateMarkup() {
    return `
      <h1 class="advice__title">Advice #${this._data.currentAdvice.id}</h1>
      <q class="advice__quote">${this._data.currentAdvice.advice}</q>
      <hr class="advice__divider">
      <button class="advice__dice-btn js-advice__dice-btn" aria-label="Generate advice"></button>
    `;
  }
}

export default new adviceView();
