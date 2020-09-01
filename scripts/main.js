const menu_BTN = document.querySelector('.hamburger-menu');
const menu_DIV = document.querySelector('.ham');

const categories_DIV = document.querySelector('.categories');
const categoriesFolding_DIV = document.querySelectorAll('.categories__folding');
const categoriesItems_LI = document.querySelectorAll('.categories__item');
const subCategoriesItems_LI = document.querySelectorAll('.sub-categories__item');

const basket_BTN = document.querySelector('.basket-trigger');
const basket_DIV = document.querySelector('.basket');

const previewThumbnails_LI = document.querySelectorAll('.preview__item');
const colorThumbnails_LI = document.querySelectorAll('.color__item');

const amountOfProduct_DIV = document.querySelector('.buying__count-container');
const amountOfProduct_P = document.querySelector('.buying__count-number');

const faqQuestions_DIV = document.querySelectorAll('.faq-quesiton__question');

// ---------- SHOW CATEGORIES -------------
menu_BTN.addEventListener('click', () => {
	menu_DIV.classList.toggle('ham--active');
	categories_DIV.classList.toggle('categories--active');
});

// ---------- SHOW BASKET -------------
basket_BTN.addEventListener('click', () => {
	basket_DIV.classList.toggle('basket--active');
});

// ---------- SHOW SUB-CATEGORIES -------------
categoriesFolding_DIV.forEach((category) => {
	category.addEventListener('click', () => {
		category.nextElementSibling.classList.toggle('sub-categories--active');
		category.classList.toggle('categories__folding--active');
	});
});

// ---------- CHANGE ACTIVE CATEGORY -------------
categoriesItems_LI.forEach((item) => {
	item.addEventListener('click', () => {
		if (!item.firstElementChild.classList.contains('categories__folding')) {
			categoriesItems_LI.forEach((categoryItem) => {
				categoryItem.classList.remove('categories__item--active');
			});
			item.classList.add('categories__item--active');
		}
	});
});
subCategoriesItems_LI.forEach((item) => {
	item.addEventListener('click', () => {
		categoriesItems_LI.forEach((categoryItem) => {
			categoryItem.classList.remove('categories__item--active');
		});
		item.parentElement.parentElement.classList.add('categories__item--active');
	});
});

// ---------- CHANGE ACTIVE THUMBNAIL -------------
previewThumbnails_LI.forEach((item) => {
	item.addEventListener('click', () => {
		previewThumbnails_LI.forEach((previewItem) => {
			previewItem.classList.remove('preview__item--active');
		});
		item.classList.add('preview__item--active');
	});
});
// ---------- CHANGE ACTIVE COLOR THUMBNAIL -------------
colorThumbnails_LI.forEach((item) => {
	item.addEventListener('click', () => {
		colorThumbnails_LI.forEach((colorItem) => {
			colorItem.classList.remove('color__item--active');
		});
		item.classList.add('color__item--active');
	});
});

amountOfProduct_DIV.firstElementChild.addEventListener('click', () => {
	let productAmount = parseInt(amountOfProduct_P.innerText);
	if (productAmount > 1) {
		amountOfProduct_P.innerHTML = productAmount - 1;
	}
});
amountOfProduct_DIV.lastElementChild.addEventListener('click', () => {
	let productAmount = parseInt(amountOfProduct_P.innerText);
	console.log(productAmount);
	amountOfProduct_P.innerHTML = productAmount + 1;
});

// ---------- SHOW FAQ QUESTION -------------
faqQuestions_DIV.forEach((item) => {
	item.addEventListener('click', () => {
		item.parentElement.classList.toggle('faq-quesiton--active');
	});
});
