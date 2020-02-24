const kleineBoxen = document.querySelectorAll('.kleineBox');
const infoLightboxen = document.querySelectorAll('.infoLightbox');

// Nodelist in array doen.
const alleInfo = []

for (let i = 0; i < infoLightboxen.length; i++) {
  alleInfo.push(infoLightboxen[i]);
  // Verwijderen
  alleInfo[i].remove();
}

alleInfo.push(document.getElementById('loginBox'));
alleInfo[alleInfo.length - 1].remove();

function sluit() {
  document.getElementById('modaal').remove();
}

function maakModaal(i) {
  console.log("maak");
  //console.log(alleInfo[i]);
  let modaal = document.createElement('div');
  modaal.id = "modaal";
  let modaalInhoud = document.createElement('div');
  modaalInhoud.className = "modaalInhoud";
  modaalInhoud.innerHTML = alleInfo[i].innerHTML;
  modaal.appendChild(modaalInhoud);
  document.body.appendChild(modaal);
  let close = document.createElement('h1')
  close.className = "fas fa-times-circle sk";
  modaalInhoud.prepend(close);

  close.addEventListener('click', sluit)
  modaalInhoud.addEventListener('click', function(event) {
    event.stopPropagation();
  })
  modaal.addEventListener('click', sluit)
}

document.getElementById('login').addEventListener('click', function() {
  for (let i = 0; i < alleInfo.length; i++) {
    if (alleInfo[i].id == "loginBox") {
      maakModaal(i);
    }
  }
})

for (let i = 0; i < kleineBoxen.length; i++) {
  kleineBoxen[i].addEventListener('click', function() {
    maakModaal(i)
  })
}
