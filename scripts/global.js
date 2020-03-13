const goBack = () => {
   history.back();
}

var badges = {
   numSearches"numHearts": 0,
   "numSearches": 0
}

const updateNumHearts = () => {
   badges["numHearts"] += 1
   console.log(badges["numHearts"])

   if (badges["numHearts"] == 5) {
      var modal = document.getElementById("myModal3");
      modal.style.display = "block";
   }
   if (badges["numHearts"] == 10) {
      var modal2 = document.getElementById("myModal3");
      document.getElementById("achImg").src = "img/10heart.png";
      modal2.style.display = "block";
   }
}

const updateNumSearches = () => {
   badges["numSearches"] += 1
   console.log(badges["numSearches"])
}

// When the user clicks on <span> (x), close the modal
const closer = () =>{
   // document.querySelector('.modal-content').innerHTML += ' ';
   var modal2 = document.getElementById("myModal3");
   modal2.style.display = "none";
  }
