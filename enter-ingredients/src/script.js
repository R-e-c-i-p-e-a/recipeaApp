

const search = (ev) => {
   document.querySelector('#output').innerHTML = ' ';
    let url = 'https://api.edamam.com/search?q='+ document.querySelector('input').value + '&app_id=23554e52&app_key=56161b12b3928966226de685a1d07b2c&from=0&to=3&calories=591-722&health=alcohol-free';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
   console.log('total recipes'); 
  console.log(data['count']);
  // var d = JSON.parse(data);
 
  console.log(Object.values(data['hits'][0]));
 for (i = 0; i < data['hits'].length; i++) {
    
   console.log('name ');
   document.querySelector('#output').innerHTML +=JSON.stringify(data['hits'][i], null, 4);
   console.log(typeof data['hits'][i]['label']);
   console.log('sources ');
   console.log(data['hits'][i]['sources']);
   console.log('ingredients lines ');
   console.log(data['hits'][i]['ingredientLines']);
   console.log('ingredients list ');
    console.log(data['hits'][i]['ingredients'] );
 }
  
  
  
};
    
document.querySelector('#searcher').onclick = search;