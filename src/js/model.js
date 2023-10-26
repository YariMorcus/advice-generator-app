import { API_URL } from './config.js';
import { getJSON } from './helper.js';

export const state = {
  currentAdvice: {
    id: null,
    advice: null,
  },
  advicesGenerated: 0, // Statistic purposes
  pastAdvices: [],
};

/**
 * Fetch advice based on given API_URL (configuration value)
 * @returns {boolean} true if current advice is same as previous advice
 */
export const fetchAdvice = async function () {
  try {
    // 1) Fetch advice data
    const data = await getJSON(API_URL);

    // 2) Save advice data
    state.currentAdvice.id = data.slip.id;
    state.currentAdvice.advice = data.slip.advice;

    // 3) Store past advices
    storePastAdvices(data);

    // 4) Update statistics
    updateStatistics();
  } catch (err) {
    throw err;
  }
};

/**
 * Increase generated advices with 1
 * @returns {undefined}
 */
const updateStatistics = function () {
  state.advicesGenerated++;
};

/**
 * Remember current advice when new advice is being generated.
 *
 * This prevents losing past generated advices.
 * @returns {undefined}
 */
const storePastAdvices = function (currentAdvice) {
  state.pastAdvices.push(currentAdvice);
};
