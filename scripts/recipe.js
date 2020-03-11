
var displayCount = 0;
const search = (ev) => {
  
  // Badges | Increment numSearches counter
  updateNumSearches();

  document.querySelector('#output').innerHTML = ' ';
  document.querySelector('#output').innerHTML ='Loading...';
  //filter logic
  
  cuisineOr = '';
  if(document.getElementById("cuisine").value != 'zero'){
    cuisineOr = '&cuisine='+document.getElementById("cuisine").value;
    
  }
dietOr = '';
  if(document.getElementById("diet").value != 'zero'){
  dietOr = '&diet='+document.getElementById("diet").value;
    
  }
intolerancesOr = '';
  if(document.getElementById("intolerances").value != 'zero'){
  intolerancesOr = '&intolerances='+document.getElementById("intolerances").value;
    
  }
  
  
  //end filter logic
  
  
  
  
  //cuisine,diet,excludeIngredients,intolerances
  random = Math.round(Math.random() * 10,2);
  
  let url = 'https://api.spoonacular.com/recipes/search?query='+document.getElementById('search').value+'&number=9&apiKey=9198b17ebaca44369df0f6e3bdde37ba&offset='+random + cuisineOr + dietOr + intolerancesOr;
  console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
  
}

const displayResults = (data) => {
// document.querySelector('.top').innerHTML = '';
  
  
  console.log(data['results'].length);
  for (i = 0; i < data['results'].length; i++){
    //missing ingredients logic
    
   
    string = '   <div class="a" > <div class="name">Name:'+data['results'][i]['title']+'</div><img class="img" src="https://spoonacular.com/recipeImages/'+data['results'][i]['image']+'"></img>  <i class="fa fa-star" style="font-size:1.3rem;"></i>  <i class="fa fa-star" style="font-size:1.3rem;"></i> <i class="fa fa-star" style="font-size:1.3rem;"></i> <i class="fa fa-star" style="font-size:1.3rem;"></i> <div class="prep"> <span style="font-weight:bold">Prep Time:</span> '+data['results'][i]['readyInMinutes']+' minutes';
   
  
  string += "<i style='cursor:pointer' class='fa fa-plus' onclick='extraDetails("+data['results'][i]['id']+")'></i>";
  string += "<i class='fa fa-heart fa-2x' onclick='updateNumHearts()'></i>";
  string += "</div></div>";
    
   document.querySelector('.top').innerHTML += string;
}
  document.querySelector('#output').innerHTML = 'Please refresh page to make new query! ';
}

document.querySelector('#searcher').onclick = search;


//modal details 

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
    document.querySelector('.modal-content').innerHTML +='<span class="close" onclick="closer()">&times;</span>';
  }
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

const filterModal = () => {
  var modal = document.getElementById("myModal2");
  modal.style.display = "block";
}

//end modal details 

const closer = () =>{
 // document.querySelector('.modal-content').innerHTML += ' ';
  var modal = document.getElementById("myModal");
   var modal2 = document.getElementById("myModal2");
  modal.style.display = "none";
  modal2.style.display = "none";
  
}

const refresh = () =>{
  document.querySelector('.topA').innerHTML = '';
}
document.querySelector('#refresher').onclick = refresh;
