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
  iconUrl: "icons/tealIcon.png",
  iconSize: [25.9, 45.8]});

//Yellow Icon
var yellowIcon = L.icon({
  iconUrl: "icons/mustard.png",
  iconSize: [25.9, 45.8]});

//intro popup
// var popup = L.popup().setLatLng([-34.577, -58.42227]).setContent('<img src="assets/handContour.png" width=400 height=400/> <h1>INTRODUCTION!!!!</h1> <br> <h4> Welcome to this map exploring Taekwondo in <br>Buenos Aires. The markers are the locations <br> where I did my fieldwork. Click on them and <br>you will see a new pop-up. Some of them are linked to short films and others just have a description and image. On the top right you can choose different settings. For example, you can just choose a colour or you can look at suggested routes...<br><br>Feel free to roam a about and enjoy the <br>journey into my PhD. <br> Best wishes, <br> Kika <br>  </h4>  <h5>*This map has been made by Vendela Håkonsen and <br>Henrike Neuhaus <br> **find the hidden one, it is a long story</h5>').openOn(mymap);
var popup = L.popup({
  closeButton: false,
  autoClose: false,
  className: 'intro-custom-popup'
})
.setLatLng([-34.615, -58.51047])
.setContent(' <h1>INTRODUCTION!!!!</h1>  <h4> Welcome to this map exploring Taekwondo in Buenos Aires. The markers are the locations where I did my fieldwork. Click on them and you will see a new pop-up. Some of them  are linked to short films and others just have a description and image. On the top right you can choose different settings. For example, you can just choose a colour or you can look at suggested routes...<br><br>Feel free to roam a about and enjoy the journey into my PhD. <br>Best wishes, <br> Kika <br>  </h4>  <h5>*This map has been made by Vendela Håkonsen and Henrike Neuhaus <br> **find the hidden one, it is a long story</h5> <br><br><br><br>')
.openOn(mymap);

//--------------------Red icons-----------------------------------
const asociacionChoi = L.marker([-34.595508, -58.426375], {icon: redIcon}).addTo(mymap);
const asociacionChoiPopup = L.popup({closeButton: false, autoClose: false, className: 'AC-custom-popup'}).setContent('<h2> Asociacion Choi</h2>  <p> Here is the central hub of the "Asociación de Alumnos de Nam Sung Choi" an association founded by the long-term practitioners with Sabon Nim Choi, Nam Sung who was one of the three pioneers of Taekwondo in Argentina. </p> <h3> Sabon = Master </h3> </a><img src="assets/sabon_master.png" width=400 height=253 /><iframe src="https://player.vimeo.com/video/346124939?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Chapter 0.1 Sabon = Master"></iframe>');
asociacionChoi.bindPopup(asociacionChoiPopup);
asociacionChoi.bindTooltip('Asociacion Choi <br> Film: Sa Bum = Master'); // hover text

// const peruBeach = L.marker([-34.472324, -58.492197], { icon: redIcon }).addTo(mymap);
//       peruBeach.bindPopup('<h2>San Isidro</h2> <p> Here comenced the journey into Taekwondo </p> <img src = "assets/peruBeach02.png" width=400 height=250 /> <img src = "assets/peruBeach01.png" width=400 height=250 />');
const peruBeach = L.marker([-34.472324, -58.492197], {icon: redIcon}).addTo(mymap);
const peruBeachPopup = L.popup({closeButton: false, autoClose: false, className: 'AC-custom-popup'}).setContent('<h2>San Isidro</h2> <p> Here comenced the journey into Taekwondo </p> <img src = "assets/peruBeach02.png" width=400 height=250 /> <img src = "assets/peruBeach01.png" width=400 height=250 />');
peruBeach.bindPopup(peruBeachPopup);
peruBeach.bindTooltip('San Isidro'); // hover text


