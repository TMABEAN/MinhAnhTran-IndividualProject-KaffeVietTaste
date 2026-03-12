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
