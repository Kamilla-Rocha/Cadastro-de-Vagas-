const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + " .";
    textoFinal += vaga.nome;
    textoFinal += "(" + vaga.cadidatos.length + "candidatos)\n";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga:");
  const descricao = prompt("Informe uma descriçaõ para a vaga:");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa0 para a vaga:"
  );

  const confirmação = confirm(
    "Deseja criar uma nova vaga para essas informações ? \n" +
      "Nome:" +
      nome +
      "\nDescrição:" +
      descricao +
      "\nData limite: " +
      dataLimite
  );
  if (confirmação) {
    const novaVaga = { nome, descrição, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada.");
  }
}
function exibirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja exibir:");
  const vaga = vagas[indíce];

  const candidatosEmTexto = vaga.cadidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n . " + candidato;
  },
  " ");
  alert(
    "vaga nº" +
      indice +
      "\nNome:" +
      vaga.nome +
      "\nDescriçaõ:" +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      "\nCandidatos inscritos: " +
      canditatosEmTexto
  );
}

function inscreverCandidato() {
  const canditados = prompt("Informe o nome do (a) candidato(a):");
  const indice = prompt(
    "Informe o índice de vaga para qual o(a) candidato(a) deseja se increver"
  );
  const vaga = vagas[índice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato" +
      "na vaga" +
      indice +
      "?\n" +
      "Nome:" +
      vaga.nome +
      "\nDescrição:" +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );
  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada.");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir: ");
  const vaga = vagas[índice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga" +
      índice +
      " ?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição:" +
      vaga.descricao +
      "\nData limite:" +
      vaga.dataLimite
  );
  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída.");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Empregos" +
      "\n\nEscolha um das opções:" +
      "\n1.Listar vagas disposição" +
      "\n2.Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4.Inscrever um(a) candidato(a)" +
      "\n6.Sair"
  );

  return opcao;
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "6");
}
executar();
