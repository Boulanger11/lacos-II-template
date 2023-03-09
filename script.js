// --------------- PRÁTICA GUIADA ---------------
const bimestre1 = [10,10,10,10]
const bimestre2 = [8,6,7,5]
const bimestre3 = [6,7,8.5,10]
const bimestre4 = [3,5,0,2]


const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

/* for (let i = 0; i < notasDoAno.length; i++){
  console.log(notasDoAno[i])
  
  let soma = 0
  let media = 0

  for (let j = 0; j < notasDoAno[i].length; j++){

    soma = soma + notasDoAno[i][j]
  }
  media = soma / notasDoAno[i].length
  console.log(`Soma`, soma)
  console.log(`Media`, media)
}
 */

/* for (let i in notasDoAno){
  let soma = 0
  let media = 0

  for (let elemento of notasDoAno[i]){
    /* console.log(elemento) */
    /* soma = soma + elemento
      }
      media = soma / notasDoAno[i].length
      console.log(i)
      console.log(soma)
      console.log(media)
    }
     */ 



// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻
for (let i in filmes) {
  
  const frase = `${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por: ${filmes[i].diretor}`

  console.log(frase)

  for(let j of filmes[i].elenco){
    //console.log(j) 
    const indiceArtista = filmes[i].elenco.indexOf(j)
    const fraseElenco = `Atriz/Ator ${indiceArtista}: ${j}`

    console.log(fraseElenco)
  }

}