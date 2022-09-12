const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "photo": "./assets/molecule-man.jpg",
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Owen Reece",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "photo": "./assets/one-punch-man.jpg",
      "name": "One Punch Man",
      "age": 25,
      "secretIdentity": "Saitama",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "photo": "./assets/human-torch.jpg",
      "name": "The Human Torch",
      "age": 20,
      "secretIdentity": "Jonathan Spencer",
      "powers": [
        "Heat Immunity",
        "Inferno"
      ]
    }
  ]
}
`;

const btnShow = document.querySelector(".btn.show");
const btnHide = document.querySelector(".btn.hide");
const squadMembers = document.getElementById("members");


function renderSaquad() {
  const data = JSON.parse(jsonData);
  squadMembers.innerHTML = "";
  data.members.forEach((member) => {
    squadMembers.innerHTML += `<div class="cards">
                              <img src="${member.photo}">
                              <h2 class="member-name">${member.name}</h2> 
                              <span>Age: ${member.age}</span>
                              <span>Secret Identity: ${member.secretIdentity}</span>
                              <ul class="powers-list">
                              <span>Powers:</span>
                              <li class="powers">${member.powers.join(' - ')}</li>
                              </ul>
                              </div>
                              `;

  })
};

btnShow.addEventListener("click", () => {
  renderSaquad();
})

btnHide.addEventListener("click", () => {
  squadMembers.innerHTML = "";
})
