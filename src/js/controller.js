import { ENABLE_BUTTON_DELAY } from './config.js';
import * as model from './model.js';
import adviceView from './views/adviceView.js';

const adviceController = async function () {
  try {
    // 1) Render loading spinner
    adviceView.renderSpinner();

    // 2) Fetch data from API
    await model.fetchAdvice();

    // 3) Render current advice number
    adviceView.render(model.state);
  } catch (err) {
    adviceView.renderError();
  }
};

const init = function () {
  adviceView.addHandlerGenerate(adviceController);
};

init();
