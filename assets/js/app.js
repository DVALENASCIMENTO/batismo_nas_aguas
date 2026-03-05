document.addEventListener('DOMContentLoaded', () => {
  // ==========================
  // Objeto global 'app'
  // ==========================
  window.app = window.app || {
    /**
     * Salva o resultado de um subtópico no localStorage
     * @param {string} key - Identificador do subtópico
     * @param {string} score - Resultado obtido
     */
    saveSubtopicResult: (key, score) => {
      localStorage.setItem('result_' + key, score);
    },

    /**
     * Obtém o resultado salvo de um subtópico no localStorage
     * @param {string} key - Identificador do subtópico
     * @returns {string|null} Resultado ou null
     */
    getSubtopicResult: (key) => {
      return localStorage.getItem('result_' + key);
    },

    /**
     * Abre um modal exibindo um versículo ou texto bíblico
     * @param {string} title - Título ou referência do versículo
     * @param {string} text - Texto do versículo
     */
    openVerseModal: (title, text) => {
      const modal = document.createElement('div');
      modal.className = 'modal show';
      modal.innerHTML = `
        <div class="modal-content">
          <h3>${title}</h3>
          <p>${text}</p>
          <button class="btn" id="closeVerse">Fechar</button>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById('closeVerse').onclick = function () {
        modal.remove();
      };
    }
  };

  // ==========================
  // Modal de boas-vindas
  // ==========================
  const startBtn = document.getElementById('startBtn');
  const welcomeModal = document.getElementById('welcomeModal');

  if (startBtn && welcomeModal) {
    startBtn.addEventListener('click', () => {
      // Oculta o modal suavemente
      welcomeModal.classList.remove('show');
      welcomeModal.style.display = 'none';
      
      // Opcional: redirecionar para course.html
      // window.location.href = 'course.html';
    });
  }

  // ==========================
  // Botão Questionário Geral
  // ==========================
  const openQuizBtn = document.getElementById('openGeneralQuiz');
  const certNameInput = document.getElementById('certName');
  const certCpfInput = document.getElementById('certCpf');
  const certResultDiv = document.getElementById('certResult');

  if (openQuizBtn) {
    openQuizBtn.addEventListener('click', () => {
      const name = certNameInput.value.trim();
      const cpf = certCpfInput.value.trim();

      if (!name || !cpf) {
        alert('Por favor, preencha seu nome completo e CPF.');
        return;
      }

      // Aqui você chamaria a lógica do questionário e calcularia a pontuação
      // Exemplo simples: pontuação fictícia
      const score = Math.floor(Math.random() * 101); // 0 a 100%

      if (score >= 70) {
        certResultDiv.innerHTML = `
          <p>Parabéns, ${name}! Você obteve ${score}% e pode emitir seu certificado.</p>
          <button class="btn" onclick="alert('Certificado emitido!')">Emitir Certificado</button>
        `;
      } else {
        certResultDiv.innerHTML = `
          <p>${name}, você obteve ${score}%. É necessário acertar pelo menos 70%.</p>
          <button class="btn" onclick="location.reload()">Reiniciar Curso</button>
        `;
      }
    });
  }
});
