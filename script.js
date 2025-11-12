console.log("script started");

let products = [
    {
        "price": 20,
        "description": "This is the description",
        "id": 0,
        "imageUrl": "https://i.postimg.cc/T1dhhD9Y/IMG-6140.jpg"
    },
    {
        "price": 20,
        "description": "This is the second description",
        "id": 2,
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
    productDiv.appendChild(price);
    productDiv.appendChild(image);
    productDiv.appendChild(description);
}
loadProducts();



