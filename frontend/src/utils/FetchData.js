export const fetchData = async (url, method, data = null) => {
  let response_data;
  if (!data) {
    response_data = await fetch(url, { method: method });
  } else {
    response_data = await fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
  }

  const response = await response_data.json();
  return response;
};
