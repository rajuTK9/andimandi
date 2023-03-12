const getData = async (id) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/get-data/${id}`
    );
    const data = await res.json();
    if (data.status === 422 || data.status === 500) {
      alert(data.error);
      return data.error;
    }
    return data;
  } catch (err) {
    return "An erros occured: " + err;
  }
};
export default getData;
