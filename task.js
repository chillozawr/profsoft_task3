const products = [
	{
		orderId: 554,
		creationDate: "2017-03-25T10:35:20", // Saturday
		orderLines: [
			{productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.00}
		]
	},
	{
		orderId: 555,
		creationDate: "2017-03-25T11:24:20", // Saturday
		orderLines: [
			{productId: 9872, name: 'Pencil', quantity: 1, unitPrice: 3.00},
			{productId: 1746, name: 'Eraser', quantity: 1, unitPrice: 1.00}
		]
	},
	{
		orderId: 453,
		creationDate: "2017-03-27T14:53:12", // Monday
		orderLines: [
			{productId: 5723, name: 'Pen', quantity: 4, unitPrice: 4.22},
			{productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.12},
			{productId: 3433, name: 'Erasers Set', quantity: 1, unitPrice: 6.15}
		]
	},
	{
		orderId: 431,
		creationDate: "2017-03-20T12:15:02", // Monday
		orderLines: [
			{productId: 5723, name: 'Pen', quantity: 7, unitPrice: 4.22},
			{productId: 3433, name: 'Erasers Set', quantity: 2, unitPrice: 6.15}
		]
	},
	{
		orderId: 690,
		creationDate: "2017-03-26T11:14:00", // Sunday
		orderLines: [
			{productId: 9872, name: 'Pencil', quantity: 4, unitPrice: 3.12},
			{productId: 4098, name: 'Marker', quantity: 5, unitPrice: 4.50}
		]
	}
];

const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

const orderDays = new Map([
	['MONDAY', 0],
	['TUESDAY', 0],
	['WEDNESDAY', 0],
	['THURSDAY', 0],
	['FRIDAY', 0],
	['SATURDAY', 0],
	['SUNDAY', 0]
]);

const productCounter = id => {
	const productMap = new Map();
	products.forEach((item) => {
		const date = new Date(item.creationDate);
		const count = orderDays.get(days[date.getDay()]);
		item.orderLines.forEach(prdId => {
			if (prdId.productId === id)
				orderDays.set(days[date.getDay()],  count + prdId.quantity);
		})
	});
	return Object.fromEntries(orderDays.entries());
};

console.log(productCounter(4098));
