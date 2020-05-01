class UI {
  constructor(element, list) {
    this.element = element; //container
    this.list = list; //json object with data
  }

  displayRepo() {
    this.list.items.forEach((i) => {
      const anchor = document.createElement("a");
      anchor.href = i.html_url;
      anchor.textContent = i.full_name;
      this.element.appendChild(anchor);
      this.element.appendChild(document.createElement("br"));
    });
    return this.element;
  }
}

export { UI };
