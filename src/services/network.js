export const get = async path => {
  try {
    const response = await fetch(path);
    return await response.json();
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
