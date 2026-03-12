let carros_estacionados = 0;
const limitemaximo = 8;
    console.log("---iniciando verificação---");
for(let vaga=1;vaga<=10;vaga++){
    if(vaga===4 || vaga===7 || vaga===3){
        console.log(`vaga ${vaga}: [INTERDITADA]- Pulando `);
        continue;}
        carros_estacionados++;
        console.log(`vaga ${vaga}: [LIVRE] -> CARRO ESTACIONADO! (TOTAL:${carros_estacionados})`);
        if(carros_estacionados===limitemaximo){
            console.log("---LIMITE ATINGINDO! FECHAR PORTÃO---");
            break}
}
console.log("RELATÓRIO FINAL: OPERAÇÃO DE ENTRADA ENCERRADA");