const blackHeart = L.marker([-34.699252, -58.608133], {icon: redIcon }).addTo(mymap);
const blackHeartPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Black Heart</h2> <h3> Film: Family Affairs</h3><p> I met the instructor through the saturday black belt trainings in -Asociacion Choi- and I was invited to observe the class. <br> After the 3 hour long interview the son and I sat down together watched the material and selected statements that we considered important to show in the film.</p> <img src = "assets/Black_heart.png" width = 400 height=253/><iframe src="https://player.vimeo.com/video/297399379?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Chapter 2.1 Family Affairs"></iframe>');
blackHeart.bindPopup(blackHeartPopup);
blackHeart.bindTooltip('La Matanza <br> Film: Family Affairs'); // hover text

// const platense = L.marker([-34.541026, -58.482004], { icon: redIcon }).addTo(mymap);
//       platense.bindPopup('<h2>Training in Platense</h2> <p> Here has to be added some text for later </p> <img src = "assets/Platense_image.png" width=400 height=250 />');//.openPopup();
const platense = L.marker([-34.541026, -58.482004], {icon: redIcon }).addTo(mymap);
const platensePopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Training in Platense</h2> <p> We were training here regularly after the group moved from -lincoln- here. <br><br> At this athletic club, they offer a broad range of sporting activities and my interlocutor organised an interclub tournament for children for which they made the medals. </p><h3> Linked locations and films: </h3><ul><li> Medal Workshop </li><li> Lincoln </li> <li> CENARD </li><li> G1 Competition </li><li> Triglav </li></ul> <img src = "assets/Platense_image.png" width=400 height=250 />');
platense.bindPopup(platensePopup);
platense.bindTooltip('Platense'); // hover text

// const lincoln = L.marker([-34.575294, -58.530092], { icon: redIcon }).addTo(mymap);
//       lincoln.bindPopup('<h2>Training in San Martín</h2> <p> Here has to be added some text for later </p> <img src = "assets/Lincoln_image.png" width=400 height=280 />');
const lincoln = L.marker([-34.575294, -58.530092], {icon: redIcon }).addTo(mymap);
const lincolnPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Training in San Martín</h2> <p> This building was part of a school and I commenced training with this group that soon moved to PLATENSE.</p><h3> Linked locations and films: </h3> <p><ul> <li> Medal Workshop </li><li> Platense </li><li> CENARD </li><li> G1 Competition </li> <li>Triglav </li><li> F-Sion </li></ul></p> <img src = "assets/Lincoln_image.png" width=400 height=280 />');
lincoln.bindPopup(lincolnPopup);
lincoln.bindTooltip('Lincoln'); // hover text

// const gymGuido = L.marker([-34.58936, -58.39052], { icon: redIcon}).addTo(mymap);
//       gymGuido.bindPopup('<h2> Recoleta </h2> <p> Here has to be added some text for later </p> <img src = "assets/Gym_Guido01.png" width=400 height=280 /> </p> <img src = "assets/Gym_Guido02.png" width=400 height=280 />');
const gymGuido = L.marker([-34.58936, -58.39052], {icon: redIcon }).addTo(mymap);
const gymGuidoPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2> Recoleta </h2>  <img src = "assets/Gym_Guido01.png" width=400 height=280 /> </p> <img src = "assets/Gym_Guido02.png" width=400 height=280 />');
gymGuido.bindPopup(gymGuidoPopup);
gymGuido.bindTooltip('Recoleta'); // hover text


// const triglav = L.marker([-34.621898, -58.529336], { icon: redIcon }).addTo(mymap).bindPopup('<h2>Triglav</h2> <a href = "https://youtu.be/Xq9K8g71-N8"> <h3> Chapter 4 Joint Training </h3> <img src = "assets/ch_4_joint_training.png" width=400 height=281 /> </a>');
const triglav = L.marker([-34.621898, -58.529336], {icon: redIcon }).addTo(mymap);
const triglavPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Triglav</h2><h3> Chapter 4 Joint Training </h3> <img src = "assets/ch_4_joint_training.png" width=400 height=281 /> <iframe src="https://player.vimeo.com/video/283082158?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Chapter 4.1 Joint Training"></iframe>');
triglav.bindPopup(triglavPopup);
triglav.bindTooltip('Triglav <br> Film: Joint Training'); // hover text


