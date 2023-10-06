export const getJSON = async function (url) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error('Could not fetch data');

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
