import * as model from './model.js';
import adviceView from './views/adviceView.js';

const adviceController = async function () {
  // 1) Fetch and store advice from API
  await model.fetchAdvice();

  // 2) Render current advice number
  adviceView.renderAdviceNumber();

  // 3) Render current advice number
};

const init = function () {
  adviceView.addHandlerGenerate(adviceController);
};

init();
