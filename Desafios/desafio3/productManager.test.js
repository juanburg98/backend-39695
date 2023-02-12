import { ProductManager } from "./ProductManager.js";

async function main() {
  const productManager = new ProductManager("./data.json");
  await productManager.addProduct({
    title: "MacBook M1",
    description: "Mackbook M2",
    price: 2368,
    thumbnail: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
    code: 457982,
    stock: 1,
  });
  await productManager.addProduct({
    title: "MacBook M2",
    description: "Mackbook M2",
    price: 2368,
    thumbnail: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
    code: 457915,
    stock: 1,
  });
  await productManager.addProduct({
    title: "MacBook M3",
    description: "Mackbook M2",
    price: 2368,
    thumbnail: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
    code: 457956,
    stock: 1,
  });
  await productManager.addProduct({
    title: "MacBook M4",
    description: "Mackbook M2",
    price: 2368,
    thumbnail: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
    code: 459959,
    stock: 1,
  });

  await productManager.addProduct({
    title: "MacBook M5",
    description: "Mackbook M2",
    price: 2368,
    thumbnail: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
    code: 478553,
    stock: 1,
  });
  await productManager.addProduct({
    title: "MacBook M6",
    description: "Mackbook M2",
    price: 2368,
    thumbnail: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
    code: 455431,
    stock: 1,
  });
  await productManager.addProduct({
    title: "MacBook M7",
    description: "Mackbook M2",
    price: 2368,
    thumbnail: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
    code: 453354,
    stock: 1,
  });
  await productManager.addProduct({
    title: "MacBook M8",
    description: "Mackbook M2",
    price: 2368,
    thumbnail: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
    code: 452598,
    stock: 1,
  });
  await productManager.addProduct({
    title: "MacBook M9",
    description: "Mackbook M2",
    price: 2368,
    thumbnail: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
    code: 451115,
    stock: 1,
  });
  await productManager.addProduct({
    title: "MacBook M10",
    description: "Mackbook M2",
    price: 2368,
    thumbnail: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
    code: 4555555,
    stock: 1,
  });

/*     await productManager.updateProduct(0, {
       title: "MacBook M12",
       description: "Mackbook M12",
       price: 1789,
       thumbnail: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
       code: 457988,
       stock: 2,
     });

     console.log(await productManager.getProductById(1));
     await productManager.deleteProduct(1);
     await productManager.getProducts();
*/
}

main();
