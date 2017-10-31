import request from "../../node_modules/superagent/superagent";

export function fetchClothingItem(id) {
  return fetch("https://tunic-wardrobe-api.herokuapp.com/clothing/item/" + id, {
    method: "GET",
    mode: "CORS"
  })
    .then(res => res.json())
    .catch(function(err, res) {
      console.log("error", res);
    });
}

export function updateClothingItem(formInfo, data) {
  console.log("updating item", formInfo.id);
  console.log("updating item", formInfo.name);
  request
    .post(
      "https://tunic-wardrobe-api.herokuapp.com/clothing/update/" + formInfo.id
    )
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send({
      name: formInfo.name,
      sleeveLength: formInfo.sleeveLength,
      fabricWeight: formInfo.fabricWeight,
      mood: formInfo.mood,
      color: formInfo.color
    })
    .then(res => {
      return res;
    })
    .catch(function(err, res) {
      console.log("error", res);
    });
}

export function deleteClothingItem(id) {
  request
    .del("https://tunic-wardrobe-api.herokuapp.com/clothing/delete/" + id)
    .then(res => {
      return res;
    })
    .catch(err => err);
}

export function fetchTodaysLook(temp) {
  return fetch(
    "https://tunic-wardrobe-api.herokuapp.com/clothing/todayslook/" +
      parseInt(temp),
    {
      method: "GET",
      mode: "CORS"
    }
  )
    .then(res => res.json())
    .catch(function(err, res) {
      console.log("error", res);
    });
}
