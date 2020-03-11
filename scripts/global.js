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
}

const updateNumSearches = () => {
   badges["numSearches"] += 1
   console.log(badges["numSearches"])
}