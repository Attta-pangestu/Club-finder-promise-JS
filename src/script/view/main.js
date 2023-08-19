// Data 
import DataSource from '../data/data-source.js';
// Komponen
import '../components/searchBar.js';
import '../components/clubItem.js';
import '../components/appBar.js';
import '../components/clubList.js';



const main = () => {

  /* =============================== Ini cara event handler konvensional konvensional  ============
  Event Ketika diklik dengan cara event handler konvensional 
  buttonSearchElement.addEventListener('click', () => {
    onButtonClicked();
    console.log('Sedang mengambil data');
   });

   */

  // =============================== Ini cara event handler dengan web component ===========================
  
  // Event Ketika diklik dengan cara event handler web component (Event nya dihandle di component search Bar)
  // Search Bar Instansciation
  const clubListElement = document.querySelector('#clubList');
  const searchInstance = document.querySelector('search-bar');
  searchInstance.clickEvent = onButtonClicked;


  // ========================== Ini fungsi asynchronous sebagai event handler ===========================
  // Kumpulan fungsi yang saling berkaitan dan menunggu 
  async function onButtonClicked() {
    try {
      let keyword = searchInstance.value;
      let dataClub = await DataSource.searchClub(keyword);
      renderClub(dataClub);
    } catch (pesan) {
      renderFail(pesan);
    }
  }



  // Merender perubahan jika sukses 
  function renderClub(clubs) {
    //  ======================================== Cara Web Component =============================================
    // Instanciation Club List 
    let clubListEl = document.createElement('club-list') ; 
    // Memasukkan parameter data ke properti club list object
    clubListEl.clubs = clubs ; 
    // Append ke DOM main
    document.querySelector('main').append(clubListEl);

    /*  ======================================== Cara Render Konvensional =============================================
    // clubs.forEach(club => {
    //   let clubEl = document.createElement('div');
    //   clubEl.classList.add('club');

    //   const { name, fanArt, description } = club;

    //   clubEl.innerHTML = `
    //     <img class="fan-art-club" src="${fanArt}" alt="Fan Art" /> 
    //     <div class="club-info" >
    //     <h2> ${name} </h2>
    //     <p> ${description} </P> 
    //     </div>
    //     `       
    //   clubListElement.append(clubEl);
    // });
  */
  }


  
  // Merender ketika data tidak ditemukan 
  function renderFail(pesan) {
   // Instanciation Club List 
    let clubListEl = document.createElement('club-list') ; 
    clubListEl.renderError(pesan) ; 
    // Append ke DOM main
    document.querySelector('main').append(clubListEl);
  }



};

export default main;


