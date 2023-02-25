// La primer forma es usando el contructor de objetos, usando new(forma basica)
const miObjFacil = new Object(); 

// La segunda forma es usar la literal de objetos o inicializador, se trata de una estrura englobada entre llaves con pares, clave/valor(forma mas sencilla)
const miObj = {
  title: 'Aprendiendo JavaScript',
  pages: 100
}

// La tercera forma es usando una funcion construtora pasado los paramatros que seran las propiedades del objeto y dentro de la funcion utilizamos el objeto 'this', despues de esto para crear una instacia utilizamos la palabra reservada new llamando a la funcion pasandole los parametros
function MiObjFunc(name) {
  this.name = name;
}

const miObjF = new MiObjFunc('Victor');

// La cuarta forma es utilizar la clases que proporciona ES6+, es un ejemplo sintactico de la tercera forma, sustituyendo la funcion constructora por un constructor de clase
class MiObjets {
  constructor(name) {
    this.name = name;
  }
}

const miObjE6 = new MiObjets('Victor');

// La quinta forma es utilizar el patron Singleton, tomando en cuenta los conceptos de las funciones autoinvocables y los clousor de javascript podemos crear este patron donde el objetos se instacia una sola unica vez, asegurandonos de no crear nuevas instacias

const singl = new(function Singleton() {
  this.name = 'Victor';
})();

console.log(miObjFacil, miObj, miObjF, miObjE6, singl);