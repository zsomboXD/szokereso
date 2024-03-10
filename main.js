import { words,abcStr } from "./words.js";

window.addEventListener('DOMContentLoaded', ()=>{
	document.querySelector(".start").addEventListener('click',start);
})
let randWord;
console.log("sdjzgfs")

function start(){
	const randIndex = Math.floor(Math.random()*words.length);
	randWord = words[randIndex];
	displayBoxes(randWord, 'boxContainer');
	displayAbc(abcStr, 'abc');
	console.log(randWord)
}

export function displayBoxes(word, id){
	document.getElementById(id).innerHTML='';
	Array.from(word).forEach(letter=>
			document.getElementById(id).innerHTML+=`
				<div class="box border-2 rounded-md border-stone-200 sm:w-[85px] sm:h-[85px] w-[60px] h-[60px] m-1 bg-stone-700 flex justify-center items-center text-2xl transition-all cursor-pointer"></div>
			`

		)
}

export function displayAbc(str, id){
	document.getElementById(id).innerHTML=''
	Array.from(str).forEach(letter=>
		document.getElementById(id).innerHTML+=`
		<button class="letter w-[35px] h-[35px] text-center items-center border-2 rounded-md border-stone-200/70 bg-stone-800/50 transition-all disabled:bg-stone-950">${letter}</button>
		`
		)
		document.querySelectorAll(".letter").forEach(btn => 
			btn.addEventListener("click", checkLetter)
			)

}

export function checkLetter(e){
	let clickedLetter = e.target.textContent;
	let boxNodeList = document.querySelectorAll('.box')
	// console.log(clickedLetter)
	Array.from(randWord).forEach((letter, index)=>{
			if(clickedLetter == letter) boxNodeList[index].textContent=letter;
	})
	e.target.disabled = true
	
}



