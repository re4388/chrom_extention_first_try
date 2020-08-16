let changeColor = document.getElementById('changeColor');

/* get persistance value from background.js and change popup bg color and value */
chrome.storage.sync.get('color', (data) => {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

/* when click we change color based on its value (we passed above) */
changeColor.onclick = (element) => {
  let color = element.target.value;
  // const codeBlock = 'document.body.style.backgroundColor = "' + color + '";'
  // const codeBlock = `document.body.style.backgroundColor = ${color}`
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id, {
        file: 'contentScript.js'
      });
  });

  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
  }, function (tabs) {
    console.log(tabs[0].url);
    console.log(tabs[0].title);
  });


};