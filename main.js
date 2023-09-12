let items1 = [
  {
    image:
      "data:image/jpeg;base64,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",
    name: "Apple iPhone 14 (128 GB) - Purple  No cost Dedit Card",
    categories: "Moblie Electronic",
    price: "17000",
    disPrice: "12990",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    name: "Microsoft - Surface Laptop 4-13.5 Touch-Screen Windows 10 Pro",
    categories: "Electronic",
    price: "65000",
    disPrice: "2800",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDx9zX45TsV7MIvHPmW0mZ4ayMbWogEIx9ZA&usqp=CAU",
    name: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Headphones with 42H Playtime",
    categories: "Electronic",
    price: "1100",
    disPrice: "100",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    name: "Microsoft Surface Laptop 4 AMD Ryzen 5 4680U 13.5 inches Touchscreen Laptop",
    categories: "Electronic",
    price: "75000 ",
    disPrice: "5400",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2Q1dBJUrvYRW9mMX26lboclYij0oZeuWuQ&usqp=CAU",
    name: "OnePlus 9 RT EMI | 8-128GB | No cost Dedit Card",
    categories: "Electronic",
    price: "21000",
    disPrice: "190",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    name: "Sony WH-CH720N, Wireless Over-Ear Active Noise",
    categories: "Electronic",
    price: "2000",
    disPrice: "25500",
  },
];
let t1 = document.getElementById("data");
let t2 = document.getElementById("datasearch");

for (let i = 0; i < items1.length; i++) {
  console.log(1);
  let discount =
    ((items1[i].price - items1[i].disPrice) / items1[i].price) * 100;
  discount = discount.toFixed(0);

  t1.innerHTML += `
  <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
    <div class="card mx-auto">
        <img src="${items1[i].image}" class="card-img-top img-fluid" alt="Card Image">
        <div class="card-body d-flex flex-column">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2">
                    <a href="#" class="text-default mb-2" data-abc="true">${items1[i].name}</a>
                </h6>
                <a href="#" class="text-muted" data-abc="true">${items1[i].categories}</a>
            </div>
            <h4 class="mb-0 font-size-100 font-weight-semibold">MRP: ₹<s>${items1[i].price}</s>
                <span class="discount">${discount}% OFF</span>
            </h4>
            <h3 class="mb-1 font-weight-semibold">₹${items1[i].disPrice}</h3>
            <button type="button" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>

         

function searchProduct() {
  // Get the search input value
  let searchValue = document.getElementById("searchBox").value.toLowerCase();

  // Filter items based on the search value
  let filteredProducts = items1.filter((item) => {
    const itemName = item.name.toLowerCase();
    const itemType = item.categories.toLowerCase();

    return itemName.includes(searchValue) || itemType.includes(searchValue);
  });

  // Get the container element where you want to display the results
  let resultsContainer = document.getElementById("datasearch");

  // Clear the previous results
  resultsContainer.innerHTML = "";

  // Iterate through the filtered products and generate HTML for each
  filteredProducts.forEach((product) => {
    // Calculate the discount percentage
    let discountPercentage =
      ((product.mainPrice - product.discountPrice) / product.mainPrice) * 100;
    discountPercentage = discountPercentage.toFixed(0);

    // Create a new product card element
    let productCard = document.createElement("div");
    productCard.className = "col-lg-4 mb-3 d-flex align-items-stretch";
    productCard.innerHTML = `
      <div class="card mx-auto" style="width:20rem;">
        <img src="${product.image}" style="width:30%;height:35%" class="card-img-top img-fluid mx-auto" alt="Card Image">
        <div class="card-body d-flex flex-column">
          <div class="mb-3">
            <h6 class="font-weight-semibold mb-2">
              <a href="#" class="text-default mb-2" data-abc="true">${product.name}</a>
            </h6>
            <a href="#" class="text-muted" data-abc="true">${product.type}</a>
          </div>
          <h4 class="mb-0 font-weight-semibold">MRP: ₹<s>${product.price}</s>
            <span class="discount">${discountPercentage}% OFF</span>
          </h4>
          <h3 class="mb-1 font-weight-semibold">₹${product.disPrice}</h3>
          <div>
            <i class="fa fa-star star"></i>
            <i class="fa fa-star star"></i>
            <i class="fa fa-star star"></i>
            <i class="fa fa-star star"></i>
          </div>
          <div class="text-muted mb-3">34 reviews</div>
          <button type="button" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
      </div>
    `;

    // Append the product card to the results container
    resultsContainer.appendChild(productCard);
  });

  // If the search input is empty, clear the results
  if (searchValue === "") {
    resultsContainer.innerHTML = "";
  }
}
