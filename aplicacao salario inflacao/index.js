import input from 'readline-sync';

let salarioMinimo =[
    {ano: 2010, salario:510},
    {ano: 2011, salario:545},
    {ano: 2012, salario:622},
    {ano: 2013, salario:678},
    {ano: 2014, salario:724},
    {ano: 2015, salario:788},
    {ano: 2016, salario:880},
    {ano: 2017, salario:937},
    {ano: 2018, salario:954},
    {ano: 2019, salario:998},
    {ano: 2020, salario:1045}
]

let inflação =[
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
]

console.log(`Escolha uma das alternativas:
1- Listar os salários mínimos de 2010 à 2020.
2- Listar o índice IPCA de 2010 à 2020.
3- Comparação entre o percentual de aumento salarial e o IPCA`);

let label_salario = "Salário Mínimo:";
let label_ipca = "IPCA: ";
let label_ano = "Ano: ";
let label_cresc = "Crescimento Salarial: ";

let choice = input.question("Digite o numero da sua escolha: ");
switch(choice) {
    case '1':
          for(let dado of salarioMinimo){
              let salario = dado.salario;
              let ano = dado.ano;
              console.log("\n" + label_ano.padEnd(25, '.') + ano);
              console.log(label_salario.padEnd(25,'.')+ "R$" + salario + ",00");
          }
          break;
    case '2':
        for(let dado of inflação){
             let ipca = dado.ipca;
             let ano = dado.ano;
             let ipca_formatado = ipca.toFixed(2).replace(".",",");
             console.log("\n" + label_ano.padEnd(25, '.') + ano);
             console.log(label_ipca.padEnd(25, '.') + ipca_formatado + "%");
        }
           break;
    case '3':
        for(let i=0; i<inflação.length;i++){
            let ano = inflação[i].ano;
            let ipca = inflação[i].ipca;
            let ipca_formatado = ipca.toFixed(2).replace(".",",");
            let salario = salarioMinimo[i].salario;
            let salarioAnterior = i>0 ? salarioMinimo[i-1].salario : salarioMinimo[i].salario;
            let diferença = salario - salarioAnterior;
            let cresc = (diferença/salarioAnterior)*100;


            console.log("\n" + label_ano.padEnd(25, '.') + ano);
            console.log(label_salario.padEnd(25, '.') + salario);
            console.log(label_cresc.padEnd(25, '.') + cresc.toFixed(2).replace(".",",") + "%");
            console.log(label_ipca.padEnd(25, '.') + ipca_formatado + "%");
        }
        break;

    default: console.log("Opcao invalida"); break;
}