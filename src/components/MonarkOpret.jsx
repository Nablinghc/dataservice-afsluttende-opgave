import { useState } from 'react'

// Apikald
import { opretMonark } from '../helpers/apikaldMonark'



const MonarkOpret = () => {


    // state til svar fra api - om der blev oprettet noget nyt eller ej
    const [besked, setBesked] = useState()
    const [fejl, setFejl] = useState()
    const [loader, setloader] = useState(false)


    // Funktion som sender input til apikald (som sender til api'et/backend)
    const handleSubmit = (e) => {

        e.preventDefault(); // forhindrer reload af component
        setloader(true);

        // Pak Monark ind i formdata til api
        const formdata = new FormData(e.target);

        opretMonark(formdata).then(data => {
            console.log(data);
            setBesked(data) // opsnap besked/response fra api
            setFejl()       // tømmer fejl beskeden
            e.target.reset(); // reset/tøm formularfelter

        }).catch(error => {

            console.log()
            setFejl("Der er sket en fejl")    // gem en fejlbesked - kan vises til brugeren
            setBesked()                         // tøm evt. besked fra tidligere - nu er der en fejl i stedet
        })



    }


    return (
        <div>


            <h1>Opret ny Monark</h1>
            {/* Der er oprettet Monark - giv besked om det heldige udfald */}
            {
                besked &&
                <div>
                    <h2>Monark er oprettet:</h2>
                </div>
            }

            {/* Der er endnu ikke svar fra api'et -- vi afventer svar */}
            {
                loader &&
                <h2>Loader...</h2>
            }


            {/* Der er opstået fejl - giv besked til brugeren */}
            {
                fejl &&
                <h2>Der er fejl</h2>
            }





            <form onSubmit={handleSubmit}>

                <input name="titel" type="text" placeholder="Titel her ..." />
                <br />
                <input name="Monark" type="text" placeholder="Monark her ..." />
                <br />
                <input type="submit" value="SEND" />

            </form>


        </div>
    )
}

export default MonarkOpret
