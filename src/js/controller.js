import { ENABLE_BUTTON_DELAY } from './config.js';
import * as model from './model.js';
import adviceView from './views/adviceView.js';

const adviceController = async function () {
  try {
    // 1) Fetch and store advice from API
    await model.fetchAdvice();

    // 2) Render current advice number
    adviceView.render(model.state);

    // 3) Disable button for 2 seconds
    adviceView.disableButton();

    // 4) Add disabled class to button
    adviceView.toggleDisableButtonClass();

    // 5) Enable button again after 2 seconds
    setTimeout(() => {
      adviceView.enableButton();

      // Remove disabled class of button
      adviceView.toggleDisableButtonClass();
    }, ENABLE_BUTTON_DELAY);
  } catch (err) {
    adviceView.renderError();
  }
};

const init = function () {
  adviceView.addHandlerGenerate(adviceController);
};

init();
