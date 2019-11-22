

let lupa = document.getElementById('lupa')
console.log('lupa')
let busca = document.getElementById('busca')
console.log('busca')

lupa.addEventListener('click', function(){
	busca.style.display = 'flex'
})
lupa.addEventListener('click', function(){
	lupa.style.display = 'flex'
})
