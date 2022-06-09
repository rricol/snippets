// Raccourcir la description d'un item et ajouter [...] à la fin.

let allElements = document.getElementsByClassName('textClass');
let length = 200;
for (i = 0; i < allElements.length; i++) {
    var string = allElements[i].innerHTML;
    var newString;
    if (string.length > length) {
        newString = string.substring(0, length);
        newString = newString + " […]";
        allElements[i].innerHTML = newString;
  }
}
