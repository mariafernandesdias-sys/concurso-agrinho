const curiosidades = [

"Um drone pode monitorar centenas de hectares em poucas horas.",

"A irrigação inteligente reduz o desperdício de água.",

"Sensores conectados à internet ajudam produtores a prever problemas na lavoura.",

"A inteligência artificial consegue identificar doenças em plantas através de imagens.",

"O controle biológico utiliza organismos naturais para combater pragas.",

"A agricultura de precisão diminui custos e impactos ambientais.",

"Painéis solares já são utilizados em muitas propriedades rurais."
];

function gerarCuriosidade(){
let sorteio = Math.floor(Math.random()*curiosidades.length);

document.getElementById("resultado").innerHTML =
curiosidades[sorteio];
}
