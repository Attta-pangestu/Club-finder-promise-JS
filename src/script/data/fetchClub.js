class FetchClub {
    constructor(keyword) {
        this.keyword = keyword  ;
    }

    async getDataClub() {
        try {
            let url = `https://sports-api.dicoding.dev/teams/search?t=${this.keyword}` ; 
            const response = await fetch(url) ;
            const responseJSON = await response.json() ; 
            if (responseJSON.teams) {
                return Promise.resolve(responseJSON.teams) ; 
            } 
            else {
                throw new Error('Keyword tidak ditemukan') ;
            }
        }
        catch(error) {
            console.log('terjadi error : ', error) ;; 
        }
    }

}

export default FetchClub ; 