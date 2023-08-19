import clubItem from './clubItem.js' ; 

class ClubList extends HTMLElement {

  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }


  render() {
    // clearing HTML
    this.innerHTML = '' ;
    // Perulangan object dalam array
    this._clubs.forEach(club => {
    // instanciation  
    const clubEl = document.createElement('club-item');
      // render data ke club item
    clubEl.props = club ; 
    // Memasukkan objek club ke parameter ; 
    console.log(club) ;

    //Append ke clubList
    this.append(clubEl);
    
    });

  }

   renderError(pesan) {
     this.innerHTML = '';
     this.innerHTML += '<h2 class="placeholder">' + pesan + '</h2>';
  }


}

customElements.define('club-list', ClubList);



export default ClubList; 