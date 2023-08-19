class AppBar extends HTMLElement {
  connectedCallback() {

    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <h2>Club Finder</h2>
      </header>
    ` ;

  }



}

customElements.define('app-bar', AppBar) ; 



export default AppBar; 