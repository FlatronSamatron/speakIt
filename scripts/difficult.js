import getWord from './scripts'


export default class Difficult{
    construcor(){
        this.dot = null
        this.mainImage = null
        this.point = 0
    }
    renderHtmlElement(parent, tag, className, id, innerHtml, src) {
        const element = document.createElement(tag);    
        if (id) {
          element.id = id;
        }
        if (innerHtml) {
          element.innerText = innerHtml;
        }
        if(className) {
           element.className = className; 
        }
        
        if(src) {
            element.src = src
        }
        parent.appendChild(element);    
        return element;
    }
    init(i,mainImage){
        this.render(i);
        this.setHandler(i);
        this.mainImage = mainImage
    }
    setHandler(i){
        this.dot.addEventListener('click', (el)=>{
            let dots = document.querySelectorAll('.dif')
            dots.forEach(el => {
                el.classList.remove('active')
            });
            this.dot.classList.add('active')
            let isDot = false;
            let point = Math.floor(Math.random() * (29 - 0) + 0)
            getWord(point,i, isDot)
            this.mainImage.updateState('./blank.jpg','')
            document.querySelectorAll('.item').forEach(el=>el.classList.remove('stopHover'))
            if(document.querySelector('.main-img input')){document.querySelector('.main-img input').remove()}
            document.querySelector('.wrong').innerHTML = ''
        })
    }
    render(i) {
        const wrapperHTML = document.querySelector('nav ul')
        this.dot = i==0 ? this.renderHtmlElement(wrapperHTML, 'li', 'dif active') : this.renderHtmlElement(wrapperHTML, 'li', 'dif' );
        // console.log(document.querySelector('nav'))
    }
}