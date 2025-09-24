
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    // Função para ativar uma aba
    const activateTab = (tabName) => {
        // Remove a classe 'active' de todos os botões e conteúdos
        tabButtons.forEach(button => {
            button.classList.remove("active", "text-rose-600", "border-rose-600");
            button.classList.add("text-gray-600", "hover:text-rose-500", "border-transparent");
        });
        tabContents.forEach(content => {
            content.classList.add("hidden");
            content.classList.remove("active");
        });

        // Adiciona a classe 'active' ao botão e conteúdo da aba selecionada
        const activeButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
        const activeContent = document.getElementById(tabName);

        if (activeButton) {
            activeButton.classList.add("active", "text-rose-600", "border-rose-600");
            activeButton.classList.remove("text-gray-600", "hover:text-rose-500", "border-transparent");
        }
        if (activeContent) {
            activeContent.classList.remove("hidden");
            activeContent.classList.add("active");
        }
    };

    // Adiciona event listeners aos botões de aba
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tabName = button.dataset.tab;
            activateTab(tabName);
        });
    });

    // Ativa a primeira aba (Gourmet) por padrão ao carregar a página
    activateTab("gourmet");
});