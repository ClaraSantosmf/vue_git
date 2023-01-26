function later(result) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}

export const api = {
  async search_users(searchstring) {
    const result = {
      items: [{ login: "joao" }, { login: "jose" }],
    };
    return later(result);
  },
  async lista_repos(username) {
    const result = [
      { name: "Django", owner: { login: `${username}` } },
      { name: "Vue.js", owner: { login: `${username}` } },
    ];
    return later(result);
  },
  async listaIssues(owner, name, page) {
    const result = [{ number: "01", title: "nome da issue 01" }];
    return later(result);
  },
  async search_file(fullName, path = "") {
    const result = [
      { type: "dir", name: "aii", title: "nome da issue 01" },
      { type: "file", name: "outra.js", title: "será deus" },
    ];
    return later(result);
  },
  async search_text(url) {
    const result = "finge que tem um conteúdo bonitão aqui. Cheio de palavras";
    return later(result);
  },
};
