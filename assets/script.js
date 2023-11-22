var elementosInfo = document.querySelectorAll(".info");

elementosInfo.forEach(
	/*executa uma função para cada elemento*/ function (info) {
		info.addEventListener("click", function () {
			info.classList.toggle("ativa");
		});
	}
);