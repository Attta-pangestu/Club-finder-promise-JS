class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  // Membawa fungsi yang akan terjadi (eventHandler) ke method render, fungsi setter adalah mempermudah pemanggilan method click Event selayaknya properti ; 
  set clickEvent(event) {
    this._clickEvent = event;
    this.search();
  }

  // fungsi getter untuk mengubahnya menjadi nilai properti
  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
      <div id="search-container" class="search-container">
      <input placeholder="Search football club" id="searchElement" type="search">
      <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

  }

  search() {
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);

export default SearchBar; 