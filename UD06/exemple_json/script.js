const text = '[{"nom": "Pere", "ciutat": "Mô"}, {"nom": "Pepe", "ciutat": "Sant Lluis"}, {"nom": "Xec", "ciutat": "Lô"}]';
const obj = JSON.parse(text);
const p = document.getElementById('exemple');

for (let i = 0; i < obj.length; i++) {
    p.innerHTML += "nom: "+ obj[i].nom + ", ciutat: " + obj[i].ciutat + ".<br>";
}
