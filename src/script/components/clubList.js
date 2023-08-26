import clubItem from './clubItem.js' ; 

class ClubList extends HTMLElement {
  constructor() {
    super() ; 

    this.shadowDOM = this.attachShadow({mode : 'open'});
  }

  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }


  render() {
    // clearing HTML and add style
    this.shadowDOM.innerHTML = `
      <style>
        :host {
        margin-top: 32px;
        width: 100%;
        padding: 16px;
      }
      
     
      .club {
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      }
      
      .club .fan-art-club {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      
      .club-info {
        padding: 24px;
      }
      
      .club-info > h2 {
        font-weight: lighter;
      }
      
      .club-info > p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
      }
            
      
      </style>
    
    ` ;
    // Perulangan object dalam array
    this._clubs.forEach(club => {
    // instanciation  
    const clubEl = document.createElement('club-item');
      // render data ke club item
    clubEl.props = club ; 
    // Memasukkan objek club ke parameter ; 
    console.log(club) ;

    //Append ke clubList
    this.shadowDOM.append(clubEl);
    
    });

  }

   renderError(pesan) {
     this.shadowDOM.innerHTML = `
      <style>
        :host {
        margin-top: 32px;
        width: 100%;
        padding: 16px;
      }
      
      .placeholder {
        font-weight: lighter;
        color: rgba(0, 0, 0, 0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      </style>
     `;
     this.shadowDOM.innerHTML += '<h2 class="placeholder">' + pesan + '</h2>';
  }


}

customElements.define('club-list', ClubList);



export default ClubList; 