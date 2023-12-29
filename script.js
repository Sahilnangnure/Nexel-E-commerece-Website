let cartItems = [];
let cartTotal = 0;

function addToCart(productId, productName, productPrice) {
    const productIndex = cartItems.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
        // Product is already in the cart, update quantity
        cartItems[productIndex].quantity++;
    } else {
        // Add the product to the cart
        cartItems.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    // Update the cart display
    displayCart();
}

function displayCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear the previous content
    cartItemsElement.innerHTML = '';

    // Update the cart items list
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    // Update the total
    cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.dataset.name.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
function openWin() {
    window.open("cart.html");
}