// var pageContent = document.getElementsByTagName("p");
var pageContent = document.documentElement.innerHTML;

// var words = new Array();
var pokemon = new Array();
var pikaCount =  pageContent.search('Pikachu');
if (pikaCount < 0){
    pikaCount = 0;
}

chrome.runtime.sendMessage({pikachus: pikaCount}, function(response) {
    console.log(response.farewell);
  });
