// URL de la API pública
const API_URL = 'https://fakestoreapi.com/products';

// Referencias a los elementos del DOM
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const reloadBtn = document.getElementById('reload-btn');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');

let allProducts = [];

/**
 * Renderiza la lista de productos en el contenedor
 * @param {Array} products - Lista de productos a renderizar
 */
function displayProducts(products) {
  productsGrid.innerHTML = '';

  if (products.length === 0) {
    productsGrid.innerHTML = '<p class="status-msg">No se encontraron productos.</p>';
    return;
  }

  products.forEach((product) => {
    const card = document.createElement('article');
    card.classList.add('product-card');

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
    `;

    productsGrid.appendChild(card);
  });
}

/**
 * Realiza la petición fetch a la API pública
 */
async function fetchProducts() {
  loadingElement.classList.remove('hidden');
  errorElement.classList.add('hidden');
  productsGrid.innerHTML = '';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    allProducts = await response.json();
    displayProducts(allProducts);
  } catch (err) {
    errorElement.textContent = `Hubo un problema al cargar los datos: ${err.message}`;
    errorElement.classList.remove('hidden');
  } finally {
    loadingElement.classList.add('hidden');
  }
}

// Evento de búsqueda por texto (filtro dinámico)
searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase().trim();
  const filtered = allProducts.filter((item) =>
    item.title.toLowerCase().includes(query)
  );
  displayProducts(filtered);
});

// Evento de botón de recarga
reloadBtn.addEventListener('click', () => {
  searchInput.value = '';
  fetchProducts();
});

// Carga inicial
fetchProducts();
