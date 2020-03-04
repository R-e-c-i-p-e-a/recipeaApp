
const search = (ev) => {
   document.querySelector('#output').innerHTML = ' ';
  document.querySelector('#output').innerHTML = 'Loading...';
    let url = 'http://api.edamam.com/search?q='+ document.querySelector('input').value + '&app_id=23554e52&app_key=56161b12b3928966226de685a1d07b2c';
 
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
  document.querySelector('#output').innerHTML = ' ';
   console.log('total recipes'); 
  console.log(data['count']);
  // var d = JSON.parse(data);
 
  console.log(Object.values(data['hits'][0]));
 for (i = 0; i < data['hits'].length; i++) {
    document.querySelector('#output').innerHTML +=data['hits'][i]['recipe']['label'] + "<br>";
   
   //"Vegan",
// "Vegetarian",
// "Peanut-Free",
// "Tree-Nut-Free",
// "Alcohol-Free"
//"Sugar-Conscious"
   var heathLs = ["Vegan","Vegetarian","Peanut-Free","Tree-Nut-Free","Alcohol-Free","Sugar-Conscious"]
   var hls = []
   var igs;
  
   pnt = document.getElementById(heathLs[2]);
   vg = document.getElementById(heathLs[0]);
   vgn = document.getElementById(heathLs[1]);
   tnf = document.getElementById(heathLs[3]);
   af = document.getElementById(heathLs[4]);
   sc = document.getElementById(heathLs[5]);
   checker = 0;
   
   if (pnt.checked){
     checker = 1
  
   var healthLis = data['hits'][i]['recipe']['healthLabels'];
  
   if (healthLis.indexOf(pnt.value) >= 0) {
    //do something recipe exists
      document.querySelector('#output').innerHTML +=data['hits'][i]['recipe']['label'] + "<br>";
}
   
   }
   else if (vg.checked){
    checker = 1  
   
   var healthLis = data['hits'][i]['recipe']['healthLabels'];
  
   if (healthLis.indexOf(vg.value) >= 0) {
    //do something recipe exists
      document.querySelector('#output').innerHTML +=data['hits'][i]['recipe']['label'] + "<br>";
}
   
   }
   
   else if (vgn.checked){
     checker = 1 
   
   var healthLis = data['hits'][i]['recipe']['healthLabels'];
  
   if (healthLis.indexOf(vgn.value) >= 0) {
    //do something recipe exists
      document.querySelector('#output').innerHTML +=data['hits'][i]['recipe']['label'] + "<br>";
}
   
   }
   
   else if (tnf.checked){
     checker = 1 
 
   var healthLis = data['hits'][i]['recipe']['healthLabels'];
  
   if (healthLis.indexOf(tnf.value) >= 0) {
    //do something recipe exists
      document.querySelector('#output').innerHTML +=data['hits'][i]['recipe']['label'] + "<br>";
}
   
   }
   
   else if (af.checked){
     checker = 1 
   
   var healthLis = data['hits'][i]['recipe']['healthLabels'];
  
   if (healthLis.indexOf(af.value) >= 0) {
    //do something recipe exists
      document.querySelector('#output').innerHTML +=data['hits'][i]['recipe']['label'] + "<br>";
}
   
   }
   
    else if (sc.checked){
   checker = 1   
 
   var healthLis = data['hits'][i]['recipe']['healthLabels'];
  
   if (healthLis.indexOf(sc.value) >= 0) {
    //do something recipe exists
      document.querySelector('#output').innerHTML +=data['hits'][i]['recipe']['label'] + "<br>";
}
   
   }
 if(checker == 0){
     document.querySelector('#output').innerHTML +=data['hits'][i]['recipe']['label'] + "<br>";
  }
  
 }
  
  
  
};
    
document.querySelector('#searcher').onclick = search;

//"Vegan",
// "Vegetarian",
// "Peanut-Free",
// "Tree-Nut-Free",
// "Alcohol-Free"
//"Sugar-Conscious"

//diet labels
//"Low-Carb"
//"Balanced"


//modal script

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}