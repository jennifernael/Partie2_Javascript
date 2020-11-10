// essaie avec ('containerPE1' + 'containerPE2' + 'containerPE3') mais pas fonctionné, pourquoi ?
var blocsPhotos = document.getElementById('containerP');

// addEventListener : évenement "d'écoute" (ici du scroll)
window.addEventListener('load', hide);
// Pour masquer :
function hide () {
    blocsPhotos.style.visibility = 'hidden';
}

window.addEventListener('scroll', show);
// Pour afficher (création function show car en haut j'ai écrit show):
function show () {
        var position = window.scrollY;

        // ici SI scroll atteind 300 alors les éléments apparaissent (en haut le scroll est à 0, à chaque descente les px augmentent)
        // 300 est par défaut compté en px
        if(position >= 300) {

        blocsPhotos.style.visibility = 'visible';
        }
    };