// const campoMunicipal = L.marker([-34.498664, -58.522979], {icon: redIcon}).addTo(mymap);
//       campoMunicipal.bindPopup('<h2> Lara Training </h2> <p> Here has to be added some text for later </p> <a href = "https://youtu.be/GC3F5JBdskY"> <h3> Lara Instruction </h3>  <img src = "assets/campo_Municipal_image.png" width=400 height=250 />');
const campoMunicipal = L.marker([-34.498664, -58.522979], {icon: redIcon }).addTo(mymap);
const campoMunicipalPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2> Lara Training </h2>  <h3> Lara Instruction </h3>  <img src = "assets/campo_Municipal_image.png" width=400 height=250 /> <iframe src="https://player.vimeo.com/video/863963193?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Chapter 3.2 Iob Chagui"></iframe>');
campoMunicipal.bindPopup(campoMunicipalPopup);
campoMunicipal.bindTooltip('Campo Municipal <br> Film: Iob Chagui'); // hover text

// const parroquia = L.marker([-34.650071, -58.433637], {icon: redIcon}).addTo(mymap);
//       parroquia.bindPopup('<h2> Madre del Pueblo, Villa 11 14 Bajo Flores </h2> <p> Here has to be added some text for later </p> <a href = "https://vimeo.com/321468806?share=copy"> <h3> Inside,Outside </h3>  <img src = "assets/Parroquia01.png" width=400 height=250 />');
const parroquia = L.marker([-34.650071, -58.433637], {icon: redIcon }).addTo(mymap);
const parroquiaPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2> Madre del Pueblo, Villa 11 14 Bajo Flores </h2> <p> The club is run by a parish under the premise of prevention and saveguarding children and youth as well as supporting the families living in the surrounding neighbourhood. Thanks to Padre Juan who allowed me to access their grounds and do the filming.  </p> <h3> Inside,Outside </h3>  <img src = "assets/Parroquia01.png" width=400 height=250 /> <iframe src="https://player.vimeo.com/video/321468806?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Inside/Outside"></iframe>');
parroquia.bindPopup(parroquiaPopup);
parroquia.bindTooltip('Villa 11 14 <br> Film: Praying for Taekwondo'); // hover text


//--------------------blue icons-----------------------------------
// const costaSalguero = L.marker([-34.54273, -58.454333] maybe these -34.542026, -58.454004, -34.569107, -58.403364 {icon: blueIcon}).addTo(mymap).bindPopup('<h2>Costa Salguero</h2> <a href = "https://vimeo.com/320754008"><h3>Lara Gourmet</h3> <img src = "assets/Lara_Gourmet.png" width = 400 height=260 </a> <a href = "https://youtu.be/X6-HZ3ol340"> <h3> Sunday Games</h3> <img src = "assets/ch_4_SundayGames.png" width=400 height=205/> </a>').addTo(mymap);
const costaSalguero = L.marker([-34.570145, -58.397478], {icon: blueIcon }).addTo(mymap);
const costaSalgueroPopup = L.popup({closeButton: false, autoClose: false, className: 'CS-custom-popup'}).setContent('<h2>Costa Salguero</h2>    <div class="popup-content"> <div class="popup-column"> <div class="image-container"><h3>Lara Gourmet</h3><img src="assets/Lara_Gourmet.png" width="400" height="260" alt="Lara Gourmet" /></div> </div> <div class="popup-column"> <h3>Sunday Games</h3>  <div class="image-container"><img src="assets/ch_4_SundayGames.png" width="400" height="205" alt="Sunday Games" /></div> </div></div><div class="popup-content"><div class="popup-column"><iframe src="https://player.vimeo.com/video/329361514?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Chapter 4.2 Sunday Games"></iframe></div><div class="popup-column"> <iframe src="https://player.vimeo.com/video/320754008?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Chapter 3.1 Lara Gourmet"></iframe></div></div>');
costaSalguero.bindPopup(costaSalgueroPopup);
costaSalguero.bindTooltip('G1 Competition <br> Film: Lara Gourmet <br> Film: Sunday Games'); // hover text

