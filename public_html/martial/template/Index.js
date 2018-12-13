//---------------------------------------------------------------------
// Cartes des Pizza
//---------------------------------------------------------------------

// Initialisation du tableau ListePizza
var ListePizza  = new Array();
// affectation des valeurs du tableau ListePizza
ListePizza['PLR'] = { Nom: 'La Reine', Description: 'jambon, champignons et mozzarella', Prix: 10};
ListePizza['P4F'] = { Nom: 'La Quatre Fromages', Description: 'Sauce tomate (ou crème fraîche légère), mozzarella, chèvre, Emmental, Fourme d’Ambert A.O.P.', Prix: 11 };
ListePizza['PCN'] = { Nom: 'La Cannibale', Description: 'jambon, champignons et mozzarella', Prix: 12 };
ListePizza['PCB'] = { Nom: 'Chick\'n Bacon BBQ', Description: 'Sauce barbecue, mozzarella, bacon, poulet rôti, oignons, tomates fraîches, oignons croustillants', Prix: 13 };
ListePizza['PCJ'] = { Nom: 'La Classique Jambon', Description: 'Jambon, champignons et mozzarella', Prix: 14 };
ListePizza['PLF'] = { Nom: 'La Forrestiere', Description: 'Sauce tomate (ou crème fraîche légère), mozzarella, chèvre, Emmental, Fourme d’Ambert A.O.P.', Prix: 15 };
ListePizza['PHB'] = { Nom: 'Hot Bacon BBQ', Description: 'Sauce barbecue, mozzarella, poulet rôti, merguez, boulettes de boeuf assaisonnées.', Prix: 16 };
ListePizza['PIN'] = { Nom: 'Indienne', Description: 'Sauce barbecue, mozzarella, bacon, poulet rôti, oignons, tomates fraîches, oignons croustillants', Prix: 17 };
ListePizza['POP'] = { Nom: 'Originale Pepperoni', Description: 'Sauce tomate, mozzarella, saucisson pepperoni.', Prix: 18 };
ListePizza['PPP'] = { Nom: 'Peppina', Description: 'Sauce tomate, mozzarella, champignons, oignons, poivrons mélangés, olives noires, tomates fraîches, origan.', Prix: 19 };
ListePizza['PSV'] = { Nom: 'Savoyarde', Description: 'Crème fraîche légère, mozzarella, lardons fumés, pommes de terre sautées, Reblochon A.O.P. de Savoie, origan.', Prix: 20 };
ListePizza['PSC'] = { Nom: 'Steak & Cheese', Description: 'Sauce tomate, mozzarella, boulettes de boeuf assaisonnées, tomates fraîches, origan.', Prix: 21 };

//console.info(ListePizza);

// fonction qui gerer la carte des pizzas
function ListerPizza() {
    var lChaine='';
    for(var Ref in ListePizza) {
        var Pizza=ListePizza[Ref];
        lChaine+=AfficherPizza(Ref,Pizza);
    }
    document.getElementById("cCartePizza").innerHTML=lChaine;
}

// fonction de concatenation du code HTML
function AfficherPizza(vRef,vPizza) {
    var itemChaine = '<div class="ItemPizza" id="c' + vRef + '">'+
                        '<h2>' + vPizza.Nom + '</h2>'+
                        '<img class="ImgPiz" src="images/'+ vRef +'.jpg">' +
                        '<h3>DESCRIPTION</h3>' +
                        '<p>' + vPizza.Description + '</p>' +
                        '<div class="ItemPizzaTarif">'+
                            '<h3>Prix: ' + vPizza.Prix +' Euros</h3>' +
                            '<button class="BtnCarte" id="'+vRef+'">Ajouter</button>' +
                        '</div>'+
                     '</div>';
    return itemChaine;  
}

// affiche la liste des pizza au chargement
document.getElementById("corps").onload=function() { ListerPizza(); };

//---------------------------------------------------------------------
// FORMULAIRES
//---------------------------------------------------------------------

// fonctions qui cache\affiche les champs adresse
function CacherLivraison() {
    document.getElementById('AdrLiv').style.display = "none";
}

function AfficherLivraison() {
    document.getElementById('AdrLiv').style.display = "block";
}

// function qui cache\affiche les champs carte credit
function CacherCarteBleu() {
    document.getElementById('PayCard').style.display = "none";        
}

function AfficherCartebleu() {
    document.getElementById('PayCard').style.display = "block";
}
// **
// main traitement formulaires 
// **
// intialisation de la page

document.getElementById('AdrLiv').style.display = "none";
document.getElementById('PayCard').style.display = "none";

// actualisation de la page
if (document.getElementById("Domicile").checked) { 
    AfficherLivraison();
}
if (document.getElementById("Ligne").checked) { 
    AfficherCartebleu();
}

// evenement qui cache les champs adresse
document.getElementById("Magasin").onclick = function() { CacherLivraison() };
document.getElementById("Domicile").onclick= function() { AfficherLivraison()};

// evenement qui cache les champs carte de credit
document.getElementById("Livreur").onclick = function () { CacherCarteBleu() };
document.getElementById("Ligne").onclick = function () { AfficherCartebleu() };

// ----------------------------------------------
// Panier
// ----------------------------------------------

// ** Generation du tableau


// initialise le panier
// var Panier=[];
// var Ligne={};

// var bCarte = document.getElementById('ContainerCartePizza');
//     bCarte.addEventListener('click', function(IdB) { console.info(IdB.target);}) 

// function IdBoutton() {
    
    
// }


// function AjouterPanier(vRef,vPizza) {
//  if (Panier.length == 0 && Panier.indexOf(vRef) == -1) { 
//      Panier.push(vRef);
//      Panier.push(vPizza);
//  } else {

//  }
    
// }

// document.getElementById()

document.getElementsByClassName('BtnCarte').onclick = function () {
    var elt = (this);
    var idElt = elt.getAttribute('id');
    console.info(idElt);
};

/* document.getElementById('cCartePizza').addEventListener('click',function(evt){ console.info(evt.srcElement);});
var test = document.getElementsByTagName('button')
console.info(test); */