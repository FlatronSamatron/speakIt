export default class ButtonResult{
    constructor(){
        this.description = 'Result';
        this.buttonHTML = null
        this.sound = null
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
    renderInfo(word,transcription,translate){
        // document.querySelector('.wrong').innerHTML = ''
        const wrapperHTML = this.renderHtmlElement( document.querySelector('.wrong'), 'div', 'item-info');
        const wordHTML = this.renderHtmlElement(wrapperHTML, 'p', 'word', null, word);
        const transcriptionHTML = this.renderHtmlElement(wrapperHTML, 'p', 'transcription', null, transcription);
        const translateHTML = this.renderHtmlElement(wrapperHTML, 'p', 'translate', null, translate);
    }
    setHandler(){
        this.buttonHTML.addEventListener('click',()=>{
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.result').style.display = 'flex'
            // document.querySelectorAll('.item-info').forEach(el => {
            //     el.addEventListener('click', (el) => {
            //         this.sound = el.target.closest('div').querySelector('.word').innerHtml
            //         console.log(this.sound)
            //     })
            // })
            
        })
    }
}