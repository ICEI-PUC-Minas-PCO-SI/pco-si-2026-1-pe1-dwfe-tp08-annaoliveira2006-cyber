//Definição dos dados (JSON)
const catalogo = [
    { id: 1, titulo: "Interestelar", tipo: "filme", genero: ["Sci-Fi", "Drama"], ano: 2014, nota: 8.6, assistido: true },
    { id: 2, titulo: "Your Name", tipo: "filme", genero: ["Animação", "Romance"], ano: 2016, nota: 8.4, assistido: false },
    { id: 3, titulo: "A Origem", tipo: "filme", genero: ["Sci-Fi", "Ação"], ano: 2010, nota: 8.8, assistido: true },
    { id: 4, titulo: "Breaking Bad", tipo: "série", genero: ["Crime", "Drama"], ano: 2008, nota: 9.5, assistido: true },
    { id: 5, titulo: "O Exterminador do Futuro 2", tipo: "filme", genero: ["Sci-Fi", "Ação"], ano: 1991, nota: 8.5, assistido: false },
    { id: 6, titulo: "Stranger Things", tipo: "série", genero: ["Sci-Fi", "Terror"], ano: 2016, nota: 8.7, assistido: true }
];

console.log("Catálogo Completo:", catalogo);

//Acessos específicos
console.log("Título do primeiro item:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const terceiroItemGenero = catalogo[2].genero[1]|| "Gênero não encontrado";
console.log("Segundo gênero do terceiro item:", terceiroItemGenero);

console.log("---Listagem de Títulos (foreach) ---");
catalogo.forEach(item => {
    console.log(`-[${item.tipo}] ${item.titulo} (${item.ano})`);
});

console.log("---Títulos em Maiúsculas (map) ---");
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Itens não assistidos: ${naoAssistidos.length}`);

console.log("---Busca de Nota Alta (find) ---");
const notaAlta = catalogo.find(item => item.nota > 8.7);
if (notaAlta) {
    console.log(`Encontrado: ${notaAlta.titulo} - Nota: ${notaAlta.nota}`);
} else {
    console.log("Nenhum item com nota maior ou igual a 8.7");
}

//Médias com Reduce
const mediageral = catalogo.reduce((acc,item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((acc,item) => acc + item.nota, 0) / assistidos.length;

console.log(`Média Geral: ${mediageral.toFixed(2)}`);
console.log(`Média Assistidos: ${mediaAssistidos.toFixed(2)}`);

//Checagens (some e every)
const existeAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.genero.length > 1);

console.log(`Existe item lançado antes de 2000?, ${existeAntigo}`);
console.log(`Todos os itens têm mais de um gênero?, ${todosTemGenero}`);

const output = document.getElementById("output");

//Ranking: Criar cópia e ordenar por nota
const ranking = [...catalogo].sort((a,b) => b.nota - a.nota).slice(0,3);

output.innerHTML = `
    <ul>
        <li><strong>Total de itens:</strong> ${catalogo.length}</li>
        <li><strong>Filmes:</strong> ${catalogo.filter(i => i.tipo === 'filme').length}</li>
        <li><strong>Séries:</strong> ${catalogo.filter(i => i.tipo === 'série').length}</li>
        <li><strong>Não assistidos:</strong> ${naoAssistidos.length}</li>
        <li><strong>Média Geral:</strong> ${mediageral.toFixed(2)}</li>
    </ul>
    <h3>Top 3 Itens:</h3>
    <ol>
        ${ranking.map(item => `<li>${item.titulo} - Nota: ${item.nota}</li>`).join('')}
    </ol>
`; 
