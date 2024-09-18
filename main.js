document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    if (nome !== "" && telefone !== "") {
        const contato = document.createElement("dl");
        contato.innerHTML = `<dt>${nome}</dt><dt>${telefone}</dt>`;
        document.getElementById("lista-contatos").appendChild(contato);
        document.getElementById("lista-contatos").appendChild(document.createElement("hr"));
        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } 
});
