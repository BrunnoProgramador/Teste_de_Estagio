let inputString = "Oi, tudo bem com você? Porque eu estou ótimo!!!"; 
let count = 0;

for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    
    if (char === 'a' || char === 'A') {
        count++;
    }
}

if (count > 0) {
    console.log(`A letra 'a' (maiúscula ou minúscula) ocorre ${count} vezes.`);
} else {
    console.log("A letra 'a' não foi encontrada na string.");
}
