const curiosidades = [

"Os drones agrícolas conseguem mapear grandes áreas rapidamente.",

"A inteligência artificial pode prever pragas antes delas aparecerem.",

"Sensores inteligentes ajudam a economizar milhares de litros de água.",

"A energia solar já é utilizada em diversas fazendas brasileiras.",

"A agricultura de precisão reduz desperdícios e aumenta a produtividade."

];

function gerarCuriosidade(){

  const numero = Math.floor(Math.random() * curiosidades.length);

  document.getElementById("curiosidade").innerHTML =
  curiosidades[numero];
}
