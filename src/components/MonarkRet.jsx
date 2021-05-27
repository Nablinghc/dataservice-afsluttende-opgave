import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

// Apikald
import { hentMonarkUdFraId, retMonark } from '../helpers/apikaldMonark'


const MonarkRet = (props) => {
    console.log("🚀 ~ file: MonarkRet.jsx ~ line 4 ~ MonarkRet ~ props", props.match.params.id)

    const [monark, setMonark] = useState()
    const [fejl, setFejl] = useState()
    const [loader, setLoader] = useState()

    // History giver mulighed for at "gå tilbage" i browserhistorik
    const history = useHistory();


    // kald api for at hente Monark som skal rettes
    useEffect(() => {

        hentMonarkUdFraId(props.match.params.id).then(data => {

            setMonark(data);
            setFejl(); // tøm fejlbesked, hvis der har været en fejl og fejlen nu er løst

        }).catch(err => {

            console.log(err)
            // Giv besked
            setFejl("Der er sket en fejl!")

        })
    }, [])

    // Funktion som sender input til apikald (som sender til api'et/backend)
    const handleSubmit = (e) => {

        e.preventDefault(); // forhindrer reload af component
        // setloader(true);

        // Pak Monark ind i formdata til api
        const formdata = new FormData(e.target);

        retMonark(props.match.params.id, formdata).then(data => {

            console.log("🚀 ~ file: MonarkRet.jsx ~ line 53 ~ handleSubmit ~ data", data)
            setLoader(false)
            // Hvis gået godt - redirect til "oversigten"
            history.goBack();

        }).catch(error => {

            console.log()
            setFejl("Der er sket en fejl")    // gem en fejlbesked - kan vises til brugeren
            setLoader(false)

        })



    }



    return (
        <div>
            <h1>Ret Monark med ID: {props.match.params.id}</h1>

            <form onSubmit={handleSubmit}>

            <input name="navn" type="text" placeholder="Navn her ..." />
                <br />
                <input name="land" type="text" placeholder="Land her ..." />
                <br />
                <input name="historie" type="text" placeholder="Historie her ..." />
                <br />
                <input name="foedtaar" type="text" placeholder="Fødselsår her ..." />
                <br />
                <input name="doedaar" type="text" placeholder="Dødsår her ..." />
                <br />
                <input name="billede" type="file" placeholder="Billede her ..." />
                <br />
                <input type="submit" value="SEND" />

            </form>
        </div>

        
    )
}





export default MonarkRet
