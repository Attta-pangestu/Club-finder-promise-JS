const main = () => {
  // Select Element 
  const searchVal = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const clubListElement = document.querySelector('#clubList');
  
  // Event Ketika diklik 
  buttonSearchElement.addEventListener('click', function () {
    let keyword = searchVal.value ; 
    searchClub(keyword)
      .then(resolve => {
        renderClub(resolve) ;
        console.log(resolve) ; 
      }) 
      .catch(reject => renderFail(reject) ) ; 
  });

  

  // Merender perubahan jika sukses 
  function renderClub(clubs) {
    // Clearing inner HTML untuk refresh
    clubListElement.innerHTML = '' ;
    clubs.forEach(club => {
      let clubEl = document.createElement('div');
      clubEl.classList.add('club') ;

      const {name, fanArt, description}  = club ; 
      
      clubEl.innerHTML =  `
        <img class="fan-art-club" src="${fanArt}" alt="Fan Art" /> 
        <div class="club-info" >
        <h2> ${name} </h2>
        <p> ${description} </P> 
        </div>
        ` ;  
      clubListElement.append(clubEl) ; 
    });
  }

  // Merender ketika data tidak ditemukan 
  function renderFail(reject) {
    clubListElement.innerHTML = '';
    clubListElement.innerHTML += '<h2 class="placeholder">' + reject + '</h2>';
  }
  
  
  
} ; 


