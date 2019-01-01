// Get All

function getAll(field) {
  let data = localStorage.getItem(field);
  if (data) {
    return data;
  }
  return false;
}

function getAsArray(field) {
  let data = JSON.parse(localStorage.getItem(field));
  if (data) {
    return data;
  }
  return false;
}

function update(data) {
  data = JSON.stringify(data);
  localStorage.setItem("rydb-data", data);
}
