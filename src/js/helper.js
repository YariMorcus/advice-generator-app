import { CACHING_MODE } from './config.js';

/**
 * Retrieve data based on a given URL
 * @param {string} url API URL
 * @returns {Object} Advice data
 */
export const getJSON = async function (url) {
  try {
    const response = await fetch(url, { cache: CACHING_MODE });

    if (!response.ok) throw new Error('Could not fetch data');

    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
};
