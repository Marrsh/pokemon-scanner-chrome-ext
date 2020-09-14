var button = document.getElementById('scan');
button.onclick = function() {
    chrome.tabs.executeScript({
        file: 'findPokemon.js'
    }); 
};
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
                  document.write("<div class='pikachu'>There are "+request.pikachus+" Pikachu's on the page :)</div>");
        sendResponse({farewell: "goodbye"});
});
