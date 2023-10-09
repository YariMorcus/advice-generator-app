import * as model from './model.js';
import adviceView from './views/adviceView.js';

const adviceController = async function () {
  // 1) Fetch and store advice from API
  await model.fetchAdvice();

  // 2) Render current advice number
  adviceView.render(model.state);

  // 3) Disable button for 2 seconds
  adviceView.disableButton();

  // 4) Add disabled class to button
  adviceView.toggleDisableButtonClass();
};

const init = function () {
  adviceView.addHandlerGenerate(adviceController);
};

init();
