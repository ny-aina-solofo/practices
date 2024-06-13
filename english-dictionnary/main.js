const input = document.querySelector('input'); 
const result = document.querySelector('.result');
let word,definition,example,phonetic; 

async function search() { 
    try {       
        let keyword = input.value ; 
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        const data = await fetch(url).then((response)=> response.json());  
        word = data[0].word; 
        phonetic = data[0].phonetic; 
        definition = data[0].meanings[0].definitions[0].definition; 
        example = data[0].meanings[0].definitions[0].example;   
        result.innerHTML = rendu.render();
    } catch (error) {
        console.log(error);
        result.innerHTML = "error, try again later"
    }
         
}

const rendus= {
    render:()=>{
        return `
            <h3>${word} </h3>
            <span>${phonetic}</span> 
            <p>${definition}</p>
            <p> example : ${example}</p>
            `
    }
}


input.addEventListener('keyup',(e) => {
    if(e.key === "Enter") search(); 
});

document.querySelector('.search-button').addEventListener('click',search); 
