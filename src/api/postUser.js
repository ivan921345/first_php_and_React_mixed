const postUsers = async (url, { username, surname }) => {
  try {
    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username, surname }),
    }).then((resp) => resp.json());
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export default postUsers;
