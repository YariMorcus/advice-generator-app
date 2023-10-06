import { API_URL } from './config.js';
import { getJSON } from './helper.js';

const state = {
  currentAdvice: {
    id: null,
    advice: null,
  },
  advicesGenerated: 0, // Statistic purposes
};

export const fetchAdvice = async function () {
  try {
    // 1) Fetch advice
    const data = await getJSON(API_URL);

    state.currentAdvice.id = data.slip.id;
    state.currentAdvice.advice = data.slip.advice;

    console.log(state.currentAdvice);
    // 2) Store advice in state
  } catch (err) {
    console.error(err);
  }
};
