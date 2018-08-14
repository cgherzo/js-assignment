// Módulo 1 - Fundamentos de la programación.

/*
Ejercicio 1
A : Calcular anios bisiestos antes de 2050
*/

function leapYearUntil2050(){
	var yearCurrent = new Date().getFullYear();
	var lastYear = 2050;
	var lapYear = [];

	for( year = yearCurrent ; year <= lastYear; year++){
		if((year % 4 === 0) && (year % 100 != 0)){
			lapYear.push(year);
		}else if ((year % 100 === 0) && (year % 400 === 0)){
			lapYear.push(year);
		}					
	}				
	return lapYear;
};

/*
Ejercicio 1
B: Saber numero de cartas par y negras que hay en un mazo de poker.
*/

function pairBlackCards(){
	//Suits: Club, Spade, Heart, Diamond //Values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
	var deck = [ {value:1, suit:"Club"},{value:2, suit:"Club"},
	{value:3, suit:"Club"},{value:4, suit:"Club"},
	{value:5, suit:"Club"},{value:6, suit:"Club"},
	{value:7, suit:"Club"},{value:8, suit:"Club"},
	{value:9, suit:"Club"},{value:10, suit:"Club"},
	{value:11, suit:"Club"}, {value:12, suit:"Club"},
	{value:13, suit:"Club"},
	{value:1, suit:"Spade"},{value:2, suit:"Spade"},
	{value:3, suit:"Spade"},{value:4, suit:"Spade"},
	{value:5, suit:"Spade"},{value:6, suit:"Spade"},
	{value:7, suit:"Spade"},{value:8, suit:"Spade"},
	{value:9, suit:"Spade"},{value:10, suit:"Spade"},
	{value:11, suit:"Spade"}, {value:12, suit:"Spade"},
	{value:13, suit:"Spade"},
	{value:1, suit:"Heart"},{value:2, suit:"Heart"},
	{value:3, suit:"Heart"},{value:4, suit:"Heart"},
	{value:5, suit:"Heart"},{value:6, suit:"Heart"},
	{value:7, suit:"Heart"},{value:8, suit:"Heart"},
	{value:9, suit:"Heart"},{value:10, suit:"Heart"},
	{value:11, suit:"Heart"}, {value:12, suit:"Heart"},
	{value:13, suit:"Heart"},
	{value:1, suit:"Diamond"},{value:2, suit:"Diamond"},
	{value:3, suit:"Diamond"},{value:4, suit:"Diamond"},
	{value:5, suit:"Diamond"},{value:6, suit:"Diamond"},
	{value:7, suit:"Diamond"},{value:8, suit:"Diamond"},
	{value:9, suit:"Diamond"},{value:10, suit:"Diamond"},
	{value:11, suit:"Diamond"}, {value:12, suit:"Diamond"},
	{value:13, suit:"Diamond"}];

	var filteredDeck = [];

	for(var i = 0 ; i < deck.length; i++){	
		if( deck[i].value % 2 === 0 && ( deck[i].suit === "Club" || deck[i].suit === "Spade")){
			filteredDeck.push(deck[i].value);
		}		
	}
	return filteredDeck;
};

/*
Ejercicio 2
Definir una variable que sea una carta:cadena:valor + palo
Definir dos cartas / variables mas, pero una anterior y la otra posterior de la inicial.
Definir otra variable para concatenar las tres cartas.
*/
function miniMazoCartas(){
	var cartaActual = '3c';
	var cartaAntes = '2c';
	var cartaDespues = '4c';
	var todasCartas = cartaAntes + ", " + cartaActual + ", " + cartaDespues;
	return todasCartas;
}

/*
Ejercicio 3
Definir variable / carta >= 9
Indexar la cadena. Que pasa? 
¿Cuál es la diferencia si la carta tiene un valor menor o igual que 9?
*/

var carta = '10c';
var valor = carta[0];
var palo = carta[1];

console.log(palo);

/*
La diferencia radica entre una carta igual o menor de 9 
a una mayor o igual que 10, es la forma en como lo 
interpreta JS y la cantidad de caracteres que tenemos.
Para el caso de menor o igual que 9, toma el primer 
carácter (valor 9 y posición cero del array) y el 
otro es el palo.
Para el caso de mayor o igual a 10, toma el primer 
carácter como el 1, el segundo como el 0 y el palo 
lo toma como un tercer carácter.

Ejemplo de código: 
var carta = '9c';				var carta = '10c';
var valor = carta[0]; // 9		var valor = carta[0]; // 1
var palo = carta[1];  // c		var palo = carta[1]; // 0
								var palo = carta[2]; // c
*/