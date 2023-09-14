

//start point on map
const mymap = L.map("aMap").setView([-40.895522, -58.47602], 12);
const tiles = L.tileLayer(
  "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",{
    zoom: 12,
    attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(mymap);

    //red Icon
var redIcon = L.icon({
  iconUrl: "icons/magenta.png",
  iconSize: [25.9, 45.8]});

//blue Icon
var blueIcon = L.icon({
  iconUrl: "icons/teal.png",
  iconSize: [25.9, 45.8]});

//Yellow Icon
var yellowIcon = L.icon({
  iconUrl: "icons/mustard.png",
  iconSize: [25.9, 45.8]});



//intro popup
// var popup = L.popup().setLatLng([-34.577, -58.42227]).setContent('<img src="assets/handContour.png" width=400 height=400/> <h1>INTRODUCTION!!!!</h1> <br> <h4> Welcome to this map exploring Taekwondo in <br>Buenos Aires. The markers are the locations <br> where I did my fieldwork. Click on them and <br>you will see a new pop-up. Some of them are <br>linked to short films and others just have a <br>description and image. On the top right you <br> can choose different settings. For example,<br> you can just choose a colour or you can look <br>at suggested routes...<br><br>Feel free to roam a about and enjoy the <br>journey into my PhD. <br> Best wishes, <br> Kika <br>  </h4>  <h5>*This map has been made by Vendela Håkonsen and <br>Henrike Neuhaus <br> **find the hidden one, it is a long story</h5>').openOn(mymap);
var popup = L.popup({
  closeButton: false,
  autoClose: false,
  className: 'intro-custom-popup'
})
.setLatLng([-34.615, -58.51047])
.setContent(' <h1>INTRODUCTION!!!!</h1>  <h4> Welcome to this map exploring Taekwondo in Buenos Aires. <br>The markers are the locations where I did my fieldwork. <br>Click on them and you will see a new pop-up. Some of them <br> are linked to short films and others just have a description<br> and image. On the top right you can choose different settings. <br>For example, you can just choose a colour or you can look at <br>suggested routes...<br><br>Feel free to roam a about and enjoy the journey into my PhD. <br>Best wishes, <br> Kika <br>  </h4>  <h5>*This map has been made by Vendela Håkonsen and Henrike Neuhaus <br> **find the hidden one, it is a long story</h5> <br><br><br><br><br><br><br><br>')
.openOn(mymap);


//--------------------Red icons-----------------------------------
const asociacionChoi = L.marker([-34.595508, -58.426375], { icon: redIcon }).addTo(mymap);
const asociacionChoiPopup = L.popup({closeButton: false, autoClose: false, className: 'AC-custom-popup'}).setContent('<h2> Asociacion Choi</h2>  <h5> Here is the central hub of the "Asociación de Alumnos de Nam Sung Choi" an association founded by the long-term practitioners with Sabon Nim Choi, Nam Sung who was one of the three pioneers of Taekwondo in Argentina. </h5> <a href="https://vimeo.com/346124939"> <h3> Sabon = Master </h3> </a><img src="assets/sabon_master.png" width=400 height=253 /></a>');
asociacionChoi.bindPopup(asociacionChoiPopup);

const peruBeach = L.marker([-34.472324, -58.492197], { icon: redIcon }).addTo(mymap);
      peruBeach.bindPopup("<b>Peru Beach</b><br>I am a popup.");

const blackHeart = L.marker([-34.699252, -58.608133], {icon: redIcon }).addTo(mymap);
const blackHeartPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Black Heart</h2> <a href = "https://vimeo.com/297399379"> <h3> La Matanza Black Heart</h3> <img src = "assets/Black_heart.png" width = 400 height=253 </a>');
blackHeart.bindPopup(blackHeartPopup);

// const platense = L.marker([-34.541026, -58.482004], { icon: redIcon }).addTo(mymap);
//       platense.bindPopup('<h2>Training in Platense</h2> <p> Here has to be added some text for later </p> <img src = "assets/Platense_image.png" width=400 height=250 />');//.openPopup();
const platense = L.marker([-34.541026, -58.482004], {icon: redIcon }).addTo(mymap);
const platensePopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Training in Platense</h2> <p> Here has to be added some text for later </p> <img src = "assets/Platense_image.png" width=400 height=250 />');
platense.bindPopup(platensePopup);


// const lincoln = L.marker([-34.575294, -58.530092], { icon: redIcon }).addTo(mymap);
//       lincoln.bindPopup('<h2>Training in San Martín</h2> <p> Here has to be added some text for later </p> <img src = "assets/Lincoln_image.png" width=400 height=280 />');
const lincoln = L.marker([-34.575294, -58.530092], {icon: redIcon }).addTo(mymap);
const lincolnPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Training in San Martín</h2> <p> Here has to be added some text for later </p> <img src = "assets/Lincoln_image.png" width=400 height=280 />');
lincoln.bindPopup(lincolnPopup);

// const gymGuido = L.marker([-34.58936, -58.39052], { icon: redIcon}).addTo(mymap);
//       gymGuido.bindPopup('<h2> Recoleta </h2> <p> Here has to be added some text for later </p> <img src = "assets/Gym_Guido01.png" width=400 height=280 /> </p> <img src = "assets/Gym_Guido02.png" width=400 height=280 />');
const gymGuido = L.marker([-34.58936, -58.39052], {icon: redIcon }).addTo(mymap);
const gymGuidoPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2> Recoleta </h2> <p> Here has to be added some text for later </p> <img src = "assets/Gym_Guido01.png" width=400 height=280 /> </p> <img src = "assets/Gym_Guido02.png" width=400 height=280 />');
gymGuido.bindPopup(gymGuidoPopup);


// const triglav = L.marker([-34.621898, -58.529336], { icon: redIcon }).addTo(mymap).bindPopup('<h2>Triglav</h2> <a href = "https://youtu.be/Xq9K8g71-N8"> <h3> Chapter 4 Joint Training </h3> <img src = "assets/ch_4_joint_training.png" width=400 height=281 /> </a>');
const triglav = L.marker([-34.621898, -58.529336], {icon: redIcon }).addTo(mymap);
const triglavPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Triglav</h2> <a href = "https://youtu.be/Xq9K8g71-N8"> <h3> Chapter 4 Joint Training </h3> <img src = "assets/ch_4_joint_training.png" width=400 height=281 /> </a>');
triglav.bindPopup(triglavPopup);


// const campoMunicipal = L.marker([-34.498664, -58.522979], {icon: redIcon}).addTo(mymap);
//       campoMunicipal.bindPopup('<h2> Lara Training </h2> <p> Here has to be added some text for later </p> <a href = "https://youtu.be/GC3F5JBdskY"> <h3> Lara Instruction </h3>  <img src = "assets/campo_Municipal_image.png" width=400 height=250 />');
const campoMunicipal = L.marker([-34.498664, -58.522979], {icon: redIcon }).addTo(mymap);
const campoMunicipalPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2> Lara Training </h2> <p> Here has to be added some text for later </p> <a href = "https://youtu.be/GC3F5JBdskY"> <h3> Lara Instruction </h3>  <img src = "assets/campo_Municipal_image.png" width=400 height=250 />');
campoMunicipal.bindPopup(campoMunicipalPopup);


// const parroquia = L.marker([-34.650071, -58.433637], {icon: redIcon}).addTo(mymap);
//       parroquia.bindPopup('<h2> Madre del Pueblo, Villa 11 14 Bajo Flores </h2> <p> Here has to be added some text for later </p> <a href = "https://vimeo.com/321468806?share=copy"> <h3> Inside,Outside </h3>  <img src = "assets/Parroquia01.png" width=400 height=250 />');
const parroquia = L.marker([-34.650071, -58.433637], {icon: redIcon }).addTo(mymap);
const parroquiaPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2> Madre del Pueblo, Villa 11 14 Bajo Flores </h2> <p> Here has to be added some text for later </p> <a href = "https://vimeo.com/321468806?share=copy"> <h3> Inside,Outside </h3>  <img src = "assets/Parroquia01.png" width=400 height=250 />');
parroquia.bindPopup(parroquiaPopup);


//--------------------blue icons-----------------------------------
//const costaSalguero = L.marker([-34.569107, -58.403364], {icon: blueIcon}).addTo(mymap).bindPopup('<h2>Costa Salguero</h2> <a href = "https://vimeo.com/320754008"><h3>Lara Gourmet</h3> <img src = "assets/Lara_Gourmet.png" width = 400 height=260 </a> <a href = "https://youtu.be/X6-HZ3ol340"> <h3> Sunday Games</h3> <img src = "assets/ch_4_SundayGames.png" width=400 height=205/> </a>');
const costaSalguero = L.marker([-34.569107, -58.403364], {icon: blueIcon }).addTo(mymap);
const costaSalgueroPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Costa Salguero</h2> <a href = "https://vimeo.com/320754008"><h3>Lara Gourmet</h3> <img src = "assets/Lara_Gourmet.png" width = 400 height=260 </a> <a href = "https://youtu.be/X6-HZ3ol340"> <h3> Sunday Games</h3> <img src = "assets/ch_4_SundayGames.png" width=400 height=205/> </a>');
costaSalguero.bindPopup(costaSalgueroPopup);

const exKDT = L.marker([-34.570145, -58.397478], { icon: blueIcon }).addTo(mymap);
      exKDT.bindPopup("<b>Ex KDT</b><br>I am a popup.");

// const cenard = L.marker([-34.54273, -58.454333], {icon: blueIcon}).addTo(mymap);
//       cenard.bindPopup('<h2> CENARD </h2> <p> Here has to be added some text for later </p> <img src = "assets/CENARD.png" width=400 height=280 /> </p> <img src = "assets/CENARD_01.png" width=400 height=280 />');
const cenard = L.marker([-34.569107, -58.403364], {icon: blueIcon }).addTo(mymap);
const cenardPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2> CENARD </h2> <p> Here has to be added some text for later </p> <img src = "assets/CENARD.png" width=400 height=260 /> </p> <img src = "assets/CENARD_01.png" width=400 height=260 />');
cenard.bindPopup(cenardPopup);

// const juventudCastelar = L.marker([-34.664928, -58.656449], {icon: blueIcon}).addTo(mymap);
//       juventudCastelar.bindPopup('<h2> Sunday Competition </h2> <p> Here has to be added some text for later </p> <img src = "assets/juventudCastelar.png" width=400 height=280 />');
const juventudCastelar = L.marker([-34.664928, -58.656449], {icon: blueIcon }).addTo(mymap);
const juventudCastelarPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2> Sunday Competition </h2> <p> Here has to be added some text for later </p> <img src = "assets/juventudCastelar.png" width=400 height=280 />');
juventudCastelar.bindPopup(juventudCastelarPopup);
      
// const pedroEchague = L.marker([-34.641747, -58.468589], {icon: blueIcon}).addTo(mymap).bindPopup('<h2>Pedro Echague</h2><a href="https://youtu.be/inrmC-Ci4gI"><h3> Chapter 3 Marcos, Hilda</h3> <img src = "assets/Marcos_Hilda.png" width=400 height=225 /></a>');
const pedroEchague = L.marker([-34.641747, -58.468589], {icon: blueIcon }).addTo(mymap);
const pedroEchaguePopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Pedro Echague</h2><a href="https://youtu.be/inrmC-Ci4gI"><h3> Chapter 3 Marcos, Hilda</h3> <img src = "assets/Marcos_Hilda.png" width=400 height=225 /></a>');
pedroEchague.bindPopup(pedroEchaguePopup);

//--------------------Yellow icons-----------------------------------
// const seoul = L.marker([35.907757, 127.766922], { icon: yellowIcon }).addTo( mymap );
// seoul.bindPopup('<h2> Early Years of a Taekwondo Master </h2> <p> Here has to be added some text for later </p> <img src = "assets/Choi in park.png" width=400 height=280 />' );
const seoul = L.marker([35.907757, 127.766922], {icon: yellowIcon }).addTo(mymap);
const seoulPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2> Early Years of a Taekwondo Master </h2> <p> Here has to be added some text for later </p> <img src = "assets/Choi in park.png" width=400 height=280 />');
seoul.bindPopup(seoulPopup);


const medalWorkshop = L.marker([-34.568358, -58.594658], {icon: yellowIcon}).addTo(mymap);
      medalWorkshop.bindPopup('<h2>Medal Workshop</h2><a href="https://vimeo.com/320748559?share=copy"><h3> Medal Workshop </h3> <p> </p> <img src = "assets/workshop_image.png" width=300 height=225 /></a>');

// const fsion = L.marker([-34.578199, -58.509716], { icon: yellowIcon }, mymap.getMaxZoom()).addTo(mymap);
//       fsion.bindPopup('<h2>Fsion</h2> <p> Here has to be added some text for later </p> <img src = "assets/f-Sion_product_display.png" width=400 height=280 />');
const fsion = L.marker([-34.578199, -58.509716], {icon: yellowIcon }).addTo(mymap);
const fsionPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Fsion</h2> <p> Here has to be added some text for later </p> <img src = "assets/f-Sion_product_display.png" width=400 height=280 />');
fsion.bindPopup(fsionPopup);

// const notary = L.marker([-34.606004, -58.386153], { icon: yellowIcon }).addTo(mymap);
//       notary.bindPopup('<h2>Notary</h2> <p> Here has to be added some text for later </p> <img src = "assets/Notary_image.png" width=400 height=280 />');
const notary = L.marker([-34.606004, -58.386153], {icon: yellowIcon }).addTo(mymap);
const notaryPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Notary</h2> <p> Here has to be added some text for later </p> <img src = "assets/Notary_image.png" width=400 height=280 />');
notary.bindPopup(notaryPopup)
//--------------------Routes ---------------------------------------
//This line is static
// const route = L.polyline([[-34.568358, -58.594658],[-34.606004, -58.386153]], {color: 'blue', weight: 3}).addTo(mymap);
  
//--------coordinates----------
const aChCoord = [[-34.595508, -58.426375]];
const peruBCoord = [[-34.472324, -58.492197]];
const blackhCoord = [[-34.699252, -58.608133]];
const platenseCoord = [[-34.541026, -58.482004]];
const lincCoord = [[-34.575294, -58.530092]];
const gymCoord = [[-34.58936, -58.39052]];
const triglavCoord = [[-34.621898, -58.529336]];
const campoCoord = [[-34.498664, -58.522979]];
const parroquiaCoord = [[-34.650071, -58.433637]];
  //-----
const costaCoord = [[-34.569107, -58.403364]];
const exKDTCoord = [[-34.570145, -58.397478]];
const cenardCoord = [[-34.54273, -58.454333]];
const juventurdCoord = [[-34.664928, -58.656449]];
const pedroCoord = [[-34.641747, -58.468589]];
  //-----
const medalCoord = [[-34.568358, -58.594658]];
const fsionCoord = [[-34.578199, -58.509716]];
const notaryCoord = [[-34.606004, -58.386153]];

//------------// Create route polylines::: work-----------------
const work1 = L.polyline(medalCoord, { color: "#FFA902", weight: 3, className: "c-polyline" }).addTo(mymap);
const work2 = L.polyline(triglavCoord, { color: '#FFA902', weight: 3 }).addTo(mymap);
const work3 = L.polyline(triglavCoord, {color: "#FFA902", weight: 3}).addTo(mymap);
const work4 = L.polyline(costaCoord, {color: "#FFA902", weight: 3}).addTo(mymap);
const work5 = L.polyline(medalCoord, {color: "#FFA902", weight: 3}).addTo(mymap);
const work6 = L.polyline(costaCoord, {color: "#FFA902", weight: 3}).addTo(mymap);
const work7 = L.polyline(medalCoord, {color: "#FFA902", weight: 3}).addTo(mymap);

// Training
const training1 = L.polyline(aChCoord, {color: "#05A9A9", weight: 3}).addTo(mymap);
const training2 = L.polyline(aChCoord, {color: "#05A9A9", weight: 3}).addTo(mymap);
const training3 = L.polyline(aChCoord, {color: "#05A9A9", weight: 3}).addTo(mymap);
const training4 = L.polyline(aChCoord, {color: "#05A9A9", weight: 3}).addTo(mymap);
const training5 = L.polyline(aChCoord, {color: "#05A9A9", weight: 3}).addTo(mymap);
//competition
const comp1 = L.polyline(costaCoord, {color: "#B8216D", weight: 3, className: "c-polyline"}).addTo(mymap);
const comp2 = L.polyline(costaCoord, {color: "#B8216D", weight: 3}).addTo(mymap);
const comp3 = L.polyline(costaCoord, {color: "#B8216D", weight: 3}).addTo(mymap);
const comp4 = L.polyline(cenardCoord, {color: "#B8216D", weight: 3}).addTo(mymap);


function animateRoute(routePolyline, start, end) {
  routePolyline.setLatLngs(start); // Reset the polyline

  let step = 0;
  const numSteps = 100; // Adjust the number of steps as needed
  const duration = 3000; // Duration of animation in milliseconds

  const interval = setInterval(() => {
    if (step >= numSteps) {
      clearInterval(interval);
      return;
    }
    const interpolatedLat = start[0][0] + (end[0][0] - start[0][0]) * (step / numSteps);
    const interpolatedLng = start[0][1] + (end[0][1] - start[0][1]) * (step / numSteps);
    const interpolatedPoint = L.latLng(interpolatedLat, interpolatedLng);
    routePolyline.addLatLng(interpolatedPoint);

    step++;
  }, duration / numSteps);
}         
      
//-----------Layers----------------------------
var workSparingLayers = L.layerGroup([work1, work2, work3, work4, work5, work6, work7]);

var trainingLayers = L.layerGroup([training1, training2, training3, training4, training5 ]);

var competitionPoomsaeLayers = L.layerGroup([comp1, comp2, comp3, comp4]);

var allLayers = L.layerGroup([asociacionChoi,peruBeach,platense,lincoln,gymGuido,triglav,campoMunicipal,parroquia,costaSalguero,exKDT,cenard,blackHeart,juventudCastelar,pedroEchague,medalWorkshop,fsion, notary]);


// var workSparingLayers = L.layerGroup([medalWorkshop, triglav, juventudCastelar, parroquia, costaSalguero,platense,campoMunicipal, 
//     work1, work2, work3, work4, work5, work6, work7]);

// var trainingLayers = L.layerGroup([asociacionChoi, blackHeart,notary,gymGuido,peruBeach, platense,
//     training1, training2, training3, training4, training5 ]);

// var competitionPoomsaeLayers = L.layerGroup([costaSalguero, exKDT,pedroEchague,cenard,campoMunicipal,
//     comp1, comp2, comp3, comp4]);

// var allLayers = L.layerGroup([asociacionChoi,peruBeach,platense,lincoln,gymGuido,triglav,campoMunicipal,parroquia,costaSalguero,exKDT,cenard,blackHeart,juventudCastelar,pedroEchague,medalWorkshop,fsion, notary]);

//------------markers--------------------------
var workSparingMarkers = L.layerGroup([medalWorkshop, fsion, notary]);
var trainingMarkers = L.layerGroup([asociacionChoi, blackHeart,gymGuido,peruBeach, platense, lincoln, triglav, campoMunicipal, parroquia]);
var competitionPoomsaeMarkers = L.layerGroup([costaSalguero, exKDT,pedroEchague,cenard, juventudCastelar]);
var intro = L.layerGroup([popup]); 
//here is the function to draw the routes... 
mymap.on('overlayadd', function (event) {
const selectedLayer = event.layer;

if (selectedLayer === workSparingLayers) {
  animateRoute(work1, medalCoord, triglavCoord);
  animateRoute(work2, triglavCoord, juventurdCoord);
  animateRoute(work3, triglavCoord, parroquiaCoord);
  animateRoute(work4, triglavCoord, costaCoord);
  animateRoute(work5, medalCoord, platenseCoord);
  animateRoute(work6, costaCoord, campoCoord);
  animateRoute(work7, medalCoord, platenseCoord);

} 
else if (selectedLayer === trainingLayers) {
  animateRoute(training1, aChCoord, blackhCoord);
  animateRoute(training2, aChCoord, notaryCoord);
  animateRoute(training3, aChCoord, gymCoord);
  animateRoute(training4, aChCoord, platenseCoord);
  animateRoute(training5, aChCoord, peruBCoord);

}
else if(selectedLayer === competitionPoomsaeLayers){
  animateRoute(comp1, costaCoord, exKDTCoord);
  animateRoute(comp2, costaCoord, pedroCoord);
  animateRoute(comp3, costaCoord, cenardCoord);
  animateRoute(comp4, cenardCoord, campoCoord);
}
});

// Listen for overlayremove event
mymap.on('overlayremove', function (event) {
  const removedLayer = event.layer;

  if (removedLayer === workSparingLayers || removedLayer === trainingLayers) {
    removedLayer.getLayers().forEach(polyline => polyline.setLatLngs([])); // Clear the polyline
  }
});


const introType ={
  'Intro': intro
};

const introPopup = L.control.layers(null, introType,{
  collapsed: false,
}).addTo(mymap);

const overlay = {
  'Work & Sparring Route': workSparingLayers,
  'Training Route':trainingLayers,
  'Competition & Poomsae Route': competitionPoomsaeLayers,
};

const markers = {
  'All': allLayers,

  'Work Markers': workSparingMarkers,
  'Training Markers': trainingMarkers,
  'Competition Markers': competitionPoomsaeMarkers,
};

// like this the lines 'draw' the other way round it would not draw the lines... 
const layerControl = L.control.layers(markers, overlay, {
  collapsed: false, // Set to false to keep the control open by default
}).addTo(mymap);




