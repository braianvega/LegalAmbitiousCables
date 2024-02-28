import * as axalib from "./axaDesignSystemLib";
// import * as prismjs from "../node_modules/prismjs/prism"

// Live demo toast
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new axalib.Toast(toastLiveExample)
    toast.show()
  })
}

//Live demo alert 
var alertTrigger = document.getElementById('liveAlertBtn')
var alertLiveExample = document.getElementById('liveAlert')
if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    var alert = new axalib.Toast(alertLiveExample)
    alert.show()
  })
}


// Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new axalib.Tooltip(tooltipTriggerEl)
})

// Enable popover everywhere
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new axalib.Popover(popoverTriggerEl)
})

var navSearchButton = document.getElementById('nav-search-button')
var navSearchButtonRes = document.getElementById('nav-search-button-res')

var navBurger= document.getElementById('toggle-nav')
var toggleSearch = false
navSearchButton.onclick = updateCollapsed;
navSearchButtonRes.onclick = updateCollapsed;
let searchInput = document.getElementById('search-input');
let searchInputRes = document.getElementById('search-input-res'); 
let formSearchRes = document.getElementById('formSearchRes');
let formSearch = document.getElementById('formSearch');
searchInput.addEventListener("input", searchWord);
searchInputRes.addEventListener("input", searchWord);
let skipLinkItem = document.querySelectorAll('.skiplinkTitle');
let skipLinkNav = document.getElementById('skiplink-nav');

function handleFocus () {
  skipLinkNav.classList.add("skiplink-nav")
  skipLinkNav.classList.remove("skiplink-nav-hide")
  
}

function handleBlur () {
  skipLinkNav.classList.add("skiplink-nav-hide")
  skipLinkNav.classList.remove("skiplink-nav")
}

skipLinkItem.forEach((link) => {
  link.addEventListener("focus", handleFocus);
  link.addEventListener("blur", handleBlur);
}); 


function updateCollapsed() {
    toggleSearch =!toggleSearch
      if(toggleSearch){
        navBurger.style.display='none'
        if(document.getElementById('nav-close').classList.contains("show")){
          document.getElementById('nav-close').click()
        }
      }else{

        navBurger.style.display='flex'
        resetSearch()
      }

}

var searchResultBlock= document.querySelector('.search-result-block')
var searchResultFound= document.querySelector('.search-result-found')
var searchResultNotFound= document.querySelector('.search-result-not-found')
var resultPages = document.getElementById('result-pages')

searchResultBlock.style.display= 'none'

