import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jannyJack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salad from '../assets/produtores/salad.png';

const gerarNumeroAleatorio = (min, max)=>{
    return Math.floor( Math.random() * (max - min +1) + min);
}

const produtores = {
    titulo: '',
    lista: [
          {
            nome: 'green',
            imagem: green,
            distancia: `${gerarNumeroAleatorio(1 , 500)}m`,
            estrelas: gerarNumeroAleatorio(1,5)
        },
          {
            nome: 'grow',
            imagem: grow,
            distancia: `${gerarNumeroAleatorio(1 , 500)}m`,
            estrelas: gerarNumeroAleatorio(1,5)
        }
          ,{
            nome: 'jannyJack',
            imagem: jannyJack,
            distancia: `${gerarNumeroAleatorio(1 , 500)}m`,
            estrelas: gerarNumeroAleatorio(1,5)
        },
          {
            nome: 'potager',
            imagem: potager,
            distancia: `${gerarNumeroAleatorio(1 , 500)}m`,
            estrelas: gerarNumeroAleatorio(1,5)
        },
          {
            nome: 'salad',
            imagem: salad,
            distancia: `${gerarNumeroAleatorio(1 , 500)}m`,
            estrelas: gerarNumeroAleatorio(1,5)
        }
    ]
}


export default produtores;