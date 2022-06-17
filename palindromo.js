const isPalindromo = (texto) => {
    const Palindromo = texto.split('')
    .reverse()
    .join('');
    return Palindromo === texto ? 'Palindromo confirmado' : 'Não é um Palindromo';
    


}

console.log(isPalindromo('amor a roma'));