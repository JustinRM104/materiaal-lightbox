const modaalObj = {
    // Eigenschappen
    alleInformatie : document.querySelectorAll('.small'),
    alleThumbs     : document.querySelectorAll('.big'),
    alleInhoud     : [],


    // Methods
    verwijderModaal    : function() {
        document.getElementById('modaal').remove();
    },
    makeModaal: function(num) {
    let modaal = document.createElement('div');
    modaal.className = 'modaal';
    modaal.id = 'modaal';
    modaal.addEventListener('click', this.verwijderModaal);
    // sluitknop regelen
    let sluit = document.createElement('i');
    sluit.className = 'fas fa-times-circle sluit-knop';
    sluit.addEventListener('click', this.verwijderModaal);
    let modaalContent = document.createElement('div');
    modaalContent.className = 'modaalContent';
    modaalContent.innerHTML = alleThumbs[num].innerHTML;
    modaalContent.addEventListener('click', function(e){
        e.stopPropagation();
    })
    modaalContent.prepend(makeCloseButton);
    modaal.append(modaalContent);
    document.body.append(modaal);
    },

    initialize = function() {
        for(let i = 0; i < this.alleInformatie.length; i++) {
            this.alleInhoud.push(toDelete[i]);
            // Remove element from DOM //
            this.alleThumbs[i].remove();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        }
        for(let i = 0; i < this.alleThumbs.length; i++) {
            this.alleThumbs[i].addEventListener('click', function() {
                this.makemodaal(i)
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        }
    }
}



