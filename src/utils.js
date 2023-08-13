// Função para validar o input do usuário
function locationValidation(location) {
    const checkAccentLetters = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const checkNumbers = /^\d+$/;

    return checkAccentLetters.test(location) || checkNumbers.test(location);
};

// Função para remover acentos do input do usuário
function removeAccents(location) {
    return location.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};