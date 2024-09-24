document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturando os campos
    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem").value;
    let email = document.getElementById("email").value;

    // Validação dos campos
    if (!nome || !mensagem || email  === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        alert("Por favor, insira um e-mail válido.")
        return;
    }
        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
        <h2 id="formular">Mensagem enviada!</h2>
        <p id="formular"><strong>Nome:</strong> ${nome}</p>
        <p id="formular"><strong>E-Mail:</strong> ${email}</p>
        <p id="formular"><strong>Mensagem:</strong> ${mensagem}</p>
        `;

        // Limpa o formulário após enviar
        document.getElementById("quizForm").reset();
    }
)