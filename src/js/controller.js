import { ENABLE_BUTTON_DELAY } from './config.js';
import * as model from './model.js';
import adviceView from './views/adviceView.js';

const adviceController = async function () {
  try {
    /**
     * 1) Fetch and store advice from API
     *
     * IF user presses button within 2 seconds,
     * render loading spinner, otherwise render advice immediately
     */

    if (await model.fetchAdvice()) {
      adviceView.renderSpinner();

      // 1) Disable button
      adviceView.disableButton();

      // 2) Add disabled class to button
      adviceView.toggleDisableButtonClass();

      // If 2 seconds are passed, enable button and request new advice
      setTimeout(() => {
        adviceView.enableButton();

        adviceView.toggleDisableButtonClass();

        adviceController();
      }, ENABLE_BUTTON_DELAY);

      return;
    }

    // 2) Render current advice number
    adviceView.render(model.state);
  } catch (err) {
    adviceView.renderError();
  }
};

const init = function () {
  adviceView.addHandlerGenerate(adviceController);
};

init();
