window.onload = () => {
  var objects = hommage.concat(letters);
  addObjects(objects);
};

function addObjects(objects) {
  let item = document.querySelector('.item');
  for (let i = 0; i < objects.length; i++) {
    let itemClone = item.cloneNode(true);
    itemClone.setAttribute('target', '_blank');
    item.parentNode.appendChild(itemClone);
    let object = objects[i];
    let objectLink = object[0];
    let objectMedia = object[1];
    console.log(object);
    let img = document.createElement('img');
    itemClone.href = objectLink;
    img.src = 'images/' + objectMedia;
    itemClone.appendChild(img);
  }
  item.parentNode.removeChild(item);
}

var hommage = [
  ['https://editor.p5js.org/thornvik/sketches/c2J8wmEXc', 'rolling.gif'],
  ['https://editor.p5js.org/strazan/sketches/veAPSc340', 'mondrian.gif'],
  ['https://editor.p5js.org/rockon_d/sketches/VBBl-h_Ap', 'triangles.png'],
  ['https://editor.p5js.org/augusterixon/sketches/AwmvTqIep', 'warhol.gif'],
  ['https://editor.p5js.org/Empi/sketches/3XmBmEH_f', 'triangles2.png'],
  ['https://editor.p5js.org/douglaslind/sketches/LfWQXCFb0', 'checker.png'],
  ['https://editor.p5js.org/MuchChinz/sketches/GvbvfHXYI', 'squares.gif'],
  ['https://editor.p5js.org/asab/sketches/89xSwbBIX', 'arc.gif'],
  ['https://editor.p5js.org/fannynilsson/sketches/vk7yZzEuC', 'hilma.png'],
  ['https://editor.p5js.org/pjhochman/sketches/tEbPFwlNp', 'jazz.gif']
];

var letters = [
  ['https://editor.p5js.org/emiliohell/sketches/voorOMpzL', 'e.gif'],
  ['https://editor.p5js.org/Anderskillander/sketches/DV1Ojf6R0', 'a.gif'],
  ['https://editor.p5js.org/Mudassar/sketches/A-gtgSc1R', 'm.gif'],
  ['https://editor.p5js.org/johanwennerstrom-joj/sketches/_97fYVA8Q', 'e2.gif'],
  ['https://editor.p5js.org/Emelie/sketches/R_G_FxHrg', 'r.gif'],
  ['https://editor.p5js.org/EvaThoris/sketches/mRdCAoOL_', 'e3.gif'],
  ['https://editor.p5js.org/tim.olsson/sketches/YcxUvD_KP', 'e4.gif'],
  ['https://editor.p5js.org/emsa/sketches/sU5bKP20I', 'i.gif'],
  ['https://editor.p5js.org/thornvik/sketches/7ebPt4Y60', 'x.gif'],
  ['https://editor.p5js.org/strazan/sketches/kXic9WIyx', 'e5.gif'],
  ['https://editor.p5js.org/augusterixon/sketches/Clt6B7voW', 'c.gif'],
  ['https://editor.p5js.org/joakimhellgren/sketches/Sd8e6n-in', 'o.gif'],
  ['https://editor.p5js.org/Empi/sketches/Pw7d0vRJs', 'e6.gif'],
  ['https://editor.p5js.org/douglaslind/sketches/Skr2eQ3UE', 'l.gif'],
  ['https://editor.p5js.org/hamzakhan/sketches/7uJIgRmTu', 'o2.gif'],
  ['https://editor.p5js.org/MuchChinz/sketches/fUhmhMH8I', 'x2.gif']
];
