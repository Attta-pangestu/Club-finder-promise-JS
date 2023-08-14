// Menjalankan fungsi mengambil data dari source club
  function searchClub(keyword) {
    return new Promise( (resolve,reject) => {
     const filteredClubs = clubs.filter( (club) => {return club.name.toUpperCase().includes(keyword.toUpperCase()) } ) ;
     if (filteredClubs.length) {
      resolve(filteredClubs);
      console.log(filteredClubs)
  } else {
    reject(keyword + ' is not found');
  }
    });
  }