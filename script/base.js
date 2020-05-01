window.onload = () => {
  import { fetcher } from "./fetch.js";
  import { UI } from "./display.js";
  const repos = document.getElementById("repos");
  const issues = document.getElementById("issues");

  const url_repo =
    "https://api.github.com/search/repositories?q=user:ekaterinaasf";

  const replist = new fetcher(url_repo);
  const repdispl = new UI(repos, replist.getRepos());
};
