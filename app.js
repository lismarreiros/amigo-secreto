//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
  const amigo = document.getElementById("amigo").value
  // se estiver vazio
  if (amigo == '') {
    alert('Por favor, insira um nome.');
  }

  amigos.push(amigo);
  document.getElementById("amigo").value = ''
  // console.log(amigos)

  list()
}

function list() {
  const list = document.getElementById('listaAmigos');
  list.innerHTML = ''

  for (const amigo of amigos) {
    const li = document.createElement('li')
    li.innerHTML = amigo
    list.appendChild(li)
  }
}

function sortearAmigo() {
  if (!amigos || amigos.length == 0) {
    return
  }

  const index = Math.floor(Math.random() * amigos.length)

  // console.log(amigos[index])
  
  const amigoSorteado = document.getElementById("resultado")
  amigoSorteado.innerHTML = amigos[index]
}