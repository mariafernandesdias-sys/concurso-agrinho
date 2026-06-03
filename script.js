const curiosidades = [
"Um drone agrícola pode monitorar dezenas de hectares em poucas horas.",
"Sensores IoT ajudam a economizar água ao irrigar apenas quando necessário.",
"A Agricultura 4.0 utiliza inteligência artificial para prever problemas na lavoura.",
"Alguns drones conseguem identificar doenças nas plantas antes que sejam visíveis ao olho humano.",
"A agricultura de precisão reduz desperdícios e aumenta a produtividade.",
"Painéis solares já são utilizados em propriedades rurais para gerar energia limpa.",
"Robôs agrícolas podem auxiliar no plantio e monitoramento das culturas.",
"A tecnologia ajuda produtores a usar menos recursos naturais e produzir mais alimentos."
];

function gerarCuriosidade() {
const sorteio = Math.floor(Math.random() * curiosidades.length);
document.getElementById("resultado").innerHTML = curiosidades[sorteio];
}
