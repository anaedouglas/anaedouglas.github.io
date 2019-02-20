var form = document.querySelector('form');
form.addEventListener("submit", envioFormulario, true);

function envioFormulario(event) {
	event.preventDefault();

	var nome = document.querySelector('#nome');
	var email = document.querySelector('#email');
	var telefone = document.querySelector('#telefone');
	var botaoEnviar = document.querySelector('button[type=submit]');

	nome.disabled = true;
	email.disabled = true;
	telefone.disabled = true;
	botaoEnviar.disabled = true;

	document.querySelector('#loading').style.display = 'inline-block';
	document.querySelector('#sucessoEnvio').style.display = 'none';
	document.querySelector('#falhaEnvio').style.display = 'none';

	enviarConfirmacao({
		nomeCompleto: nome.value,
		email: email.value,
		telefone: telefone.value
	});
}

function sucessoNoEnvio() {
	document.querySelector('#loading').style.display = 'none';
	document.querySelector('#sucessoEnvio').style.display = 'block';
}

function falhaNoEnvio() {
	document.querySelector('#loading').style.display = 'none';
	document.querySelector('#falhaEnvio').style.display = 'block';

	var nome = document.querySelector('#nome');
	var email = document.querySelector('#email');
	var telefone = document.querySelector('#telefone');
	var botaoEnviar = document.querySelector('button[type=submit]')

	nome.disabled = false;
	email.disabled = false;
	telefone.disabled = false;
	botaoEnviar.disabled = false;
}

function validarCampos() {
	document.querySelector('#loading').style.display = 'none';
	document.querySelector('#sucessoEnvio').style.display = 'none';
	document.querySelector('#falhaEnvio').style.display = 'none';

	var nome = validarNome();
	var email = validarEmail();
	var telefone = validarTelefone();
	return nome && email && telefone;
}

function validarNome() {
	var nomePreenchido = true;
	
	if (!(document.querySelector('#nome').value)) {
		document.querySelector('#validacaoNome').style.display = 'block';
		nomePreenchido = false;
	} else {
		document.querySelector('#validacaoNome').style.display = 'none';
	}

	return nomePreenchido;
}

function validarEmail() {
	var emailValido = true;

	var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g);

	if (!document.querySelector('#email').value)
		return true;

	emailValido = regExp.test(document.querySelector('#email').value);
	
	if (!emailValido) {
		document.querySelector('#validacaoEmail').style.display = 'block';
	} else {
		document.querySelector('#validacaoEmail').style.display = 'none';
	}

	return emailValido;
}

function validarTelefone() {
	var telefoneValido = true;

	var regExp = new RegExp(/\d{2} \d{9}/g);

	telefoneValido = regExp.test(document.querySelector('#telefone').value);
	
	if (!telefoneValido) {
		document.querySelector('#validacaoTelefone').style.display = 'block';
	} else {
		document.querySelector('#validacaoTelefone').style.display = 'none';
	}

	return telefoneValido;
}