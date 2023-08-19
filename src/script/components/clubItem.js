class ClubItem extends HTMLElement {

  set props(props) {
    this._props = props;
    this.render();
  }

  render() {
    const { name, stadion, fanArt, description } = this._props;
    this.innerHTML = `
      <div class="club">
        <img class="fan-art-club" src="${fanArt}" alt="Fan Art" /> 
        <div class="club-info" >
        <h2> ${name} </h2>
        <p> ${description} </P> 
        </div>
      </div>
    ` ;

  }


}

customElements.define('club-item', ClubItem);



export default ClubItem; 