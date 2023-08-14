// Menjalankan fungsi mengambil data dari source club
class DataSource {
  // Method yang diakses langsung tanpa pembuatan instance
 static searchClub(keyword) {
    return new Promise( (resolve,reject) => {

      setTimeout( () => {
        const filteredClubs = clubs.filter( (club) => {return club.name.toUpperCase().includes(keyword.toUpperCase()) } ) ;
       if (filteredClubs.length) {
        resolve(filteredClubs);
        console.log(filteredClubs)
        } else {
        reject(keyword + ' is not found');
        }
        
      } ,2000);
     
    });
  }
  
}
