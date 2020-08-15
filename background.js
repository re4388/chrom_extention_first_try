chrome.runtime.onInstalled.addListener( () => {

  /* you predefine script and store stuff here */
  chrome.storage.sync.set({color: '#3aa757'}, () => {
    console.log('The color is green.');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, ()=>{
    chrome.declarativeContent.onPageChanged.addRules(
      [
        {
          conditions: [new chrome.declarativeContent
          .PageStateMatcher({ pageUrl: { hostEquals: 'developer.chrome.com'}})],
          actions: [new chrome.declarativeContent.ShowPageAction()]
        }
      ]
    );
  });
});