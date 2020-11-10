//Ajout d'un écouteur d'évènement qui appelle la fonction hideBlocks (cacher blocs) au chargement (load) de la fenêtre
window.addEventListener('load', hideBlocks);

//Déclaration de la fonction hideBlocks permettant de faire disparaitre les blocs
function hideBlocks(){

  //Attribution de la valeur none à la propriété css display des éléments ciblés par leur id
  document.getElementById('blocLine').style.display = 'none';
  // on peut aussi les cibler 1 par 1 (élémént par élément)
  // document.getElementById('block1').style.display = 'none';
  // document.getElementById('block2').style.display = 'none';
  // document.getElementById('block3').style.display = 'none';
};

//Ajout d'un écouteur d'évènement qui appelle la fonction showBlocks au scroll sur la fenêtre
window.addEventListener('scroll', showBlocks);

//Déclaration de la fonction showBlocks permettant de faire apparaître les blocs
function showBlocks(){

  //Déclaration d'une variable scrollValue à laquelle on attribue la valeur du scroll vertical (scrollY) sur la fenêtre
  var scrollValue = window.scrollY;

  //Valeur propre à l'écran (cas par cas)
  if(scrollValue > 150){

    //Attribution de la valeur block à la propriété css display des éléments ciblés par leur id
    document.getElementById('blocLine').style.display = 'block';
      // on peut aussi les cibler 1 par 1 (élémént par élément)
    // document.getElementById('block1').style.display = 'block';
    // document.getElementById('block2').style.display = 'block';
    // document.getElementById('block3').style.display = 'block';
  }
};
