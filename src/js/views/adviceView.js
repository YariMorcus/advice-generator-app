class adviceView {
  #buttonEl = document.querySelector('.js-advice__dice-btn');

  addHandlerGenerate(handler) {
    this.#buttonEl.addEventListener('click', handler);
  }
}

export default new adviceView();
