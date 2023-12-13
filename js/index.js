/* index.js */
window.addEventListener("load", function () {
    const butaoAtivar = document.getElementById("btHeroi");
    butaoAtivar.onclick = function () {
        nivelHeroi();
    }

    const butaoLimpar = document.getElementById("btLimpar");
    butaoLimpar.onclick = function () {
        limparCampos();
    }
});

function nivelHeroi() {
    var nomeHeroi = document.getElementById("nomeHeroi");
    var xpHeroi = document.getElementById("xpHeroi");

    var nome = nomeHeroi.value;
    var xp = Number(xpHeroi.value);

    var categoria = "";

    if (nome === "" || xp === 0) {
        alert("Informe nome e XP do Herói!");
        nomeHeroi.focus();
        return;
    }

    if (xp <= 1.000) {
        categoria = "Ferro";
    } else if (xp >= 1.001 && xp <= 2.000) {
        categoria = "Bronze";
    } else if (xp >= 2.001 && xp <= 5.000) {
        categoria = "Prata";
    } else if (xp >= 6.001 && xp <= 7.000) {
        categoria = "Ouro";
    } else if (xp >= 7.001 && xp <= 8.000) {
        categoria = "Platina";
    } else if (xp >= 8.001 && xp <= 9.000) {
        categoria = "Ascendente";
    } else if (xp >= 9.001 && xp <= 10.000) {
        categoria = "Imortal";
    } else {
        categoria = "Radiante";
    }

    var outHeroi = document.getElementById("outHeroi");
    var titulo = "O Herói de nome " + nome + " está no nível de " + categoria;
    outHeroi.innerHTML = "<h3>" + titulo + "</h3>";
}

function limparCampos() {
    location.reload();
    document.getElementById("nomeHeroi").focus();
}