/* =========================================
Read cart data from localStorage
========================================= */
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
} // If nothing exists yet, return empty array

