export default class ButtonSpeak{
    constructor(){
        this.description = 'Speak please';
        this.buttonHTML = null;
        this.words = null;
        this.img = null;
        this.mainImage = null
        this.inputText = null;
        this.isRec = true;
    }
    renderHtmlElement(parent, tag, className, id, innerHtml, src, atrName, atrValue) {
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
        if(atrName) {
            element.setAttribute(atrName, atrValue)
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
            this.recognitionSpeak()
        })
    }
    setInfo(items,mainImage){
        this.words = items.map(el=>el.word.toLowerCase())
        this.img = items.map(el=> 'https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/' + el.image.slice(6));
        this.mainImage = mainImage
    }
    correctItem(transcript){
        // console.log(transcript)
        const item = document.querySelectorAll('.item')
        item.forEach((el,i)=>{
            if(el.querySelector('.word').innerText.toLowerCase() == transcript){
                el.classList.add('activeItem')
                this.mainImage.updateState(this.img[i],'')
                this.upgradeInfo(transcript)
            }
        })
    }
    upgradeInfo(transcript){
        let sucessWord
        document.querySelectorAll('.item-info .word').forEach(el => {
            if(el.innerHTML.toLowerCase() == transcript){
                sucessWord = el.parentElement
                el.parentElement.remove()
                document.querySelector('.sucess').append(sucessWord)
                document.querySelector('.suc').innerHTML = 'Не знаю: '+ document.querySelector('.sucess').childNodes.length
                document.querySelector('.error').innerHTML = 'Ошибок: '+ document.querySelector('.wrong').childNodes.length
            }
        })
    }
    // addStar(){
    //     if(this.star){
    //     let div = document.createElement('div')
    //     div.className = 'star'
    //     document.querySelector('.score').append(div)
    //     this.star = false;
    //     }
    // }
    recognitionSpeak(){
        // document.querySelectorAll('.item-info .word').forEach(el => {
        //     console.log(el.innerHTML)
        // })
        document.querySelectorAll('.item').forEach(el=>el.classList.remove('activeItem'))
        document.querySelectorAll('.item').forEach(el=>el.classList.add('stopHover'))
        if(this.inputText != null && document.querySelector('.main-img input')){document.querySelector('.main-img input').remove()}
        this.inputText = this.renderHtmlElement(document.querySelector('.main-img') , 'input', 'input',null,'',null, 'readonly');
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        const recognition = new SpeechRecognition()
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        // let p = document.createElement('p');
        // document.body.append(p);

        recognition.onresult =  e => {
            const transcript = Array.from(e.results)
            .map(res => res[0])
            .map(res => res.transcript)
            .join('')
            this.words.forEach(el => {
                if(el == transcript.toLowerCase()){
                    this.correctItem(transcript.toLowerCase())
                }
                this.inputText.value = transcript
            })
        }

        if(this.isRec){
            recognition.onend = recognition.start
        } else {
            recognition.onend = recognition.stop
        }

        recognition.start()
        this.isRec = false
    }
}