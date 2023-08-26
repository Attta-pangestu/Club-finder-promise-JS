class ClubItem extends HTMLElement {

  set props(props) {
    this._props = props;
    this.render();
  }

  render() {
    const { idTeam, strDescriptionEN, strTeam, strTeamBadge} = this._props;
    this.innerHTML = `
      <div class="club">
        <img class="fan-art-club" src="${strTeamBadge}" alt="Fan Art" /> 
        <div class="club-info" >
        <h2> ${strTeam} </h2>
        <p> ${strDescriptionEN} </P> 
        </div>
      </div>
    ` ;

  }


}

customElements.define('club-item', ClubItem);



export default ClubItem; 