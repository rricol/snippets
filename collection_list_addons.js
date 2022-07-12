
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

// Set text color to white or black depending on the background

let bkg = $('.background-element');
let light = '#ffffff';
let dark = '#000000';

for (i = 0; i < colors.length; i++)
{
	var rgbRaw = bkg.eq(i).css('background-color');
  var rgb = rgbRaw.replace(/[^\d,]/g, '').split(',');
  if ((parseInt(rgb[0])*0.299 + parseInt(rgb[1])*0.587 + parseInt(rgb[2])*0.114) > 186) 
  {
  	colors.eq(i).find('.text-element').css('color', dark);
  } 
  else 
  { 
    colors.eq(i).find('.text-element').css('color', light)
  };
}