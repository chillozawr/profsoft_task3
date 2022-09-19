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

const productCounter = (productArray, dayMap) => {
	productArray.forEach((item) => {
		const date = new Date(item.creationDate);
		const count = dayMap.get(days[date.getDay()]);
		dayMap.set(days[date.getDay()],  count + item.orderLines.length);
	});
	return Object.fromEntries(dayMap.entries());
};

console.log(productCounter(products, orderDays));
