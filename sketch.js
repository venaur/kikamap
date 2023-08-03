//start point on map
const mymap = L.map("aMap").setView([-40.895522, -58.47602], 12);
//define tiles
/* http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png
     default map: https://tile.openstreetmap.org/{z}/{x}/{y}.png */

const tiles = L.tileLayer(
  "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
  {
    zoom: 12,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
).addTo(mymap);

//Load Icons
//red Icon
var redIcon = L.icon({
  iconUrl: "icons/redIcon.png",
  iconSize: [30.9, 53.8],
});

//blue Icon
var blueIcon = L.icon({
  iconUrl: "icons/blueIcon.png",
  iconSize: [30.9, 53.8],
});

//Yellow Icon
var yellowIcon = L.icon({
  iconUrl: "icons/yellowIcon.png",
  iconSize: [30.9, 53.8],
});

//add all markers
//red icons

//    var marker = L.marker([46.423611, -86.624417], {
//    title: "This is a test",
//}).addTo(map)
//  .bindPopup('<a href="Web Page Adress Here"><h1> Test Title </h1></a><img src="Link to Image" width=100 height=100 />');

const asociacionChoi = L.marker([-34.595508, -58.426375], { icon: redIcon })
  .addTo(mymap)
  .bindPopup(
    '<h2> Asociacion Choi</h2> <a href ="https://vimeo.com/346124939"> <h3> Sabon = Master </h3> <img src = "assets/sabon_master.png" width=400 height=253 /></a>'
  );
// add to layer: Training, Yun Moo Kwan, Film

const peruBeach = L.marker([-34.472324, -58.492197], { icon: redIcon }).addTo(
  mymap
);
peruBeach.bindPopup("<b>Peru Beach</b><br>I am a popup.").openPopup();
// add to layer: Training, Workshops, Yun Moo Kwan
const blackHeart = L.marker([-34.699252, -58.608133], { icon: redIcon })
  .addTo(mymap)
  .bindPopup(
    '<h2>Black Heart</h2> <a href = "https://vimeo.com/297399379"> <h3> La Matanza Black Heart</h3> <img src = "assets/Black_heart.png" width = 400 height=253 </a>'
  );
// add to layer: Training, Yun Moo Kwan
const platense = L.marker([-34.541026, -58.482004], { icon: redIcon }).addTo(
  mymap
);
platense.bindPopup('<h2>Training in Platense</h2> <p> Here has to be added some text for later </p> <img src = "assets/Platense_image.png" width=400 height=250 />').openPopup();
// add to layers: Training, Competitions, Yun Moo Kwan, Film
const lincoln = L.marker([-34.575294, -58.530092], { icon: redIcon }).addTo(
  mymap
);
lincoln.bindPopup('<h2>Training in San Martín</h2> <p> Here has to be added some text for later </p> <img src = "assets/Lincoln_image.png" width=400 height=280 />').openPopup();
// add to layers: Training, Yun Moo Kwan
const gymGuido = L.marker([-34.58936, -58.39052], { icon: redIcon }).addTo(
  mymap
);
gymGuido.bindPopup("<b>Gym Guido</b><br>I am a popup.").openPopup();
// add to layers: Training, Yun Moo Kwan

const triglav = L.marker([-34.621898, -58.529336], { icon: redIcon })
  .addTo(mymap)
  .bindPopup(
    '<h2>Triglav</h2> <a href = "https://youtu.be/Xq9K8g71-N8"> <h3> Chapter 4 Joint Training </h3> <img src = "assets/ch_4_joint_training.png" width=400 height=281 /> </a>'
  );
//add to layer: training, Film

const campoMunicipal = L.marker([-34.498664, -58.522979], {
  icon: redIcon,
}).addTo(mymap);
campoMunicipal.bindPopup('<h2> Lara Training </h2> <p> Here has to be added some text for later </p> <a href = "https://youtu.be/GC3F5JBdskY"> <h3> Lara Instruction </h3>  <img src = "assets/campo_Municipal_image.png" width=400 height=250 />').openPopup();
// add to layer: training, Film

const parroquia = L.marker([-34.650071, -58.433637], {
  icon: redIcon,
}).addTo(mymap);
parroquia.bindPopup('<h2> Madre del Pueblo, Villa 11 14 Bajo Flores </h2> <p> Here has to be added some text for later </p> <a href = "https://vimeo.com/321468806?share=copy"> <h3> Inside,Outside </h3>  <img src = "MariaDelPueblo.png" width=400 height=250 />').openPopup();
// add to layers: training, Work, Film


//blue icons

const costaSalguero = L.marker([-34.569107, -58.403364], { icon: blueIcon })
  .addTo(mymap)
  .bindPopup(
    '<h2>Costa Salguero</h2> <a href = "https://vimeo.com/320754008"><h3>Lara Gourmet</h3> <img src = "assets/Lara_Gourmet.png" width = 400 height=260 </a> <a href = "https://youtu.be/X6-HZ3ol340"> <h3> Sunday Games</h3> <img src = "assets/ch_4_SundayGames.png" width=400 height=205/> </a>'
  );
// add to layer: competition, Film

const exKDT = L.marker([-34.570145, -58.397478], { icon: blueIcon }).addTo(
  mymap
);
exKDT.bindPopup("<b>Ex KDT</b><br>I am a popup.").openPopup();
// add to layer: competition
const cenard = L.marker([-34.54273, -58.454333], { icon: blueIcon }).addTo(
  mymap
);
cenard.bindPopup("<b>Cenard</b><br>I am a popup.").openPopup();
// add to layers: competition, Workshop, Training
const juventudCastelar = L.marker([-34.664928, -58.656449], {
  icon: blueIcon,
}).addTo(mymap);
juventudCastelar
  .bindPopup("<b>Juventud Castelar</b><br>I am a popup.")
  .openPopup();
const pedroEchague = L.marker([-34.641747, -58.468589], { icon: blueIcon })
  .addTo(mymap)
  .bindPopup(
    '<h2>Pedro Echague</h2><a href="https://youtu.be/inrmC-Ci4gI"><h3> Chapter 3 Marcos, Hilda</h3> <img src = "assets/Marcos_Hilda.png" width=400 height=225 /></a>'
  );
// add to layer: Competition, Film

//yellow Icons

const medalWorkshop = L.marker([-34.568358, -58.594658], {
  icon: yellowIcon,
}).addTo(mymap);
medalWorkshop.bindPopup('<h2>Medal Workshop</h2><a href="https://vimeo.com/320748559?share=copy"><h3> Medal Workshop </h3> <p> </p> <img src = "assets/workshop_image.png" width=300 height=225 /></a>').openPopup();
// add to layer: work, Film
const fsion = L.marker([-34.578199, -58.509716], { icon: yellowIcon }).addTo(
  mymap
);
fsion.bindPopup('<h2>Fsion</h2> <p> Here has to be added some text for later </p> <img src = "assets/f-Sion_product_display.png" width=400 height=280 />').openPopup();
// add to layer: work
const notary = L.marker([-34.606004, -58.386153], { icon: yellowIcon }).addTo(
  mymap
);
notary.bindPopup('<h2>Notary</h2> <p> Here has to be added some text for later </p> <img src = "assets/Notary_image.png" width=400 height=280 />').openPopup();
// add to layer: work, Yun Moo Kwan, Film


// orange Icon


// extension add an icon of a boat and a 'draw route appears' from Pyongyang - Seoul - Daegu - -Yokohama - Singapore (and along the Malaysian coast- Mauritius - Cape Town (from Maputo Mozambique along the SA coast) - Rio de Janeiro - Buenos Aires and in the pop up the story of the journey) 
// using an icon with a boat. 