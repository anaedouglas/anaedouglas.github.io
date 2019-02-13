function enviarMensagem(dados) {
	var ajax = new XMLHttpRequest();

	var requestData = {
		chat_id : '@anaedouglas',
		text : formatarMensagem(dados),
		parse_mode: 'HTML'
	}
	// Seta tipo de requisição: Post e a URL da API
	ajax.open("POST", "https://api.telegram.org/bot797317209:AAEetL5h_cvsXMhuZIuosJcjR_TdoC7w1BI/sendMessage", true);
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

function formatarMensagem(dados) {
	 return `<b>Confirmação Recebida</b>\n<b>Nome: </b> ${dados.nome}\n<b>Email: </b>${dados.email}\n<b>Telefone: </b>+55 ${dados.telefone}`;
}