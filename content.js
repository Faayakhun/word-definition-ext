console.log("Chrome extension start");

window.addEventListener("mouseup", wordSelected);

function wordSelected() {
  console.log("word selected");
  let selectedText = window
    .getSelection()
    .toString()
    .trim();
  console.log(selectedText);
  if (selectedText.length > 0) {
    let message = {
      text: selectedText
    };
    console.log(message.text);

    chrome.runtime.sendMessage(message);
  }
}
