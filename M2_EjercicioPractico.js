// Módulo 2 - Estructuras de control
/*
Ejercicio 1 -> teniendo una variable tipo cadena 
con la carta 4♥, valide si es de ♥ y de valor 4. 
Si es correcto, imprimir en consola.
*/

function validarCarta(){
	var carta = '4c';
	var valor = carta[0];
	var palo = carta[1];

	if((valor == 4) && (palo == "c")){
		console.log("Es correcta la carta: " + carta);
	}

};

/*
¿Qué sucede?
Depende del operador que utilicemos para la comparación: 
Si, la condición del IF, utilizamos el operador ===, y las 
condiciones son: valor === 4 && palo === ‘c’, no se cumple 
la condición, por que el 4 asignado en carta, es carácter y 
el 4 de la condición es 4 numérico, y por regla el operador 
=== exige que sean iguales los valores y el tipo de dato.
Ahora, si utilizamos el operador ==,  y las condiciones 
son: valor == 4 && palo == ‘c’, si va a tomar las condiciones 
como verdaderas e imprimirá la variable carta, porque este 
operador funciona comparando valores entre si simplemente.
*/

/*
Ejercicio 2 -> usar un bucle para recorrer todos los anios 
bisiestos anteriores a 2050 e imprimir en la consola*/

function leapYearUntil2050two(){
	var lastYear = 2050;
	var lapYear = [];

	for( var i = 0 ; i <= lastYear; i++){
		if((i % 4 === 0) && (i % 100 != 0)){
			lapYear.push(i);
		}else if ((i % 100 === 0) && (i % 400 === 0)){
			lapYear.push(i);
		}					
	}				
	console.log(lapYear);
};


/*
Ejercicio 3 -> Usar un bucle para recorrer todas las 
cartas de la baraja, de 1-12 de c/palo. 
Imprimir solo rojas y multiplos de tres.
*/


function multipleThreeRedCards(){
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
		if( deck[i].value % 3 === 0 && ( deck[i].suit === "Heart" || deck[i].suit === "Diamond")){
			filteredDeck.push(deck[i].value);
		}		
	}
	return filteredDeck;
};
