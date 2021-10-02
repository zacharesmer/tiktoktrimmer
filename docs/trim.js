'use strict'
function trim() {
  var input = document.getElementById('input');
  // TODO: get outlink to be the full, unshortened link
  // this involves making some kind of http request and idk how
  var outlink = input.value.split("?")[0];
  var output = document.getElementById('output');
  output.value = outlink;

  output.select();
  output.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(output.value);
}