// const exKDT = L.marker([-34.570145, -58.397478], { icon: blueIcon }).addTo(mymap);
//       exKDT.bindPopup("<b>Ex KDT</b><br> I observed one competition here on a warm sunday and as I cycled there and was not in the mood to schlepp my camera equipment, I opted for notes only. It was nice for once to be there able to observe and hold the paddle while my the competitor warmed up and instead of finding nice angles to film a fight, we were talking about making some pocket money as a referee... ");
const exKDT = L.marker([-34.569107, -58.403364], {icon: blueIcon }).addTo(mymap);
const exKDTPopup = L.popup({closeButton: false, autoClose: false, className: 'EX-custom-popup'}).setContent('<h2>Ex KDT<h2> <p> I observed one competition here on a warm sunday and as I cycled there and was not in the mood to schlepp my camera equipment, I opted for notes only. It was nice for once to be there able to observe and hold the paddle while my the competitor warmed up and instead of finding nice angles to film a fight, we were talking about making some pocket money as a referee...</p> ');
exKDT.bindPopup(exKDTPopup);
exKDT.bindTooltip('exKDT'); // hover text

      
// const cenard = L.marker([-34.54273, -58.454333],-34.54273	-58.454333 {icon: blueIcon}).addTo(mymap);
//       cenard.bindPopup('<h2> CENARD </h2> <p> Here has to be added some text for later </p> <img src = "assets/CENARD.png" width=400 height=280 /> </p> <img src = "assets/CENARD_01.png" width=400 height=280 />');
const cenard = L.marker([-34.54273,	-58.454333], {icon: blueIcon }).addTo(mymap);
const cenardPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2> CENARD </h2> <p> The CENARD is the main training ground for national sports competitors </p> <img src = "assets/CENARD.png" width=400 height=260 /> </p> <img src = "assets/CENARD_01.png" width=400 height=260 />');
cenard.bindPopup(cenardPopup);
cenard.bindTooltip('CENARD'); // hover text

// const juventudCastelar = L.marker([-34.664928, -58.656449], {icon: blueIcon}).addTo(mymap);
//       juventudCastelar.bindPopup('<h2> Sunday Competition </h2> <p> Here has to be added some text for later </p> <img src = "assets/juventudCastelar.png" width=400 height=280 />');
const juventudCastelar = L.marker([-34.664928, -58.656449], {icon: blueIcon }).addTo(mymap);
const juventudCastelarPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2> Sunday Competition </h2> <p> We came here one Sunday morning and spend the day at the competition. The fight of the competitor who appears in -Sunday Games- at the G1 competition was ended by the coach due to disagreements over the judging. </p> <img src = "assets/juventudCastelar.png" width=400 height=280 />');
juventudCastelar.bindPopup(juventudCastelarPopup);
juventudCastelar.bindTooltip('Castelar'); // hover text

// const pedroEchague = L.marker([-34.641747, -58.468589], {icon: blueIcon}).addTo(mymap).bindPopup('<h2>Pedro Echague</h2><a href="https://youtu.be/inrmC-Ci4gI"><h3> Chapter 3 Marcos, Hilda</h3> <img src = "assets/Marcos_Hilda.png" width=400 height=225 /></a>');
const pedroEchague = L.marker([-34.641747, -58.468589], {icon: blueIcon }).addTo(mymap);
const pedroEchaguePopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Pedro Echague</h2><p> This was a competition organised by the Metropolitan Federation. Payig attention to the background you see the competitor who is at the G1 - and protagonist of Lara Gourmet. </p> <img src = "assets/Marcos_Hilda.png" width=400 height=225 /><iframe src="https://player.vimeo.com/video/863964562?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Chapter 0.3 Play, Games, Sport"></iframe>');
pedroEchague.bindPopup(pedroEchaguePopup);
pedroEchague.bindTooltip('Pedro Echagüe <br> Film: Play, Games, Sport'); // hover text

