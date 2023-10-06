import * as model from './model.js';
import adviceGeneratorView from './views/adviceGeneratorView.js';

const adviceController = async function () {
  // 1) Fetch advice from API
  await model.fetchAdvice();
  // 3) Render advice in UI
};

const init = function () {
  adviceGeneratorView.addHandlerGenerate(adviceController);
};

init();
