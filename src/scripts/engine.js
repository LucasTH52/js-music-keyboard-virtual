const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

//cria uma lista de teclas possiveis
let mapedKeys = [];

//localiza os audios usados 
let audio = new Audio("src/tunes/src_tunes_a.wav");

//chama o audio para tocar quando acionado 
const playTune = (key) => {
    audio.src = `src/tunes/src_tunes_${key}.wav`
    audio.play();

 //cria a dinamica de ao usar o teclado ter o mesmo efeito visual
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150);

};

//cria a dinamica de clicar e acontecer algo
pianoKeys.forEach((key)=> {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

//aqui as teclas do teclado funcionam
//apenas quando forem as mapeadas
document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key)
    };    
});


//cria a ferramenta de volume interativa
const handleVolume = (e)=>{
    audio.volume = e.target.value;
}

const showHideKeys = () =>{
    pianoKeys.forEach(key => key.classList.toggle("hide"))
    //toggle add ou remove classe
}

volumeSlider.addEventListener("input", handleVolume)

keysCheck.addEventListener("click", showHideKeys)