export function getWords(){

const item = document.querySelectorAll('.item')

    let arr = []

    for(let i=0; i<10; i++){
        getWord(3,0,i)
    }
    
    function getWord(page,group,i) {
        const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
        fetch(url)
        .then(response => response.json())
        .then(commits => {
            const word = item[i].querySelector('.word')
            const transcription = item[i].querySelector('.transcription')

            word.innerHTML = commits[i].word
            transcription.innerHTML = commits[i].transcription
            
            // getTranslation(commits[i].word,i)
        })
    }

    function getTranslation(word,i){
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T141128Z.dd52065382ad8a96.75a601c4137245008380fc26f2e31d94eaa0a27c&text= ${word} &lang=en-ru`
            fetch(url)
            .then(res => res.json())
            .then(data => {
            const translation = item[i].querySelector('.translation')
            translation.innerHTML = data.text
        });    
    }
}



