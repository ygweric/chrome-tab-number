chrome.browserAction.onClicked.addListener(function() {
	console.log("chrome.browserAction.onClicked.");
});

chrome.tabs.onCreated.addListener(function(){
	console.log("chrome.tabs.onCreated.");
	updateTitleNumber()
});

chrome.tabs.onRemoved.addListener(function(){
	console.log("chrome.tabs.onRemoved.");
	updateTitleNumber()
});



function updateTitleNumber() {
	 chrome.tabs.getAllInWindow(null, function(tabs){
	    for (var i = 0; i < tabs.length; i++) {
	    	var tab = tabs[i]

	    	chrome.tabs.executeScript(tab.id,{code:"document.title = 'My lame title!'"});
	    }
	});
}