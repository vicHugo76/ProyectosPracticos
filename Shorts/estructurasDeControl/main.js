// metodo 1
function obtenerCalorias(fruta) {
  if (fruta == 'fresa') {
    return '65 calorias';
  }else if (fruta == 'mango') {
    return '57 calorias';
  }else if (fruta == 'manzana') {
    return '52 calorias';
  }else if (fruta == 'platano') {
    return '90 calorias';
  }else {
    return 'N/A';
  }
}

// metodo 2
function obtCalorias(fruta) {
  switch(fruta) {
    case 'fresa': return '65 calorias';
    case 'mango': return '57 calorias';
    case 'manzana': return '52 calorias';
    case 'platano': return '90 calorias';
    default: return 'N/A';
  }
}

// metodo 3
function obtenerCal(fruta) {
  const map = {
    'fresa': '65 calorias',
    'mango': '57 calorias',
    'manzana': '52 calorias',
    'platano': '90 calorias'
  };
  return map[fruta] ?? 'N/A';
}

console.log(obtenerCalorias('pera'));
console.log(obtCalorias('melon'));
console.log(obtenerCal('sandia'));

