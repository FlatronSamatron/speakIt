export default class ButtonRestart{
    constructor(){
        this.description = 'Restart';
        this.buttonHTML = null
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
    init(){
        this.render()
        this.setHandler()
    }
    render() {
        const wrapperHTML = document.querySelector('.buttons') 
        this.buttonHTML = this.renderHtmlElement(wrapperHTML, 'p', 'button',null,this.description);
    }
    setHandler(){
        this.buttonHTML.addEventListener('click',()=>{
            document.querySelectorAll('.item').forEach(el=>{
                el.classList.remove('activeItem');
                el.classList.remove('stopHover')
            })
            document.querySelector('.main-img .translate').innerHTML = ''
            document.querySelector('.input').remove()
            console.log(document.querySelector('.sucess').childNodes)
            
        })
    }
}