const goBack = () => {
   history.back();
}

var badges = {
   "numHearts": 0,
   "numSearches": 0
}

const updateNumHearts = () => {
   badges["numHearts"] += 1
   console.log(badges["numHearts"])

   if (badges["numHearts"] == 5) {
      var modal = document.getElementById("myModal3");
      document.getElementById("achImg").src = "img/5heart.png";
      document.getElementById("achText").innerText = "Hearted five recipeas!"
      modal.style.display = "block";
   }
   if (badges["numHearts"] == 10) {
      var modal2 = document.getElementById("myModal3");
      document.getElementById("achImg").src = "img/10heart.png";
      document.getElementById("achText").innerText = "Hearted ten recipeas!"
      modal2.style.display = "block";
   }
}

const updateNumSearches = () => {
   badges["numSearches"] += 1
   console.log(badges["numSearches"])

   if (badges["numHearts"] == 5) {
      var modal = document.getElementById("myModal3");
      document.getElementById("achImg").src = "img/5search.png";
      document.getElementById("achText").innerText = "Searched five recipeas!"
      modal.style.display = "block";
   }
   if (badges["numHearts"] == 10) {
      var modal2 = document.getElementById("myModal3");
      document.getElementById("achImg").src = "img/10search.png";
      document.getElementById("achText").innerText = "Searched ten recipeas!"
      modal2.style.display = "block";
   }
}

// When the user clicks on <span> (x), close the modal
const closer = () =>{
   // document.querySelector('.modal-content').innerHTML += ' ';
   var modal2 = document.getElementById("myModal3");
   modal2.style.display = "none";
  }
