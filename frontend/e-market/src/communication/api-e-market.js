import config from '../config';

const { baseUrl } = config;

export const get = async (url) => {
  try {
    const response = await fetch(baseUrl + url);
    return response.json();
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    const response = await fetch(baseUrl + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
    throw error;
  }
};

export const put = async (url, data) => {
  try {
    const response = await fetch(baseUrl + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
    throw error;
  }
};

export const remove = async (url, data) => {
  try {
    const response = await fetch(baseUrl + url, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
    throw error;
  }
};