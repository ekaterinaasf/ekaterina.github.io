import { fetcher } from "./fetch.js";
import { UI } from "./display.js";
window.onload = () => {
  const repos = document.getElementById("repos");
  const issues = document.getElementById("issues");

  const url-repo =
    "https://api.github.com/search/repositories?q=user:ekaterinaasf";

  const replist = new fetcher(url-repo);
  const repdispl = new UI(repos, replist.getRepos());
  repdispl.displayRepo();

  const url-issues =
    "https://api.github.com/search/issues?q=author:ekaterinaasf repo:HackYourFutureBelgium/class-7";
  const isslist = new fetcher(url-issues);
  const issdispl = new UI(issues, isslist.getIssues());
  issdispl.displayIssues();
};
