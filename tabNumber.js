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
	    	// console.log("tab.url.matchw")
	    	// console.log("tab.url.match" + (tab.url.match("") == null))


	    	if (tab.url.match("^chrome") == null) {
	    		console.log("title: " + tab.title + " url:" + tab.url)
	    		var newTitle = "document.title = '1'" + tab.title
	    		chrome.tabs.executeScript(tab.id,{
	    			code: newTitle
	    		});
	    	}
	    	
	    }
	});
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   // console.log(changeInfo);
});