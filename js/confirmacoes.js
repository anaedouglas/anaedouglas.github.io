function buscarConfirmacoes(confirmacoes) {
	getConfirmacoes();
}

function construirHTML(confirmacoesDados) {
	var html = '';
	
	confirmacoesDados.forEach(function(confirmacao) {
		emailName = confirmacao.email.substring(0, confirmacao.email.indexOf('@'));
		emailHost = confirmacao.email.substring(confirmacao.email.indexOf('@'), confirmacao.email.length);
		html += `<div class="panel panel-default">
					<div class="panel-body">
						<dl>
							<dt>Nome Completo:</dt>
							<dd>${confirmacao.nomeCompleto}</dd>
							<dt>Email:</dt>
							<dd>${emailName}<br class="rwd-break">${emailHost}</dd>
							<dt>Telefone:</dt>
							<dd>${confirmacao.telefone}</dd>
						</dl>
					</div>
					<div class="panel-footer"><em>${confirmacao.data} ${confirmacao.hora}</em></div>
				</div>

				`
	});

	document.querySelector('.container').innerHTML += html;
}

buscarConfirmacoes();