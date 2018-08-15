// Módulo 3 - Estructura de datos

/*
Ejercicio 1 -> Almacenar un array con todas las cartas de la baraja
c/u representada en un diccionario que tenga valor y palo
*/

var deck = [ 
	{value:1, suit:"Club"},{value:2, suit:"Club"},
	{value:3, suit:"Club"},{value:4, suit:"Club"},
	{value:5, suit:"Club"},{value:6, suit:"Club"},
	{value:7, suit:"Club"},{value:8, suit:"Club"},
	{value:9, suit:"Club"},{value:10, suit:"Club"},
	{value:11, suit:"Club"},{value:12, suit:"Club"},
	{value:13, suit:"Club"},
	{value:1, suit:"Spade"},{value:2, suit:"Spade"},
	{value:3, suit:"Spade"},{value:4, suit:"Spade"},
	{value:5, suit:"Spade"},{value:6, suit:"Spade"},
	{value:7, suit:"Spade"},{value:8, suit:"Spade"},
	{value:9, suit:"Spade"},{value:10, suit:"Spade"},
	{value:11, suit:"Spade"},{value:12, suit:"Spade"},
	{value:13, suit:"Spade"},
	{value:1, suit:"Heart"},{value:2, suit:"Heart"},
	{value:3, suit:"Heart"},{value:4, suit:"Heart"},
	{value:5, suit:"Heart"},{value:6, suit:"Heart"},
	{value:7, suit:"Heart"},{value:8, suit:"Heart"},
	{value:9, suit:"Heart"},{value:10, suit:"Heart"},
	{value:11, suit:"Heart"},{value:12, suit:"Heart"},
	{value:13, suit:"Heart"},
	{value:1, suit:"Diamond"},{value:2, suit:"Diamond"},
	{value:3, suit:"Diamond"},{value:4, suit:"Diamond"},
	{value:5, suit:"Diamond"},{value:6, suit:"Diamond"},
	{value:7, suit:"Diamond"},{value:8, suit:"Diamond"},
	{value:9, suit:"Diamond"},{value:10, suit:"Diamond"},
	{value:11, suit:"Diamond"},{value:12, suit:"Diamond"},
	{value:13, suit:"Diamond"}];


/*
Ejercicio 2 -> Partiendo del array anterior, 
filtrar en un nuevo array las cartas rojas y 
en otro array las cartas negras.
*/

	var redCards = [];
	var blackCards = [];

	for(var i = 0; i < deck.length; i++){
		if(deck[i].suit === "Club" || deck[i].suit === "Spade"){
			blackCards.push(deck[i].suit);
		}else if(deck[i].suit === "Heart" || deck[i].suit === "Diamond"){
			redCards.push(deck[i].suit);
		}
	}
/*console.log(blackCards);
console.log(redCards);*/


/* Ejercicio 3 -> Filtrar en un nuevo array 
las cartas rojas y pares. Imprimir en consola 
la ultima carta de ese nuevo array
*/

	var redCardsPair = [];
	var lastRedCardPair = [];

	for(var i = 0 ; i < deck.length; i++){	
		if( deck[i].value % 2 === 0 && ( deck[i].suit === "Heart" || deck[i].suit === "Diamond")){
			redCardsPair.push(deck[i].value);
			lastRedCardPair = redCardsPair.pop();
		}		
	}
	//console.log(redCardsPair);
	//console.log(lastRedCardPair);
