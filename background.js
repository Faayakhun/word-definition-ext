console.log("background running");

chrome.runtime.onMessage.addListener(receiver);

window.word = "faay ext";

function receiver(request, sender, sendResponse) {
  console.log(request);
  word = request.text;
}
