var drinksList = [
    {
        name: "Sangria",
        img: "",
        info: 'Combine wine, sparkling soda, and cut up fruit',
        price: 3.50
    }
]

var coldDrinks = document.querySelector("#drinks");
for (i=0; i < drinksList.length; i++){
    var menuCard = document.createElement('div');
    menuCard.classList.add("menuCard"); 
    
    var drinkName = document.createElement('h3');
    drinkName.textContent = drinksList[i].name;

    var image = document.createElement('div');
    var bgImage = drinksList[i].img;

    var info = document.createElement('p');
    info.textContent = drinksList[i].info;

    var price = document.createElement ('div');
    price.textContent = "glass $" + drinksList[i].price;

    var addBtn = document.createElement ('button');
    addBtn.classList.add('addBtn');
    addBtn.textContent = 'Add to cart'

    coldDrinks.appendChild(menuCard);
    menuCard.appendChild(drinkName);
    menuCard.appendChild(image);
    menuCard.appendChild(info);
    menuCard.appendChild(price);
    menuCard.appendChild(addBtn);
}

var coldTapasList = [
    {
        name: 'Rusian Salad',
        img: "",
        info: 'Perfect combination of potatoes, vegetables and mayonnaise',
        price: 2.50
    }
]

var coldTapas = document.querySelector('#coldTapas')
for (i=0; i < coldTapasList.length; i++){
    var menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');

    var coldTapaName = document.createElement('h3');
    coldTapaName.textContent = coldTapasList[i].name;

    var img = document.createElement('div');
    var bgImage = coldTapasList[i].img;

    var info = document.createElement('p');
    info.textContent = coldTapasList[i].info;

    var price = document.createElement('div');
    price.textContent = "Tapa $ " + coldTapasList[i].price;

    var addBtn = document.createElement('button');
    addBtn.classList.add('addBtn');
    addBtn.textContent = "add to cart";

    coldTapas.appendChild(menuCard);
    menuCard.appendChild(coldTapaName);
    menuCard.appendChild(img);
    menuCard.appendChild(info);
    menuCard.appendChild(price);
    menuCard.appendChild(addBtn);
}

var hotTapasList = [
    {
        name: 'Paella',
        img: "",
        info: 'Order up some of our famous Paella',
        price: 4.50
    }
]