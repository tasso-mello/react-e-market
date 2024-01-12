const baseUrl = "https://localhost:7180/";

export const get = async (url) => {
  const response = await fetch(baseUrl + url);
  return response.json();
};

export const post = async (url, data) => {
  const response = await fetch(baseUrl + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const put = async (url, data) => {
    const response = await fetch(baseUrl + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
};

export const remove = async (url, data) => {
    const response = await fetch(baseUrl + url, {
      method: "DELETE",
    });
    return response.json();
};