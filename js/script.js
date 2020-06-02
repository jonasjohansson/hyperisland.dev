window.onload = () => {
  var mrObjects = worlds.concat(letters3d);
  addObjects(mrObjects, 'mr');
  addObjects(designofdata, 'gdod');
  var gdObjects = hommage.concat(letters);
  addObjects(gdObjects, 'gd');
};

function addObjects(objects, folder) {
  let grid = document.querySelector('#grid');
  //let item = document.querySelector('.item');
  for (let i = 0; i < objects.length; i++) {
    //let itemClone = item.cloneNode(true);
    let itemClone = document.createElement('a');
    itemClone.classList.add('item');
    itemClone.setAttribute('target', '_blank');
    //item.parentNode.appendChild(itemClone);
    grid.appendChild(itemClone);
    let object = objects[i];
    let objectLink = object[0];
    let objectMedia = object[1];
    console.log(object);
    let img = document.createElement('img');
    itemClone.href = objectLink;
    img.src = 'images/' + folder + '/' + objectMedia;
    itemClone.appendChild(img);
  }
  //item.parentNode.removeChild(item);
}

var hommage = [
  ['https://editor.p5js.org/Emelie/sketches/xtae9qLuR', 'yasoi.jpg'],
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

var letters3d = [
  ['https://a-frame-k-letter.glitch.me/', 'k.gif'],
  ['https://courageous-meteorology.glitch.me/', 't.gif'],
  ['https://coherent-palm-clef.glitch.me/', 'g.gif'],
  ['https://exlopring-g.glitch.me/', 'g2.gif'],
  ['https://sulky-skitter-scion.glitch.me/', 'o.gif'],
  ['https://lavender-slow-amaryllis.glitch.me/', 'p.gif'],
  ['https://excessive-tundra-fossa.glitch.me/', 'd.gif'],
  ['https://lead-plausible-gopher.glitch.me/aframe.html', 'o2.gif'],
  ['https://resilient-glaze-handsaw.glitch.me/', 'e.gif'],
  ['https://longing-rocky-daemonosaurus.glitch.me/', 'l.gif'],
  ['https://shooting-cube.glitch.me/', 'o3.gif'],
  ['https://available-swift-barberry.glitch.me/', 'y.gif'],
  ['https://aframe-2020.glitch.me/', 'e.jpg'],
  ['https://concrete-phase-leopard.glitch.me/', 'n.gif']
];

var worlds = [
  ['https://zcream.glitch.me/', 'scream.gif'],
  ['https://economic-mahogany-frigate.glitch.me/', 'trumpet.gif'],
  ['https://lime-handy-butterfly.glitch.me/', 'space.gif'],
  ['https://stormy-shelled-poultry.glitch.me/', 'space2.gif'],
  ['https://meowing-cute-concavenator.glitch.me/', 'totoro.gif'],
  ['https://amenable-jasper-smelt.glitch.me/', 'knee.gif']
];

var designofdata = [
  ['https://rtro-wthr.netlify.app/', 'weatherspirals.gif'],
  ['https://generativecolorart.netlify.app/', 'artgrad.gif'],
  ['https://editor.p5js.org/rainnie/present/pq19a97cy', 'birdcage.gif'],
  ['https://editor.p5js.org/MuchChinz/full/CrRizZexD', 'bullshit.gif'],
  ['https://peterscolorpalette.netlify.app/', 'gradient.gif'],
  ['https://variable-birdsong.netlify.app/', 'koltrast.gif'],
  ['https://editor.p5js.org/thornvik/present/-YmbK3S3D', 'lines.gif'],
  ['https://editor.p5js.org/joakimhellgren/full/a1HeJ8gHH', 'musicdots.gif'],
  ['https://priceless-bardeen-5c875c.netlify.app/', 'particles.gif'],
  ['https://editor.p5js.org/TQM/present/DrmQJ0R2A', 'smileys.gif'],
  ['https://dgozen-quotey.glitch.me/', 'quotey.jpg'],
  ['https://wealthvshappiness.netlify.app/', 'wealthspiral.gif'],
  ['https://editor.p5js.org/tim.olsson/present/5mlRyUuw-', 'whale.gif'],
  ['https://discus.netlify.app/', 'musicspiral.jpg'],
  ['https://robotquotes.netlify.app/', 'ai.jpg']
];
