function criarTabelaVazia() {
    const tabela = document.createElement('table');
    const cabecalho = tabela.createTHead();
    const linhaCabecalho = cabecalho.insertRow();

    const th1 = document.createElement('th');
    th1.textContent = 'Nome';
    linhaCabecalho.appendChild(th1);

    const th2 = document.createElement('th');
    th2.textContent = 'Idade';
    linhaCabecalho.appendChild(th2);

    const th3 = document.createElement('th');
    th3.textContent = 'Hobbie';
    linhaCabecalho.appendChild(th3);

    // Cria o corpo da tabela
    const corpoTabela = tabela.createTBody();
    
    for (let i = 0; i < 3; i++) {
        const linha = corpoTabela.insertRow();
        const celula1 = linha.insertCell();
        const celula2 = linha.insertCell();
        const celula3 = linha.insertCell();
    }
    
    return tabela;
}


async function pegaDados(){
    let dados   = await fetch('http://127.0.0.1:5500/main/response.js')
    const data  = await dados.json();
    
    let nome = [];
    let idade = [];
    let bio = [];

    data.forEach((key) => {
        if(key.sexo.includes('M')){
            nome.push([key.sexo, key.nome]);
            idade.push(key.idade);
            bio.push(key.bio);
        } else {
            nome.push([key.sexo, key.nome]);
            idade.push(key.idade);
            bio.push(key.bio);
        }
    })

    // Contando dados de acordo com sexo
    let contagemF = 0;
    let contagemM = 0;
    nome.forEach((res) => {
        if(res[0] == 'F'){
            contagemF++;
        } else {
            contagemM++;
        }
    })
    const total = contagemF + contagemM;
    let spanT = document.querySelector('#spanT');
    let M = document.querySelector('#M');
    let F = document.querySelector('#F');
    spanT.innerHTML = total;
    M.innerHTML = contagemM;
    F.innerHTML = contagemF;


    const response = document.querySelector('#response')
    const tabelaVazia = criarTabelaVazia();
    response.appendChild(tabelaVazia);
}
pegaDados()
