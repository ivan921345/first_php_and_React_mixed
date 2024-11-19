export const fetchUsers = async (url) => {
  try {
    const resp = await fetch(url);
    return resp.json();
  } catch (error) {
    console.log(error);
  }
};
