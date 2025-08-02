
function openLogin() {
    alert("Sistema de cadastro via e-mail ativado (simulado). Você verá os usuários conectados na sua dashboard futuramente.");
}

function startChat() {
    const msg = prompt("Digite sua mensagem para a IA:");
    if (msg) {
        document.getElementById("output").innerHTML = "Resposta IA: (mensagens ilimitadas simuladas)";
    }
}

function generateImage() {
    alert("Gerando imagem com IA... (limite: 10 imagens/dia)");
}

function generateVideo() {
    alert("Criando vídeo com IA e narração... (limite: 10 vídeos/dia)");
}
