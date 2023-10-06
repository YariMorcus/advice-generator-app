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
    // 1) Fetch advice data
    const data = await getJSON(API_URL);

    // 2) Save advice data
    state.currentAdvice.id = data.slip.id;
    state.currentAdvice.advice = data.slip.advice;

    // 3) Update statistics
    updateStatistics();

    console.log(state);
  } catch (err) {
    console.error(err);
  }
};

const updateStatistics = function () {
  state.advicesGenerated++;
};
