import axios from 'axios'

// Egen monark-app - kører på port 5056

const api = {
    baseUrl: 'http://localhost:5056/'
}


// ---- Monarker -----------------------------------------
// ------------------------------------------------------


// -------- GET Hent alle
export const hentMonarker = () => {

    // GET http://localhost:5056/monark
    let response = axios.get( api.baseUrl + "monarker" )
        .then( res => { return res.data } )

    return response

}


// -------- GET Hent udvalgt ud fra _id
export const hentMonarkUdFraId = (monarkId) => {

    // GET http://localhost:5056/monark/60acd8958cd4844330ca86a4
    let response = axios.get( api.baseUrl + "monark/" + monarkId )
        .then( res => { return res.data } )

    return response

}


// -------- POST - opret ny monark ... ny monark består af titel og monark
export const opretMonark = (monarkdata) => {

    // POST http://localhost:5056/monarker/admin
    // axios.post(url, postdata)
    let response = axios.post( api.baseUrl + "monarker/admin", monarkdata )
        .then( res => { return res.data } )

    return response

}

// -------- DELETE - slet monark (modtager id på den der skal slettes)
export const sletMonark = (monarkId) => {

    // DELETE http://localhost:5056/monark/60a3a750f6830753dc7490c9
    let response = axios.delete( api.baseUrl + "monarker/admin/" + monarkId )
         .then( res => { return res.data } )

    return response

}

// ---------- put  - ret monark (modtager og ændrer data)
export const retMonark = ( monarkId, monarkdata ) => {

    let response =  axios.put( api.baseUrl + "monark/" + monarkId, monarkdata )
        .then(res => { return res.data } )

    return response
}