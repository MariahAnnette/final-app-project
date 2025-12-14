console.log("script started");

let products = [
    {
        "price": 20,
        "description": "Purple Rabbit",
        "id": 0,
        "imageUrl": "https://i.postimg.cc/T1dhhD9Y/IMG-6140.jpg"
    },
    {
        "price": 30,
        "description": "Alien Girl",
        "id": 1,
        "imageUrl": "https://i.postimg.cc/nLxRhcc1/IMG-1842.jpg"
    }
]

function loadProducts() {
    for(let i=0; i < products.length; i++){
        createProduct(i);
    }

}

function createProduct(index) {
    let productList = document.getElementById("productList");
    let product = products[index];
    let productDiv = document.createElement("div");
    let price = document.createElement("p");
    price.innerText = "$" + product.price;
    let image = document.createElement("img");
    image.src = product.imageUrl;
    let description = document.createElement("p");
    description.innerText = product.description;
    let buyButton = document.createElement("button");
    buyButton.innerText = "buy the art above!";
    buyButton.id = "button" + product.id;
    buyButton.addEventListener("click",addToCart)
    productDiv.appendChild(price);
    productDiv.appendChild(image);
    productDiv.appendChild(description);
    productDiv.appendChild(buyButton);
    productList.appendChild(productDiv);
}
loadProducts();

function goToCart() {
   cartOverlay=document.getElementById("cartOverlay");
   cartOverlay.style.display=("flex");
}
function exitCart() {
   cartOverlay=document.getElementById("cartOverlay");
   cartOverlay.style.display=("none");
}

function addToCart (event) {
    //change button text
    let buttonId= event.target.id;
    let idNum = buttonId.substring(6);
    document.getElementById("button"+idNum).innerText="added to cart";
    //add item to cart screen
    let viewCart=document.getElementById("viewCart");
    let description = document.createElement("p");
    description.innerText = products[idNum].description;
    let image= document.createElement("img");
    image.style.height="100px";
    image.style.width="100px";
    let price = document.createElement("p");
    price.innerText = "$" + products[idNum].price;
    image.src = products[idNum].imageUrl;
    viewCart.appendChild(description);
    viewCart.appendChild(image);
    viewCart.appendChild(price);

}

function calculateTotal(){
    
}

