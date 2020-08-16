chrome.runtime.onInstalled.addListener( () => {

  /* you predefine script and store stuff here */
  chrome.storage.sync.set({color: '#3aa757'}, () => {
    console.log('The color is green.');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {

    url1 = `www.youtube.com`
    url2 = `developer.chrome.com`

    chrome.declarativeContent.onPageChanged.addRules(
      [
        {
          conditions: [new chrome.declarativeContent
          .PageStateMatcher({ pageUrl: { hostEquals: url2}})],
          actions: [new chrome.declarativeContent.ShowPageAction()]
        }
      ],
      // [{
      //   actions: [new chrome.declarativeContent.ShowPageAction()]
      // }]
    );
  });
});