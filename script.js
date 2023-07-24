// alert('hello')

console.log('Hello Danil!')
console.log("Hello Viktor!")
console.log('Hello My Project!')

// button trenirovka
const trenirovka = document.querySelector('.trenirovka')
let startt = true
trenirovka.addEventListener('click', function () {
	console.log('клик по кнопке')
	trenirovka.innerHTML = 'Hello Danil'
	if (startt === true){
		trenirovka.classList.add('trenirovka_active')
    startt = false
    }else {
		trenirovka.innerHTML = 'Нажми на меня'
    trenirovka.classList.remove('trenirovka_active')    
    startt = true
  }
})

// button python
const python = document.querySelector('.python')
let mySwitch = true
const startText = python.innerHTML
python.addEventListener('click', function () {
    python.classList.toggle('python_active')
    if (mySwitch === true) {
        // text
        python.innerHTML = 'еще я немного знаю Python'
        // class
        python.classList.add('python_active')
        // boolean
        mySwitch = false
    } else {
        python.innerHTML = startText
        python.classList.remove('python_active')
        mySwitch = true
    }
})


let count = 0
function recursuon() {
	if (count === 10) { 
		return 
	}
	count = count + 1
	console.log('Hello World ' + count)
	recursuon()
}

recursuon()




