import axios from 'axios';
const URL = 'http://localhost/api-phpreact/artists';

export function getSearchedArtistList(keywords){
    const request = axios.get(`${URL}/artists.php?q=${keywords}`)
                    .then(response => response.data)

                  // console.log("search request : " + request);    
    return {
        type: 'GET_ARTISTS',
        payload: request
    }
}

export  function getArtistListAll(){
   
    const request = axios.get(`${URL}/artists.php?_limit=6`)
   .then(response => response.data)

   console.log("all request : " +request);
   return {
    type: 'GET_ARTISTS_ALL',
    payload: request   
}
   
}
//0705264674




export function artistDetail(id){
    const request = axios.get(`${URL}/artists.php?id=${id}`)
                    .then(response => response.data)

    return {
        type: 'GET_ARTISTS_DETAIL',
        payload: request   
    }
}


export function clearArtistDetail(){
    return{
        type:'CLEAR_ARTIST_DETAIL',
        payload:null
    }
}