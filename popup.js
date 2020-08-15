let changeColor = document.getElementById('changeColor');

/* get persistance value from background.js and change popup bg color and value */
chrome.storage.sync.get('color', (data) => {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

/* when click we change color based on its value (we passed above) */
changeColor.onclick =  (element) => {
  let color = element.target.value;

  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};