// B.1. Definição dos dados (JSON)
const catalogo = [
    { 
        id: 1, 
        titulo: "The Matrix", 
        tipo: "filme", 
        ano: 1999, 
        generos: ["Ficção Científica", "Ação"], 
        nota: 8.7, 
        assistido: true 
    },
    { 
        id: 2, 
        titulo: "Grey's Anatomy", 
        tipo: "serie", 
        ano: 2005, 
        generos: ["Drama"], 
        nota: 7.6, 
        assistido: true
    }, 
    { 
        id: 3, 
        titulo: "Interstellar", 
        tipo: "filme", 
        ano: 2014, 
        generos: ["Ficção Científica", "Drama"], 
        nota: 8.6, 
        assistido: false 
    },
    { 
        id: 4, 
        titulo: "The Bear", 
        tipo: "serie", 
        ano: 2022, 
        generos: ["Comédia", "Drama"], 
        nota: 9.1, 
        assistido: true 
    },
    { 
        id: 5, 
        titulo: "O Auto da Compadecida", 
        tipo: "filme", 
        ano: 2000, 
        generos: ["Comédia", "Aventura"], 
        nota: 9.5, 
        assistido: true 
    },
    { 
        id: 6, 
        titulo: "Dark", 
        tipo: "serie", 
        ano: 2017, 
        generos: ["Suspense"], 
        nota: 8.8, 
        assistido: false 
    }
];

// B.2. Acesso e leitura dos dados 
console.log("Catálogo Completo:", catalogo);
console.log("Título do 1º item:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const generos3 = catalogo[2].generos;
if (generos3.length >= 2) {
    console.log("2º gênero do 3º item:", generos3[1]);
} else {
    console.log("O terceiro item tem apenas um gênero.");
}

// B.3. Iterações com iterators 

// A) Listagem com forEach
console.log("--- Listagem de Títulos ---");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B) Transformação com map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em Caixa Alta:", titulosEmCaixaAlta);

// C) Seleção com filter
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Existem ${naoAssistidos.length} itens não assistidos.`);

// D) Busca com find
const notaAlta = catalogo.find(item => item.nota >= 9);
if (notaAlta) {
    console.log(`Destaque (Nota >= 9): ${notaAlta.titulo} - Nota: ${notaAlta.nota}`);
} else {
    console.log("Nenhum item com nota maior ou igual a 9.");
}

// E) Agregação com reduce

const mediaGeral = (catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length).toFixed(2);
console.log(`Média geral das notas: ${mediaGeral}`);

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = (assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length).toFixed(2);
console.log(`Média das notas dos assistidos: ${mediaAssistidos}`);

// F) Checagens com some e every
const temAntigo = catalogo.some(item => item.ano < 2000);
console.log(`Existe algum item anterior a 2000? ${temAntigo ? "Sim" : "Não"}`);

const todosComGenero = catalogo.every(item => item.generos.length > 0);
console.log(`Todos os itens possuem gênero? ${todosComGenero ? "Sim" : "Não"}`);

// B.4. Saída na tela (DOM simples) 

const totalItens = catalogo.length;
const qtdFilmes = catalogo.filter(item => item.tipo === "filme").length;
const qtdSeries = catalogo.filter(item => item.tipo === "serie").length;
const qtdNaoAssistidos = naoAssistidos.length; 

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota) 
    .slice(0, 3); 

const outputDiv = document.getElementById('output');

outputDiv.innerHTML = `
    <hr>
    <h2>Resumo do Catálogo</h2>
    <p><strong>Total de itens:</strong> ${totalItens}</p>
    <p><strong>Filmes:</strong> ${qtdFilmes} | <strong>Séries:</strong> ${qtdSeries}</p>
    <p><strong>Não assistidos:</strong> ${qtdNaoAssistidos}</p>
    <p><strong>Média geral de notas:</strong> ${mediaGeral}</p>
    
    <h3>🏆 Top 3 Ranking</h3>
    <ul>
        ${ranking.map(item => `<li>${item.titulo} - Nota: ${item.nota}</li>`).join('')}
    </ul>
`;