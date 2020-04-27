// import 'babel-polyfill'


export default class ItemWord{
    constructor(item,mainImage,buttonResult){
        this.parent =  document.querySelector('.words')
        this.baseURL = 'https://raw.githubusercontent.com/flatronsamatron/rslang-data/master/data/';
        this.word = item.word;
        this.transcription = item.transcription
        this.image = this.baseURL + item.image.slice(6)
        this.audio = new Audio(this.baseURL + item.audio.slice(6))
        this.cardHTML = null;
        this.wordHTML = null;
        this.transcriptionHTML = null;
        this.mainImage = mainImage;
        this.buttonResult = buttonResult
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
        if(src){
            element.src = src
        }  
        parent.appendChild(element);    
        return element;
    }
    translateWord(word) {
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ${word} &lang=en-ru`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.mainImage.updateState(this.image,data.text)
            });    
    }    
    translateInfo(word){
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ${word} &lang=en-ru`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.buttonResult.renderInfo(this.word,this.transcription,data.text)
            });
    }
    render() {
        const wrapperHTML = this.renderHtmlElement( this.parent, 'div', 'item');
        const wordHTML = this.renderHtmlElement(wrapperHTML, 'p', 'word', null, this.word);
        const transcriptionHTML = this.renderHtmlElement(wrapperHTML, 'p', 'transcription', null, this.transcription);
        const img = this.renderHtmlElement(wrapperHTML, 'img', 'audio-img', null, null, './speaker.png');
        this.cardHTML = wrapperHTML;
    }
    init(){
        this.render();
        this.setHandler();
        this.translateInfo(this.word)
    }
    setHandler(){
        this.cardHTML.onclick = () => {
            this.audio.play()
            this.translateWord(this.word)
            document.querySelectorAll('.item').forEach(el=>el.classList.remove('activeItem'))
            this.cardHTML.classList.add('activeItem')
        }
        // this.cardHTML.addEventListener('click', (el)=>{
        //     this.audio.play()
        //     this.translateWord(this.word)
        // })
    }
    updateState(item,i) {
        // this.word = item.word;
        // this.transcription = item.transcription;
        // this.audio = new Audio(this.baseURL + item.audio.slice(6))
        // this.image = this.baseURL + item.image.slice(6);
        // this.wordHTML = this.parent.querySelectorAll('.word')[i]
        // this.transcriptionHTML = this.parent.querySelectorAll('.transcription')[i]
        // this.cardHTML = this.parent.querySelectorAll('.item')[i]
        // // this.wordHTML.innerHTML = item.word;
        // // this.transcriptionHTML.innerHTML = item.transcriptionHTML;
        // this.wordHTML.innerHTML = this.word;
        // this.transcriptionHTML.innerHTML = this.transcription;
        // this.setHandler()
    }
}

// function play(audios) {
//     let audio = new Audio(audios);
//     audio.play();
// }

// function translate(word) {
//     const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ${word} &lang=en-ru`
//         fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             translateTag.innerHTML = data.text
//         });    
// }

