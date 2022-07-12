function enviar() {
  let nomePego = document.getElementById('nome').value
  let pesoPego = document.getElementById('peso').value
  let alturaPego = document.getElementById('altura').value

  let formPego = document.getElementById('formResultado')
  formPego.classList.add('resultado')

  function aviso() {
    let aviso = document.getElementById('avisoColocado')
    aviso.classList.add('error')
  }

  nomePego = nomePego.trim()

  if (nomePego == '') {
    // Se o nome estiver vazio
    aviso()

    document.getElementById('avisoColocado').innerHTML = 'Nome vazio'
  } else if (pesoPego == '') {
    // Se o Peso estiver vazio
    aviso()
    document.getElementById('avisoColocado').innerHTML = 'Peso vazio'
  } else if (pesoPego < 0) {
    // Se o Peso for negativo
    aviso()
    document.getElementById('avisoColocado').innerHTML = 'Peso negativo'
  } else if (alturaPego == '') {
    // Se a altura estiver vazia
    aviso()
    document.getElementById('avisoColocado').innerHTML = 'Altura vazio'
  } else if (alturaPego < 0) {
    // Se o altura for negativo
    aviso()
    document.getElementById('avisoColocado').innerHTML = 'Altura negativa'
  } else {
    document.getElementById('avisoColocado').innerHTML = ''

    let resultadoIMC = pesoPego / (alturaPego * alturaPego)
    resultadoIMC = resultadoIMC.toFixed(2)

    document.getElementById('nomeColocado').innerHTML = 'Nome: ' + nomePego
    document.getElementById('pesoColocado').innerHTML =
      'Peso: ' + pesoPego + ' kilos'
    document.getElementById('alturaColocado').innerHTML =
      'Altura: ' + alturaPego
    document.getElementById('imcColocado').innerHTML = 'IMC: ' + resultadoIMC

    let statusIMC
    if (resultadoIMC < 18.5) {
      statusIMC = 'Abaixo do Peso'
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.999) {
      statusIMC = 'Peso Normal'
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.999) {
      statusIMC = 'Sobrepeso'
    } else if (resultadoIMC >= 30 && resultadoIMC <= 34.999) {
      statusIMC = 'Obesidade Grau 1'
    } else if (resultadoIMC >= 35 && resultadoIMC <= 39.999) {
      statusIMC = 'Obesidade Grau 2'
    } else if (resultadoIMC >= 40) {
      statusIMC = 'Obesidade Grau 3 ou Mórbida'
    }

    document.getElementById('statusColocado').innerHTML =
      'Seu Status é: ' + statusIMC
  }
}
