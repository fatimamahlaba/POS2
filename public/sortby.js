function sortName() {
    let direction = document.querySelector("#sortName").value;
  
    let sortedProducts = products.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    if (direction == "descending") sortedProducts.reverse();
    console.log(sortedProducts);
    readProducts(products);
  }
  
  // SORT BY PRICE
  
  function sortPrice() {
    let direction = document.querySelector("#sortPrice").value;
  
    let sortedProducts = products.sort((a, b) => a.price - b.price);
  
    console.log(sortedProducts);
  
    if (direction == "descending") sortedProducts.reverse();
    readProducts(sortedProducts);
  }
  
  // SORT BY CATEGORY
function sortCategory() {
    let category = document.querySelector("#sortCategory").value;
  
    if (category == "All") {
      return readProducts(products);
    }
  
    let foundProducts = products.filter((product) => {
      return product.category == category;
    });
  
    readProducts(foundProducts);
    console.log(foundProducts);
  }