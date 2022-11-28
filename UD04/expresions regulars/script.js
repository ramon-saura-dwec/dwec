/*
RegExp

/patró/modificadors

*/

//eshemple

let patro = /dwec/i; //la i hace que no sea key sensitive, no tiene en cuenta mayusculas ni minusculas

let cadena = "Hola requetedwec boquepasa DWEC y tal y talDWec.";

let possicio = cadena.search(patro);

console.log(possicio);

//cadena = "jmelsion@iesjoanramis.org";

patro = /\w/g //la w busca caracteres, no simbolos @ . , etc // la g significa global puede encontrar mas de una vez el patron

//patro = /\d/g; //la d busca numeros

//patro = /\W/g; //la W busca todo lo que no son numeros ni caracteres o sea los simbolos

//patro = /\S/g; //la S te lo da todo menos los espacios

//patro = /r+/g // retorna el caracter en concret o null si no n'hi ha // el + es un operador para concatenar

cadena = "cada 100 o cada 1000 vegades";

//patro = /\d{2}/g; //cantidad de digitos a buscar

//patro = /\d{2,3}/g; //cantidad de digitos a buscar entre los dos 

let re = new RegExp(/Dewc/, 'gi');

//let resultat = cadena.match(patro);

let resultat = re.exec(cadena);

console.log(resultat);