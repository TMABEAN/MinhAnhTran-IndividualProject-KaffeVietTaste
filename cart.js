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
