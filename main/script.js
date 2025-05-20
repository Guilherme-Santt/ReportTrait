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

    console.log(nome)
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

    console.log(contagemF)
}
pegaDados()
