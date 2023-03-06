const products = [
    {
      id: 1,
      name: "Product 1",
      image: "https://via.placeholder.com/200x200",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://via.placeholder.com/200x200",
      price: 20,
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/200x200",
      price: 30,
    },
    {
      id: 4,
      name: "Product 4",
      image: "https://via.placeholder.com/200x200",
      price: 40,
    },
    {
      id: 5,
      name: "Product 5",
      image: "https://via.placeholder.com/200x200",
      price: 50,
    },
    {
      id: 6,
      name: "Product 6",
      image: "https://via.placeholder.com/200x200",
      price: 60,
    },
  ];
  
  const productsPerPage = 3;
  let currentPage = 1;
  
  function renderProducts(products) {
    const productList = document.querySelector(".product-list");
    productList.innerHTML = "";
  
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
  
    currentProducts.forEach((product) => {
      const productItem = document.createElement("li");
      productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
      `;
      productList.appendChild(productItem);
    });
  }
  
  function renderPagination(products) {
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";
  
    const totalPages = Math.ceil(products.length / productsPerPage);
  
    for (let i = 1;i <= totalPages; i++) {
  const pageButton = document.createElement("button");
  pageButton.textContent = i;
  if (i === currentPage) {
  pageButton.disabled = true;
  }
  pageButton.addEventListener("click", () => {
  currentPage = i;
  renderProducts(products);
  renderPagination(products);
  });
  pagination.appendChild(pageButton);
  }
  }
  
  renderProducts(products);
  renderPagination(products);
  