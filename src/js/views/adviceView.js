import View from './View.js';
class adviceView extends View {
  _parentEl = document.querySelector('.advice');
  advice = document.querySelector('.advice__quote');

  addHandlerGenerate(handler) {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target.closest('.js-advice__dice-btn');

      if (!btn) return;

      handler();
    });
  }

  _generateMarkup() {
    return `
      <h1 class="advice__title">Advice #${this._data.advicesGenerated}</h1>
      <q class="advice__quote">${this._data.currentAdvice.advice}</q>
      <hr class="advice__divider">
      <button class="advice__dice-btn js-advice__dice-btn" aria-label="Generate advice"></button>
    `;
  }
}

export default new adviceView();
