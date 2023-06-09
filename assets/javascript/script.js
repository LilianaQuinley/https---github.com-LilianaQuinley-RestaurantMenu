var drinksList = [
    {
        name: "Sangria",
        img: "https://drive.google.com/uc?export=view&id=1WGw77Cj0BiaETpJO7tf-Bt4dUlKvWfrn",
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
    image.classList.add("menuImg");
    var bgImage = drinksList[i].img;
    image.style.backgroundImage = `url(${bgImage})`

    var info = document.createElement('p');
    info.textContent = drinksList[i].info;

    var price = document.createElement ('div');
    price.classList.add('price');
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
    addBtn.addEventListener('click', addToCartDrinks);
}

var countDrinks = 0;
var drinksCart = document.querySelector('#drinksCart');

function addToCartDrinks (){
    countDrinks++;
    if(countDrinks === 1){
        drinksCart.textContent = countDrinks + ' Drink';
    }else {
        drinksCart.textContent = countDrinks + ' Drinks';
    }
}

var coldTapasList = [
    {
        name: 'Rusian Salad',
        img: "https://drive.google.com/uc?export=view&id=196L9zu-oEKzI9KGUzKe0Cis36joJxsf8",
        info: 'Enjoy this Salad of potatoes and vegetables in a mayonnaise dressing',
        price: 2.50
    }, 
    {
        name: 'Olives',
        img: "https://drive.google.com/uc?export=view&id=1Nr4gjhLXb272EgD4T6S0wp65R1RA8Mz5",
        info: 'Green Olives Spanish Tapas with soft cheese',
        price: 3.0
        },    
]

var coldTapas = document.querySelector('#coldTapas')
for (i=0; i < coldTapasList.length; i++){
    var menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');

    var coldTapaName = document.createElement('h3');
    coldTapaName.textContent = coldTapasList[i].name;

    var img = document.createElement('div');
    img.classList.add('menuImg')
    var bgImage = coldTapasList[i].img;
    img.style.backgroundImage = `url(${bgImage})`;

    var info = document.createElement('p');
    info.textContent = coldTapasList[i].info;

    var price = document.createElement('div');
    price.classList.add('price');
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
    addBtn.addEventListener('click', addToCartColdT)
}

var countColdTapas = 0;
var coldTCart = document.querySelector("#coldTapasCart");

function addToCartColdT (){
    countColdTapas++;
    if (countColdTapas === 1){
        coldTCart.textContent = countColdTapas + " Tapa"
    }else {
        coldTCart.textContent = countColdTapas+ " Tapas"
    }
}


var hotTapasList = [
    {
        name: 'Paella',
        image: "https://drive.google.com/uc?export=view&id=1Knf7dwy13JiBYcu8zXU0uXSKJglwlQOh",
        info: "Order up some of our famous Paella!",
        price: 4.50
    },
    {
		name: "Meatballs",
		image:
			"https://drive.google.com/uc?export=view&id=1rLIIavW91VKIAe_B9lmXvMD1UTsM9LAs",
		info: "Served with french fries",
		price: 1.5
	},
	{
		name: "Lentil soup",
		image:
			"https://drive.google.com/uc?export=view&id=1U4XT3RAlgbCZbfkXZP6H4sd0LwM2_WoY",
		info: "Warm up with steaming bowl of lentil soup,",
		price: 2.5
	}
]

var hotTapas = document.querySelector('#hotTapas')
for (i=0; i < hotTapasList.length; i++){
    var menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');

    var hotTapaName = document.createElement('h3');
    hotTapaName.textContent = hotTapasList[i].name;

    var image = document.createElement('div');
    image.classList.add('menuImg');
    var bgImage = hotTapasList[i].image;
    image.style.backgroundImage = `url(${bgImage})`;

    var info = document.createElement('p');
    info.textContent = hotTapasList[i].info;

    var price = document.createElement('div');
    price.classList.add('price');
    price.textContent = "Tapa $ " + hotTapasList[i].price;

    var addBtn = document.createElement('button');
    addBtn.classList.add('addBtn');
    addBtn.textContent = "add to cart";

    hotTapas.appendChild(menuCard);
    menuCard.appendChild(hotTapaName);
    menuCard.appendChild(image);
    menuCard.appendChild(info);
    menuCard.appendChild(price);
    menuCard.appendChild(addBtn);
    addBtn.addEventListener('click', addToCartHotT)
}

var countHotTapas = 0;
var hotTCart = document.querySelector('#hotTapasCart');

function addToCartHotT (){
    countHotTapas++;
    if(countHotTapas === 1){
        hotTCart.textContent = countHotTapas + " Tapa";
    }else {
        hotTCart.textContent = countHotTapas + " Tapas"
    }
}

// Function ClearCart 

var clearHotTapas = document.querySelector('#hotTapasCart');
var clearColdTapas = document.querySelector('#coldTapasCart');
var clearDrinks = document.querySelector('#drinksCart');
var clearBtn = document.querySelector('.clearCart')

function clearCart (){
    countHotTapas = 0;
    countColdTapas = 0;
    countDrinks = 0;
    clearHotTapas.textContent = countHotTapas;
    clearColdTapas.textContent = countColdTapas;
    clearDrinks.textContent = countDrinks;  
    console.log(clearCart);
}
clearBtn.addEventListener('click', clearCart);


//function submitHandler subscrition  
var email = document.querySelector(".email")
var subscForm = document.querySelector('.subscribeForm');
var input = document.querySelector('input');
var firstNameInput = document.querySelector('#firstNameInput');
var lastNameInput = document.querySelector('#lastNameInput');
var emailInput = document.querySelector('#emailInput');
var signUpBtn = document.querySelector('#signUpBtn')
var footer = document.querySelector(".footer")

function submitEmail (){
    if(
        firstNameInput.value === "" &&
        lastNameInput.value === "" &&
        emailInput.value === ""
    ){
        var confirmMsg = document.createElement('p');
            confirmMsg.classList.add('p-msgFail');
            confirmMsg.textContent = 
            'You did not fill out your Name, Last Name or Email, please try again';
            subscForm.remove();
            footer.remove();
            email.appendChild(confirmMsg)
            console.log(confirmMsg)
    } else if (
        firstNameInput.value === ""
    ){
        var confirmMsg = document.createElement('p');
            confirmMsg.classList.add("p-msgFail");
            confirmMsg.textContent = 
            "Be sure to fill out your First Name and try again";
            subscForm.remove();
            footer.remove();
            email.appendChild(confirmMsg)
    } else if(
        lastNameInput.value === ""
    ){
        var confirmMsg = document.createElement('p');
            confirmMsg.classList.add('p-msgFail');
            confirmMsg.textContent = 
            'Be sure to fill out your Last Name and try again';
            subscForm.remove();
            footer.remove();
            email.appendChild(confirmMsg)
    } else if (
        emailInput.value === ""
    ){
        var confirmMsg = document.createElement('p');
            confirmMsg.classList.add('p-msgFail');
            confirmMsg.textContent = 
            'Be sure to fill out your Email address and try again';
            subscForm.remove();
            footer.remove();
            email.appendChild(confirmMsg)
    }  else {
        var confirmMsg = document.createElement('p');
            confirmMsg.classList.add('p-msgSucess')
            confirmMsg.textContent = 'Thanks for signing up! watch your email for delicious tidings soon'
            input.value
            subscForm.remove();
            footer.remove();
            email.appendChild(confirmMsg)
    }    
}
signUpBtn.addEventListener('click', submitEmail)

// **first function created without alerts ** 
// function submitEmailForm (){
//     var confirmMsg = document.createElement('p');
//     confirmMsg.classList.add('p-msgSucess')
//     confirmMsg.textContent = 'Thanks for signing up! watch your email for delicious tidings soon'
//     input.value;
//     subscForm.remove();
//     footer.remove();
//     email.appendChild(confirmMsg)
//     console.log(confirmMsg);
// }
// signUpBtn.addEventListener('click', submitEmailForm)


