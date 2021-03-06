var displayCount = 0;
const randomC = () =>{
   var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const clear = () =>{
 console.log("clear"); //document.querySelector('#topData').innerHTML = ' ';
  console.log("clear2"); 
}
var badges = {“numSearches”: 0}
const search = (ev) => {
 
   
  document.querySelector('#output').innerHTML = ' ';
  document.querySelector('#output').innerHTML ='Loading...';
 console.log(document.getElementById("pantry").checked);
  pantry = 'ignorePantry=false';
  if(document.getElementById("pantry").checked == true){
    console.log("inputChecked");
    pantry = 'ignorePantry=true';
  }
  if(document.getElementById("pantry").checked == true){
    console.log("inputChecked");
    pantry = 'ignorePantry=true';
  }

 maximizeOr = '';
  if(document.getElementById("maximizeOr").value != 'zero'){
    maximizeOr = '&ranking='+document.getElementById("maximizeOr").value;
    console.log("maximized value "+document.getElementById("maximizeOr").value)
  }
    let url = 'https://api.spoonacular.com/recipes/findByIngredients/?ingredients='+document.getElementById('search').value+'&number=8&apiKey=9198b17ebaca44369df0f6e3bdde37ba&'+pantry+maximizeOr ;
  

 
     fetch(url)
        .then(response => response.json())
        .then(displayResults);
   badges["numSearches"] += 1
  console.log(badges["numSearches"])
  if (badges["numSearches"] == 5) {
    var modal = document.getElementById("myModal4");
    modal.style.display = "block";
 }
 if (badges["numSearches"] == 10) {
    var modal2 = document.getElementById("myModal4");
    document.getElementById("achImg").src = "img/10search.png";
    modal2.style.display = "block";
 }
  
}
var missinNames = [];

const displayResults = (data) => {
 
 idVal = document.getElementById('search').value;
  if (idVal.indexOf(',') > -1) {
    
    arr = idVal.split(',');
    console.log(arr);
    var gLen;
    for(gLen = 0;gLen < arr.length;gLen++){
   newColor = randomC();   document.querySelector('.listIngredi').innerHTML +='<div class="g" style="background-color:'+newColor+'">'+arr[gLen]+'</div> <br>';
     
    }
  } 
  
  document.querySelector('#output').innerHTML = ' ';
  
   console.log('total recipes'); 
  console.log(data.length);
  // var d = JSON.parse(data);
 
 
  for (i = 0; i < data.length; i++){
    //missing ingredients logic
    
   
    string = '   <div class="a" "> <div class="name">Name:'+data[i]['title']+'</div><img class="img" src="'+data[i]['image']+'"></img>  <i class="fa fa-star" style="font-size:1.3rem;"></i>  <i class="fa fa-star" style="font-size:1.3rem;"></i> <i class="fa fa-star" style="font-size:1.3rem;"></i> <i class="fa fa-star" style="font-size:1.3rem;"></i> <div class="prep"> <span style="font-weight:bold">Used Ingredients</span> ';
  
    //used ingredients
        for (f = 0; f < data[i]['usedIngredients'].length; f++){
      string += data[i]['usedIngredients'][f]['originalString']+': '+ data[i]['usedIngredients'][f]['amount']+' '+ data[i]['usedIngredients'][f]['unit'] + '<br>';
     
          
      
    }
    
    string +='<strong onclick="">Missing Ingredients - </strong>';
    //missing ingredients logic
    if(data[i]['missedIngredients'].length == 0){
    string += '<span style="font-weight:bold">No missing Ingredients</span>';
  }else{
    string += '<span class="missinIn">';
   
         for (d = 0; d < data[i]['missedIngredients'].length; d++){
      string += data[i]['missedIngredients'][d]['originalName']+':'+ data[i]['missedIngredients'][d]['aisle']+'<br>';
     
          
      
    }
    string +='</span>';
  }
   
    string += "<i style='cursor:pointer' class='fa fa-plus' onclick='extraDetails("+data[i]['id']+")'></i>";
    string += "</div></div>";
    
    document.querySelector('.topA').innerHTML += string;


    //end box
   
  }

  
  document.querySelector('#output').innerHTML ="Please Refresh Page for new Query!"
  
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


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <strong> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
const filterModal = () => {
  var modal = document.getElementById("myModal2");
  modal.style.display = "block";
}
const extraDetails = (id) => {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  //console.log(names);
  let url = 'https://api.spoonacular.com/recipes/'+id+'/information?includeNutrition=true&apiKey=9198b17ebaca44369df0f6e3bdde37ba';
  fetch(url)
        .then(response => response.json())
        .then(displayPopup);
}



const displayPopup = (data) => {
 if(displayCount > 0 ){
    document.querySelector('.modal-content').innerHTML = '';
  }
  document.querySelector('.modal-content').innerHTML +='<span class="close" onclick="closer()">&times;</span>';
  displayCount += 1;
  string = '<h2 style="text-align:center">'+data['title'] + '</h2><br>';
  
  string += '<span style="margin-left:45%;" >Prep Time": '+data['spoonacularScore']+' Min</span><br>';
  string += '<span style="margin-left:43%;" >Prep Time": '+data['preparationMinutes']+' Min</span><br>';
   string += '<br><span class="center">Cooking Time": '+data['cookingMinutes']+' Min</span><br><br>';
  string += '<img src="'+data['image']+'" height="250rem" width="360rem" margin-left="auto" margin-right="auto" display="block"><br>';
   string += '<span font-weight="bold">Summary</span> "'+data['summary'] + '<br><br>';
  string += '<div style="float:left;width:50%">';
  string += '<strong>Nutrition Breakdown</strong><br> <br>Fat Percentage: '+data['nutrition']['caloricBreakdown']["percentFat"];
  string += '<br>Protein Percentage: '+data['nutrition']['caloricBreakdown']["percentProtein"];
  string += '<br>Protein Percentage: '+data['nutrition']['caloricBreakdown']["percentCarbs"];
  string += '</div>';
  string += '<div style="float:right;width:50%">';
  string += '<strong >Extended Ingredients</strong> <br>';
  for(ing = 0; ing < data['extendedIngredients'].length;ing++){
    string += '<br>name: '+data['extendedIngredients'][ing]["originalString"];
  }
  
  string += '</div>';
 
  document.querySelector('.modal-content').innerHTML += string;
}




btn.onclick = function() {
  // console.log('https://api.spoonacular.com/recipes/716429/information?includeNutrition=true&apiKey=455ea7883f7d46928b5019fdd5a8532a&id=1113049')
  
}

// When the user clicks on <span> (x), close the modal
const closerD = () =>{
 // document.querySelector('.modal-content').innerHTML += ' ';
  var modal = document.getElementById("myModal");
   var modal2 = document.getElementById("myModal2");
  modal.style.display = "none";
  modal2.style.display = "none";
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    
    modal.style.display = "none";
  }
}
const refresh = () =>{
  document.querySelector('.topA').innerHTML = '';
}
document.querySelector('#refresher').onclick = refresh;
