import ItemWord from './itemWord'
import ItemImage from './itemImage'
import Difficult from './difficult'
import ButtonRestart from './buttonRestart'
import ButtonSpeak from './buttonSpeak'
import ButtonResult from './buttonResult'



const mainImage = new ItemImage();
mainImage.render();

const buttonRestart = new ButtonRestart();
buttonRestart.init();

const buttonSpeak = new ButtonSpeak();
buttonSpeak.init();

const buttonResult = new ButtonResult();
buttonResult.init();


export default function getWord(page,group,isDot = true) {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    fetch(url)
    .then(res => res.json())
    .then(json => words(json,isDot))
}



const words = (json,isDot) => {
    let items = json.slice(0,10)
    buttonSpeak.setInfo(items,mainImage)
    items.forEach((el,i) => {
        if(isDot){
            const dif = new Difficult()
            if(i<6 && isDot){dif.init(i,mainImage)}
            const card = new ItemWord(el,mainImage,buttonResult)
            card.init()
        } else {
            document.querySelectorAll('.item')[0].remove()
            const card = new ItemWord(el,mainImage,buttonResult)
            card.init()
        }
    });
}

getWord(0,0)

document.querySelector('.return').addEventListener('click', ()=>{
    document.querySelector('.container').style.display = 'flex';
document.querySelector('.result').style.display = 'none'
})


document.querySelector('.intro-btn').addEventListener('click', ()=>{
    document.querySelector('.container').style.display = 'flex';
document.querySelector('.main').style.display = 'none'
})

document.querySelector('.newGame').addEventListener('click', ()=>{
    // document.querySelector('.main-img .translate').innerHTML = ''
    document.querySelectorAll('.item').forEach(el=>{
        el.classList.remove('activeItem');
        el.classList.remove('stopHover')
    })
    document.querySelector('.input').value = ''
    let suc = document.querySelector('.sucess').childNodes;
    suc.forEach(el => document.querySelector('.wrong').append(el)) 
    document.querySelector('.sucess').childNodes.forEach(el=> el.remove())
            
    document.querySelector('.suc').innerHTML = 'Не знаю: '+ document.querySelector('.sucess').childNodes.length
    document.querySelector('.error').innerHTML = 'Ошибок: '+ document.querySelector('.wrong').childNodes.length
})