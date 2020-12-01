function loadBackground() {
  var keys = "ABCDEFGH".split("");
  keys.forEach(fillContainerWithKeys);
  keys = "STUVWXYZ".split("");
  keys.forEach(fillBigContainerWithKeys);
  keys = "$%&/;@!?".split("");
  keys.forEach(fillSmallContainerWithKeys);
}

function fillContainerWithKeys(key, index) {
  $('<div class="key" type="button"><span class="text">' + key + '</span><div class="angle-shadow left-top top-section"></div> <div class="angle-shadow right-top top-section"></div><div class="angle-shadow left-bottom bottom-section"></div><div class="angle-shadow right-bottom bottom-section"></div></div>').appendTo("#container-background-keys");
}

function fillBigContainerWithKeys(key, index) {
  $('<div class="key" type="button"><span class="text">' + key + '</span><div class="angle-shadow left-top top-section"></div> <div class="angle-shadow right-top top-section"></div><div class="angle-shadow left-bottom bottom-section"></div><div class="angle-shadow right-bottom bottom-section"></div></div>').appendTo("#container-background-big-keys");
}

function fillSmallContainerWithKeys(key, index) {
  $('<div class="key" type="button"><span class="text">' + key + '</span><div class="angle-shadow left-top top-section"></div> <div class="angle-shadow right-top top-section"></div><div class="angle-shadow left-bottom bottom-section"></div><div class="angle-shadow right-bottom bottom-section"></div></div>').appendTo("#container-background-small-keys");
}
loadBackground();
