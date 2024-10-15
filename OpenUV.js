var myHeaders = new Headers();
myHeaders.append("x-access-token", "openuv-jne90r9rm2ax74qi-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.openuv.io/api/v1/uv?lat=30.29&lng=-97.74&alt=100&dt=", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));