//--------------------Yellow icons-----------------------------------
// const seoul = L.marker([35.907757, 127.766922], { icon: yellowIcon }).addTo( mymap );
// seoul.bindPopup('<h2> Early Years of a Taekwondo Master </h2> <p> Here has to be added some text for later </p> <img src = "assets/Choi in park.png" width=400 height=280 />' );
const seoul = L.marker([35.907757, 127.766922], {icon: yellowIcon }).addTo(mymap);
const seoulPopup = L.popup({closeButton: false, autoClose: false, className: 'Seoul-custom-popup'}).setContent('<h2> Early Years of a Taekwondo Master </h2> <img src = "assets/Choi in park.png" width=1000 height=680 /> <img src = "assets/seoul-pages/page1.jpg" width=1000><img src = "assets/seoul-pages/page2.jpg" width=1000><img src = "assets/seoul-pages/page3.jpg" width=1000><img src = "assets/seoul-pages/page4.jpg" width=1000><img src = "assets/seoul-pages/page5.jpg" width=1000><img src = "assets/seoul-pages/seoulimg.jpg" width=1000>');
seoul.bindPopup(seoulPopup);
seoul.bindTooltip('Seoul'); // hover text

const medalWorkshop = L.marker([-34.568358, -58.594658], {icon: yellowIcon}).addTo(mymap);
const medalWorkshopPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Medal Workshop</h2><h3> Medal Workshop </h3> <img src = "assets/workshop_image.png" width=400 height=300 /> <iframe src="https://player.vimeo.com/video/320748559?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Chapter 2.2 Medal Workshop"></iframe>');
medalWorkshop.bindPopup(medalWorkshopPopup);
medalWorkshop.bindTooltip('Medal Workshop <br> film: Medal Workshop'); // hover text

// const fsion = L.marker([-34.578199, -58.509716], { icon: yellowIcon }, mymap.getMaxZoom()).addTo(mymap);
//       fsion.bindPopup('<h2>Fsion</h2> <p> Here has to be added some text for later </p> <img src = "assets/f-Sion_product_display.png" width=400 height=280 />');
const fsion = L.marker([-34.578199, -58.509716], {icon: yellowIcon }).addTo(mymap);
const fsionPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Fsion</h2> <p> F-Sion is a subsidiary company that distributes WT-recognised euqipment.<p> <h3> Films connected and related are: </h3> <p> <ul> <li>Medal Workshop </li> <li>Locations:</li> <li>Lincoln </li><li> Platense </li> </ul></p> <img src = "assets/f-Sion_product_display.png" width=400 height=280 />');
fsion.bindPopup(fsionPopup);
fsion.bindTooltip('F-sion'); // hover text

// const notary = L.marker([-34.606004, -58.386153], { icon: yellowIcon }).addTo(mymap);
//       notary.bindPopup('<h2>Notary</h2> <p> Here has to be added some text for later </p> <img src = "assets/Notary_image.png" width=400 height=280 />');
const notary = L.marker([-34.606004, -58.386153], {icon: yellowIcon }).addTo(mymap);
const notaryPopup = L.popup({closeButton: false, autoClose: false, className: 'BH-custom-popup'}).setContent('<h2>Notary</h2> <p> This is the notary that ratified the paperwork creating the -Asociación Choi- </p> <img src = "assets/Notary_image.png" width=400 height=280 />');
notary.bindPopup(notaryPopup)
notary.bindTooltip('Notary'); // hover text

//--------------------Routes ---------------------------------------
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

var trainingLayers = L.layerGroup([training1, training2, training3, training4, training5]);

var competitionPoomsaeLayers = L.layerGroup([comp1, comp2, comp3, comp4]);

var allLayers = L.layerGroup([asociacionChoi,peruBeach,platense,lincoln,gymGuido,triglav,campoMunicipal,parroquia,costaSalguero,exKDT,cenard,blackHeart,juventudCastelar,pedroEchague,medalWorkshop,fsion, notary]);

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




