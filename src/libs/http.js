const domain = "music-stream.onrender.com/";

export const http = (params) => {
  return fetch("https://" + (domain + params).replace(/[/]+/gi, "/"), {
    credentials: "include",
    method: "GET",
  });
};

export const httpPost = (params, body) => {
  return fetch("http://" + (domain + params).replace(/[/]+/gi, "/"), {
    credentials: "include",
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
