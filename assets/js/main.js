/*const navSlide = () => {
    console.log('nav slide');
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener('click', (e) => {
        nav.classList.toggle('nav-active');
    });
}
console.log("main loaded");
navSlide();*/

simpleCart.currency({
	code: "RSD",
	name: "Dinar",
	symbol: "RSD",
	after: true
});
simpleCart({
	checkout: { 
		type: "SendForm", 
		url:"https://flakhobby.com/naplata.html",
		method: "GET"
		},
	cartColumns: [
		{attr: "name", label: "Naziv"},
		{attr: "price", label: "Cena"},
		{attr: "code", label: "Sifra"},
		{view: "decrement", label: false, text: "-1"},
		{attr: "quantity", label: "kol."},
		{view: "increment", label: false, text: "+1"},
		{attr: "total", label: "Ukupno", view:"currency"},
		{view: "remove", text: "Ukloni", label: false}
	],
//		currency: "dinar",
	cartStyle: "table"
});

window.onload = (e) => {
    let loadSpinner = document.querySelector('.custom-loader');
    loadSpinner.classList.add('loader-hidden');
    console.log('all loaded');
}
