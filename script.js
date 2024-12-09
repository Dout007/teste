// Valores unitários de Cristal
const precoParceriaCristal = 600;
const precoSemParceriaCristal = 700;

// Função para calcular Cristais
function calcularCristal() {
    const quantidade = parseInt(document.getElementById('quantidade-cristal').value) || 0;

    // Calcula os valores com base na quantidade
    const totalParceria = quantidade * precoParceriaCristal;
    const totalSemParceria = quantidade * precoSemParceriaCristal;

    // Atualiza os campos de resultado
    document.getElementById('parceria-cristal').value = `R$ ${totalParceria.toLocaleString('pt-BR')}`;
    document.getElementById('sem-parceria-cristal').value = `R$ ${totalSemParceria.toLocaleString('pt-BR')}`;
}

// Função para calcular roupas sujas
function calcularRoupas() {
    const valorTotal = parseFloat(document.getElementById('valor-total-roupas').value) || 0;

    // Calcula os valores com os descontos
    const valorParceria = valorTotal * 0.8; // 20% de desconto
    const valorSemParceria = valorTotal * 0.7; // 30% de desconto

    // Atualiza os campos de resultado
    document.getElementById('parceria-roupas').value = `R$ ${valorParceria.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    document.getElementById('sem-parceria-roupas').value = `R$ ${valorSemParceria.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
}

// Função para calcular roupas sujas molhadas
function calcularMolhadas() {
    const valorTotal = parseFloat(document.getElementById('valor-total-molhadas').value) || 0;

    // Calcula os valores com os descontos
    const valorParceria = valorTotal * 0.5; // 50% de desconto
    const valorSemParceria = valorTotal * 0.5; // Sem desconto

    // Atualiza os campos de resultado
    document.getElementById('parceria-molhadas').value = `R$ ${valorParceria.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    document.getElementById('sem-parceria-molhadas').value = `R$ ${valorSemParceria.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
}

// Função para resetar os valores de uma calculadora específica
function resetCalc(tipo) {
    document.getElementById(`valor-total-${tipo}`).value = '';
    document.getElementById(`parceria-${tipo}`).value = 'R$ 0';
    document.getElementById(`sem-parceria-${tipo}`).value = 'R$ 0';
}

// Função para resetar tudo
function resetAll() {
    resetCalc('cristal');
    resetCalc('roupas');
    resetCalc('molhadas');
}
