function enviarConfirmacao(requestData) {
	var ajax = new XMLHttpRequest();
	// Seta tipo de requisição: Post e a URL da API
	ajax.open("POST", "https://wedding-api-hk.herokuapp.com/confirmacao", true);
	ajax.setRequestHeader("Content-type", "application/json");
	// Seta paramêtros da requisição e envia a requisição
	ajax.send(JSON.stringify(requestData));
	// Cria um evento para receber o retorno.
	ajax.onreadystatechange = function() {
		// Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
		if (ajax.readyState == 4 && ajax.status == 200) {
			sucessoNoEnvio();
		} else if (ajax.status != 200) {
			falhaNoEnvio();
		}
	};
}

function excluirConfirmacao(id) {
	var ajax = new XMLHttpRequest();
	// Seta tipo de requisição: Post e a URL da API
	ajax.open("DELETE", "https://wedding-api-hk.herokuapp.com/confirmacao/?id=" + id, true);
	ajax.setRequestHeader("Content-type", "application/json");
	// Seta paramêtros da requisição e envia a requisição
	ajax.send();
	// Cria um evento para receber o retorno.
	ajax.onreadystatechange = function() {
		// Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
		if (ajax.readyState == 4 && ajax.status == 200) {
			console.log('Sucesso');
		} else if (ajax.status != 200) {
			console.log('Falha');
		}
	};
}