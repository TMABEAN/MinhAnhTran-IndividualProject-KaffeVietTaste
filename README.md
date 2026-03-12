### File Description

Live Website:
https://tmabean.github.io/MinhAnhTran-IndividualProject-KaffeVietTaste/

_________________

**index.html**  
Homepage containing the hero section and introduction.

**products.html**  
Menu page displaying all coffee products.

**product-detail.html**  
Individual product page with detailed information.

**cart.html**  
Shopping cart page displaying selected items and total price.

**style.css**  
Main stylesheet for layout, colors, typography, and responsive design.

**cart.js**  
JavaScript file handling cart logic, including:
- add to cart
- quantity updates
- localStorage management
- cart total calculation

---

# Cart Logic

The cart system works entirely on the client side.

The process is:

1. When a user clicks **Add to Cart**, the item is saved to `localStorage`.
2. Each item includes:
   - id
   - name
   - price
   - quantity
3. The cart page reads the stored data and dynamically renders the receipt.
4. Quantity changes update localStorage immediately.

---

# AI Assistance Disclosure

Some sections of the code were developed with assistance from AI tools.

AI was used to help generate initial code structures and improve certain UI layouts, such as:

- hero section styling
- cart layout adjustments
- responsive CSS refinements

All generated code was reviewed, modified, and integrated manually to fit the final project design.

Technical references used during development include:

- MDN Web Docs (CSS and JavaScript documentation)
- Course lecture materials

---
## Typography / Fonts

The website uses fonts from Google Fonts:

**Bebas Neue**  
Used for headings and titles to create a bold café-style visual identity.  
https://fonts.google.com/specimen/Bebas+Neue

**DM Sans**  
Used for body text to provide clean and readable typography.  
https://fonts.google.com/specimen/DM+Sans

Fonts are loaded using Google Fonts in the CSS file.
---

# Author

Minh Anh Tran | Viet Taste Kaffê Website
Front-end Fundamentals 
Graphic Design and Web Development 
