// ==========================
// Função para criar e mostrar popup dos versículos
// ==========================
function showPopup(verseText) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 1000;

    const box = document.createElement('div');
    box.style.backgroundColor = 'white';
    box.style.padding = '20px';
    box.style.borderRadius = '8px';
    box.style.maxWidth = '500px';
    box.style.textAlign = 'center';
    box.style.position = 'relative';

    const p = document.createElement('p');
    p.innerText = verseText;
    box.appendChild(p);

    const btn = document.createElement('button');
    btn.innerText = 'Fechar';
    btn.style.marginTop = '10px';
    btn.onclick = () => document.body.removeChild(overlay);
    box.appendChild(btn);

    overlay.appendChild(box);
    document.body.appendChild(overlay);
}

// ==========================
// Adiciona evento de clique a todos os versículos
// ==========================
document.querySelectorAll('.verse').forEach(el => {
    el.style.color = 'blue';
    el.style.cursor = 'pointer';
    el.style.textDecoration = 'underline';
    el.addEventListener('click', () => showPopup(el.dataset.text));
});

// ==========================
// Função do Quiz
// ==========================
document.getElementById('submitQuiz').addEventListener('click', () => {
    const answers = {
        q1: "B",
        q2: "B",
        q3: "A",
        q4: "D",
        q5: "B",
        q6: "C",
        q7: "A",
        q8: "B",
        q9: "C",
        q10: "B"
    };

    let score = 0;

    for (let q in answers) {
        const selected = document.querySelector(`input[name=${q}]:checked`);
        if (selected && selected.value === answers[q]) score++;
    }

    const total = Object.keys(answers).length;
    const percentage = (score / total) * 100;

    let msg = `Você acertou ${score} de ${total} questões (${percentage}%).<br>`;
    if (percentage >= 70) {
        msg += "Parabéns! Você pode emitir seu certificado de conclusão.";
    } else {
        msg += "Infelizmente, você não atingiu 70%. Refaça o curso para tentar novamente.";
    }

    document.getElementById('quizResult').innerHTML = msg;
});
