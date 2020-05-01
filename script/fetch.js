class fetcher {
  constructor(url) {
    this.url = url;
    this.result={};
  }

  getRepos() {
    //const url = "https://api.github.com/search/repositories?q=stars:150000..300000"
    const response = await fetch(this.url);
    this.result = await response.json();
    return this.result;
    }

}

export {fetcher};
