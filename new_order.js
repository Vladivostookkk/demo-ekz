const newOrderButton = document.querySelector('#new_order_button');

newOrderButton.addEventListener('click', (event) => {
	event.preventDefault();
	const product = document.querySelector('#product');
	const selectedProduct = product.options[product.selectedIndex].value;
	const quantity = document.querySelector('#quantity').value;
	const deliveryAddress = document.querySelector('#delivery-address').value;

	const newOrder = {
		selectedProduct,
		quantity,
		deliveryAddress,
	};

	console.log(newOrder);

	addToLocalStorage(newOrder);
})

// Функция добавления продукта в хранилище
function addToLocalStorage(product) {
	// Получаем продукты из хранилища
	const products = localStorage.getItem('products');

	// Если они есть, то добавляем и сохраняем
	if (products) {
		const jsonProducts = JSON.parse(products);
		jsonProducts.push(product);
		localStorage.setItem('products', JSON.stringify(jsonProducts));
		return;
	}

	// Если нет, то сохраняем один продукт
	localStorage.setItem('products', JSON.stringify([product]));
}