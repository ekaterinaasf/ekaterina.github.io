class fetcher {
  constructor(url) {
    this.url = url;
    this.result = {};
    this.username = "ekaterinaasf";
  }

  async getRepos() {
    //const url = "https://api.github.com/search/repositories?q=stars:150000..300000"
    const response = await fetch(this.url);
    this.result = await response.json();
    console.log("Gotten repos: " + this.result);
    return this.result;
  }
  async getIssues() {
    // used for creation
    // const headers = {Authorization: `Token 94597db8dec1970acf98ccb5c1a1d37b75e38b0`,};
    const response = await fetch(this.url);
    this.result = await response.json();
    return this.result;
  }
}

export { fetcher };
