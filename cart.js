/* ======================================================
   CART MANAGEMENT SCRIPT
  
   References:
   https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
   https://javascript.info/localstorage
   https://www.w3schools.com/js/js_api_web_storage.asp

   Notes:
   Some code logic and structure were developed with the assistance of AI tools (ChatGPT / Claude) and adapted,
   reviewed, and modified for this project.
====================================================== */

/* =========================================
Read cart data from localStorage
========================================= */
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
} // If nothing exists yet, return empty array

/* =========================================
   GET QUANTITY OF ONE ITEM
========================================= */
function getItemQuantity(id) {
  const cart = getCart(); // Get full cart
  const item = cart.find(product => product.id === id); // Find the product with matching id
  return item ? item.quantity : 0; 
}

/* =========================================
    SAVE CART into localStorage
========================================= */
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* =========================================
   ADD PRODUCT (DEFAULT +1)
========================================= */

function addToCart(id, name, price) {
  let cart = getCart(); // Get current cart

    // Check if product already exists
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) { // If already in cart → increase quantity
    existingItem.quantity += 1;
  } else {
    cart.push({ // If not in cart → create new item
      id: id,
      name: name,
      price: price,
      quantity: 1
    });
  }
  // Save updated cart
  saveCart(cart);
  updateCartCount(); // Update cart number in navigation
}

/* =========================================
   ADD PRODUCT WITH CUSTOM QUANTITY
========================================= */

function addToCartWithQty(id, name, price, quantity) {
  let cart = getCart();

  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += quantity; 
  } else {
    cart.push({
      id: id,
      name: name,
      price: price,
      quantity: quantity
    });
  }

  saveCart(cart);
  updateCartCount();
}

/* =========================================
   INCREASE ITEM QUANTITY
========================================= */

function increaseItem(id) {
  let cart = getCart();

  const item = cart.find(product => product.id === id);

  if (item) {
    item.quantity += 1;
  }

  saveCart(cart);
}

/* =========================================
   DECREASE ITEM QUANTITY
========================================= */

function decreaseItem(id) {
  let cart = getCart();

  const item = cart.find(product => product.id === id);

  if (item) {
    item.quantity -= 1;

    if (item.quantity <= 0) { // If quantity reaches 0 → remove item
      cart = cart.filter(product => product.id !== id);
    }
  }

  saveCart(cart);
}

/* =========================================
   REMOVE BUTTON
========================================= */
function removeItem(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  updateCartCount();   // Update cart count in navigation
}

/* =========================================
   CLEAR ENTIRE CART
========================================= */

function clearCart() {
  localStorage.removeItem("cart");
  updateCartCount();
}

/* =========================================
   CALCULATE TOTAL PRICE
========================================= */
function getCartTotal() {
  const cart = getCart();
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  return total;
}

/* =========================================
nav cart number
========================================= */

function getCartCount() {
  const cart = getCart();
  let count = 0;

  cart.forEach(item => {
    count += item.quantity;
  });

  return count;
}

// Update cart count in navigation
function updateCartCount() {
  const cartCountElements = document.querySelectorAll(".cart-count");
  const count = getCartCount();

  cartCountElements.forEach(element => {
    element.textContent = count;
  });
}

// Checkout function (for demonstration purposes)
function checkout() {
  alert("Thank you for your order!");
  clearCart();
  renderCart();
}

// Src: Claude.ai
document.addEventListener("DOMContentLoaded", updateCartCount);
