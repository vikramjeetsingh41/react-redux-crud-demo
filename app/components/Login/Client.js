function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log("response");
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

/* eslint-disable no-undef */
function login() {
  const loginUrl = "abc.com";
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "vikramjeetsingh41@gmail.com",
      password: "1111",
      ui: {
        "applicationId": "react"
      }
    })
  })
    .then(checkStatus)
    .then(parseJSON)
    .then("");
}

const Client = { login };
export default Client;
