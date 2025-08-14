const num = document.getElementById('txtn');
const lista = document.getElementById('seltab');
const res = document.getElementById('res');
const valores = []; // armazena os números adicionados

function isNumero(n) {
  const v = Number(n);
  return v >= 1 && v <= 100;
}

function inLista(n, l) {
  return l.indexOf(Number(n)) !== -1;
}

function tabela() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    const item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = ''; // limpa resultados ao adicionar novo número
  } else {
    alert('Valor inválido ou já encontrado na lista.');
  }
  num.value = '';
  num.focus();
}

function resultado() {
  if (valores.length === 0) {
    alert('Adicione valores antes de finalizar!');
    return;
  }

  const tot = valores.length;
  const maior = Math.max(...valores);
  const menor = Math.min(...valores);
  const soma = valores.reduce((a, b) => a + b, 0);
  const media = soma / tot;

  res.innerHTML = '';
  res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`;
  res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`;
  res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`;
  res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`;
  res.innerHTML += `<p>A média dos valores digitados é <strong>${media.toFixed(2)}</strong>.</p>`;
}