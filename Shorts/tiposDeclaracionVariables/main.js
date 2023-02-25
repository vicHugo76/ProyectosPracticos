// Este tipo de declaracion con var, las variable a las comas son globales, no son independientes y se actualizan sobre escribiendose y por eso al llegar setTimeout la variable i ya vale 3 
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}

// Con esta declaracion let o const, las variable tiene ambito de bloque siendo independientes, osea que si la variable esta dentro de un bloque se actualiza al momento de iterar
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}