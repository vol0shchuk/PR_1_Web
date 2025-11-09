let products = [
    { productId: 1, name: "Ноутбук", price: 1200 },
    { productId: 2, name: "Смартфон", price: 800 },
    { productId: 3, name: "Навушники", price: 150 },
    { productId: 4, name: "Монітор", price: 300 }
];


let purchases = [
    { purchaseId: 101, productId: 1, quantity: 2 },
    { purchaseId: 102, productId: 2, quantity: 1 },
    { purchaseId: 103, productId: 3, quantity: 4 },
    { purchaseId: 104, productId: 1, quantity: 1 },
    { purchaseId: 105, productId: 4, quantity: 3 }
];


function getTotalSales(products, purchases) {
    return purchases.reduce((result, purchase) => {
        
        let product = products.find(p => p.productId === purchase.productId);
        
        if (product) {
            let income = product.price * purchase.quantity;
            
            if (result[product.name]) {
                result[product.name] += income;
            } else {
                result[product.name] = income;
            }
        }

        return result;
    }, {});
}

console.log("Загальна сума:", getTotalSales(products, purchases));
