var elementosSobre = document.querySelectorAll('.content')

elementosSobre.forEach(function(sobre){
	sobre.addEventListener('click', function(){
		sobre.classList.add('ativo')
	})
})