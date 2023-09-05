import { products } from ".";
import { shops } from "../shops";

export const orderByPrice = (items) => {
  return items.sort((a, b) => a.price - b.price);
};

export const orderByDate = (items) => {
  return items.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
};

export const productsFindShop = (shops) => {
    let updatedProducts = [];
  products.forEach((product) => {
    let matchingShop = shops.find((shop) => shop.id === product.shopId);
    product.shop = matchingShop
    updatedProducts.push(product);
  });
  return updatedProducts
};

export const productFindShop = (id) => {
    let product = products.find(item => item.id == id)
    let matchingShop = shops.find((shop) => shop.id === product.shopId);
    product.shop = matchingShop
    return product
}