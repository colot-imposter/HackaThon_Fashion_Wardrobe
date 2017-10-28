export function fetchClothingitem(id) {
  return fetch("https://tunic-wardrobe-api.herokuapp.com/clothing/" + id, {
    method: "GET",
    mode: "CORS"
  })
    .then(res => res.json())
    .catch(function(err, res) {
      console.log("error", res);
    });
}

export function updateClothingItem(id, data) {
  console.log("updating item");
  request
    .post("https://tunic-wardrobe-api.herokuapp.com/clothing/add")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send({
      name: this.state.name,
      sleeveLength: this.state.sleeveLength,
      fabricWeight: this.state.fabricWeight,
      mood: this.state.mood,
      color: this.state.color
    })
    .then(res => {
      return res;
    })
    .catch(function(err, res) {
      console.log("error", res);
    });
}