function searchWord(e) {
  searchInput.value = e.target.value
  searchInputRes.value = e.target.value
  if(e.target.value){
    fetch('/api/search/' +e.target.value
    , {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(result =>{ 
      searchResultBlock.style.display='block'
      if(isResultFill(result)){
        searchResultNotFound.style.display='none'
        searchResultFound.style.display='block'
        fillPages(result.pages)
        fillComponents(result.components)
        fillDesign(result.design)
        fillArticles(result.articles)
      }else{
        searchResultNotFound.style.display='block'
        searchResultFound.style.display='none'
      }
    })
    .catch((error) => {
      searchResultBlock.style.display='block'
      searchResultNotFound.style.display='block'
      searchResultFound.style.display='none'
      console.error("error", error);
    });
  }
  else{
    searchResultBlock.style.display='none'
  }
}
function isResultFill(result) {
  var found = false;
  for (const value of Object.values(result)) {
    if (value.length > 0) {
      found = true;
    }
  }
  return found;
};

function  fillPages(pages) {
  if(pages.length>0){
    resultPages.style.display='block'
    empty(resultPages)
    resultPages.append(addResultTitle("PAGES"))
    for (const page of pages) {
      resultPages.append(addPages(page))
      
    }
  }else{
    resultPages.style.display='none'
  }
};
function addResultTitle(title){
  const text1 = document.createElement('p')
  text1.setAttribute('class', "result-title ");
  text1.innerText= title;
  return text1
}
function addPages(page) {
  // Create li element and set its class
  const newPage = document.createElement('a');
  newPage.setAttribute('href', page.url);

  // Create span link
  const newPageLink = document.createElement('span');
  newPageLink.setAttribute('class', "result-link");
  newPageLink.innerText= page.link;
  const newPageBody = document.createElement('span');
  newPageBody.setAttribute('class', "result-body ");

  // Create span body
  if(page.relevantText.length>1){
    newPageBody.innerHTML = page.relevantText[0] +'<b>' + page.relevantText[2] + '</b>'+ page.relevantText[1]
  }else {
    newPageBody.innerHTML = '<b>' + page.relevantText[0] +'</b>'

  
  }
  
// Create result body
  const newPageResult = document.createElement('div');
  newPageResult.setAttribute('class', "result");

  newPageResult.append(newPageBody)
  newPageResult.append(document.createElement('br'))
  newPageResult.append(newPageLink)
  newPage.append(newPageResult)
  return newPage

}
function  fillComponents(components) {
  const resultcomponents = document.getElementById('result-components')
  if(components.length>0){
    resultcomponents.style.display='block'
    empty(resultcomponents)
    resultcomponents.append(addResultTitle("COMPONENTS"))
    for (const component of components) {
      resultcomponents.append(addPages(component))
    }
  }else{
    resultcomponents.style.display='none'
  }
};
function  fillDesign(designs) {
  const resultdesigns = document.getElementById('result-designs')
  if(designs.length>0){
    resultdesigns.style.display='block'
    empty(resultdesigns)
    resultdesigns.append(addResultTitle("Brand guidelines"))
    for (const design of designs) {
      resultdesigns.append(addPages(design))
    }
  }else{
    resultdesigns.style.display='none'
  }
};

function  fillArticles(articles) {
  const resultarticles = document.getElementById('result-articles')
  if(articles.length>0){
    resultarticles.style.display='block'
    empty(resultarticles)
    resultarticles.append(addResultTitle("Insights"))
    for (const article of articles) {
      resultarticles.append(addPages(article))
    }
  }else{
    resultarticles.style.display='none'
  }
};
function empty (element) {

  // Get the element's children as an array
  var children = Array.prototype.slice.call(element.childNodes);

  // Remove each child node
  children.forEach(function (child) {
    element.removeChild(child);
  });

}
function resetSearch() {
  searchResultBlock.style.display='none'
  searchResultNotFound.style.display='none'
  searchResultFound.style.display='none'
  //reset input 
  searchInput.value=""
  searchInputRes.value=""

}
window.addEventListener("resize", function(){
  if(navSearchButton.classList.contains('collapsed')) {
    navBurger.style.visibility='visible'
  }else{
    navBurger.style.visibility='hidden'
  }
});
window.addEventListener('click', function(e){   
  if (! (document.getElementById('searchResultBlock').contains(e.target) || document.getElementById('formSearch').contains(e.target) || document.getElementById('formSearchRes').contains(e.target))){
   if((document.getElementById('searchResultBlock')).style.display!='none'){
    //resetSearch()
    navSearchButton.click()

   }
  } 
});


document.title = setTitleFromPath(location.href)

function setTitleFromPath(path) {
  let url  = path.replace(/^https?:\/\//, '');
	const titles=url.split("/");
  const noEmptyStrings = titles.filter((str) => str !== '');
  url= 'AXA Design System Website';
	if(noEmptyStrings && noEmptyStrings.length===2){
		url= capitalizeFirstLetter(noEmptyStrings[1])+'-' + url
	}
	if(noEmptyStrings &&  noEmptyStrings.length>2){
		url= capitalizeFirstLetter (noEmptyStrings[noEmptyStrings.length-2])+' - '+capitalizeFirstLetter(noEmptyStrings[noEmptyStrings.length-1])+' - ' + url
	}
  return url;
  }

  function capitalizeFirstLetter(word){

    // get the first character of the string
    let firstCharacter = word.charAt(0);

    // convert the first character to uppercase
    firstCharacter = firstCharacter.toUpperCase();

    // combine the first character with the rest of the string
    const capitalizedString = firstCharacter + word.slice(1);
    return capitalizedString

}

formSearch.addEventListener('shown.bs.collapse', function () {
  document.getElementById('search-input').focus();
});

formSearchRes.addEventListener('shown.bs.collapse', function () {
  document.getElementById('search-input-res').focus();
});
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    if(formSearch.classList.contains("show") || formSearchRes.classList.contains("show"))
      {
        navSearchButton.click();
      }
  }
}); 

