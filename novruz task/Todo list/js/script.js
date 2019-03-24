"use strict";
let lists = [];
let listItem = document.getElementsByClassName("wrapper");
function getInputValue() {
  let listItem = document.getElementById('inputLIstt').value;
  lists.push(listItem);

  let liItems = "";
  for (let i = 1; i < lists.length; i++) {
    liItems += "<li  class='myList mt-0 pt-0 pl-2 '>" + "<span id='mySpan' onclick='textStyle(this)' ondblclick='textStyle2(this)'>" +lists[i] + "</span>" + "<i onclick='deletItem(this)' onmouseout='mouseOut(this)'  onmouseover='mouseOver(this)' onclick='textStyle(this)' 'ondblclick='textStyle2(this)' class='fas fa-trash-alt'></i>"+ "</li>"
  }
  console.log(liItems)
  document.getElementById('wrapper').innerHTML = liItems;
}
function textStyle(item) {
  item.style.textDecorationLine = "line-through";
}
function textStyle2(item) {
  item.style.textDecorationLine = "none";
}
function deletItem(itemm) {
  itemm.parentNode.remove(itemm);
}
function mouseOver(item) {
 item.style.opacity = "1"
}
function mouseOut(item) { 
  item.style.opacity = "0"
}
