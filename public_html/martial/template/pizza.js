$(function() {
    //---------------------------------------------------------------------
    // Cartes des Pizza
    //---------------------------------------------------------------------

    // Initialisation du tableau ListePizza
    var ListePizza = new Array();
    // affectation des valeurs du tableau ListePizza
    ListePizza['PLR'] = { Nom: 'La Reine', Description: 'jambon, champignons et mozzarella', Prix: 10 };
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

    // fonction de concatenation du code HTML
    function AfficherPizza(vRef, vPizza) {
        var itemChaine = '<div class="ItemPizza" id="c' + vRef + '">' +
            '<h2>' + vPizza.Nom + '</h2>' +
            '<img class="ImgPiz" src="images/' + vRef + '.jpg">' +
            '<h3>DESCRIPTION</h3>' +
            '<p>' + vPizza.Description + '</p>' +
            '<div class="ItemPizzaTarif">' +
            '<h3>Prix: ' + vPizza.Prix + ' Euros</h3>' +
            '<button class="BtnCarte" id="' + vRef + '">Ajouter</button>' +
            '</div>' +
            '</div>';
        return itemChaine;
    }

    // fonction qui gerer la carte des pizzas
    function ListerPizza() {
        var lChaine = '';
        for (var Ref in ListePizza) {
            var Pizza = ListePizza[Ref];
            lChaine += AfficherPizza(Ref, Pizza);
        }

        //console.info(lChaine);
        $("div#cCartePizza").html(lChaine);
    }

    // affichage de des vignette de pizza
    ListerPizza();

    //---------------------------------------------------------------------
    // FORMULAIRES
    //---------------------------------------------------------------------

    // intialise caché les container Adresse et livraison a caché

    $('div#AdrLiv').hide();
    $('div#PayCard').hide();

    //++ Test si un radion est cliqué
    // l'objet prends le doublon du radion et on test si le radio est selectionné ?
    //

    $('input:radio[name="Livraison"]').change(function() {
        if ($(this).val() == 'A Domicile') { $('div#AdrLiv').show();} else
        { $('div#AdrLiv').hide(); } } );
    $('input:radio[name="Pay"]').change(function () {
        if ($(this).val() == 'En ligne') { $('div#PayCard').show(); } else { $('div#PayCard').hide(); }
    });   

    // ----------------------------------------------
    // Panier
    // ----------------------------------------------

    $('button').click(function () {
        var EltId = $(this).attr('id');
        alert(EltId);
    });

    })
