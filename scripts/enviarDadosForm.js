function mostrarDadosForm(event) {
    event.preventDefault();

    let nome = document.getElementById("ipNome").value;
    let email = document.getElementById("ipEmail").value;
    let telefone = document.getElementById("ipTelefone").value;

    let DtNascimento = document.getElementById("ipDtNascimento").value;
    let partes = DtNascimento.split("-");

    let data = new Date(partes[0], partes[1] - 1, partes[2]);
    let dataFormatada = data.toLocaleDateString("pt-BR")

    let mensagem = document.getElementById("taMensagem").value;
    let nivel = document.getElementById("slNivel");
    let nivelSelecionado = nivel.options[nivel.selectedIndex].text;
    let retorno = "Olá, " + nome + ", confira os dados informados:";

    document.getElementById("resposta").innerText = retorno;
    document.getElementById("pNome").innerText = "Nome: " + nome;
    document.getElementById("pEmail").innerText = "Email: " + email;
    document.getElementById("pTelefone").innerText = "Telefone: " + telefone;
    document.getElementById("pData").innerText = "Data de nascimento: " + dataFormatada;
    document.getElementById("pNivel").innerText = "Nivel: " + nivelSelecionado;
    document.getElementById("pMensagem").innerText = "Mensagem: " + mensagem;
}
function limparDados() {
    document.getElementById("ipNome").value = "";
    document.getElementById("ipEmail").value = "";
    document.getElementById("ipTelefone").value = "";
    document.getElementById("ipDtNascimento").value = "";
    document.getElementById("slNivel").selectedIndex = 0;
    document.getElementById("taMensagem").value = "";

    document.getElementById("resposta").innerText = "Olá, confira os dados informados:";
    document.getElementById("pNome").innerText = "Nome: ";
    document.getElementById("pEmail").innerText = "Email: ";
    document.getElementById("pTelefone").innerText = "Telefone: ";
    document.getElementById("pData").innerText = "Data de nascimento: ";
    document.getElementById("pNivel").innerText = "Nivel: ";
    document.getElementById("pMensagem").innerText = "Mensagem: ";
}