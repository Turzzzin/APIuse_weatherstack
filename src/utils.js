// Função para validar o input do usuário
function locationValidation(location) {
    const checkAccentLetters = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const checkNumbers = /^\d+$/;

    return checkAccentLetters.test(location) || checkNumbers.test(location);
}