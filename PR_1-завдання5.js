let orders = [
    {
        orderId: 1,
        customer: { name: "Андрій", email: "andriy.koval@gmail.com" },
        items: ["Ноутбук", "Мишка"],
        total: 1200
    },
    {
        orderId: 2,
        customer: { name: "Марія", email: "maria.shulga@gmail.com" },
        items: ["Смартфон"],
        total: 800
    },
    {
        orderId: 3,
        customer: { name: "Андрій", email: "andriy.koval@gmail.com" },
        items: ["Планшет", "Навушники"],
        total: 600
    },
    {
        orderId: 4,
        customer: { name: "Ігор", email: "ihor.stepanets@gmail.com" },
        items: ["Монітор"],
        total: 300
    }
];

function getTotalSpentByCustomer(orders, customerName) {
    return orders
        .filter(order => order.customer.name === customerName)
        .reduce((acc, order) => acc + order.total, 0);
}

console.log("Сума витрат Андрія:", getTotalSpentByCustomer(orders, "Андрій"));
console.log("Сума витрат Марії:", getTotalSpentByCustomer(orders, "Марія"));
console.log("Сума витрат Ігоря:", getTotalSpentByCustomer(orders, "Ігор"));
