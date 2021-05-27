import { useState, useEffect } from 'react'

// Apikald
import { hentMonarker } from '../helpers/apikaldMonark'

const Monarker = () => {



    // State (til at rumme data)
    const [monarker, setMonarker] = useState()
    const [fejl, setFejl] = useState()



    // UseEffect (til at kalde api'et når comp er loadet)
    useEffect(() => {

        hentMonarker().then(data => {

            console.log(data);
            setMonarker(data);
            setFejl(); // tøm fejlbesked, hvis der har været en fejl og fejlen nu er løst

        }).catch(err => {

            console.log(err)
            setFejl("Der er sket en fejl!")
            setMonarker()

        })

    }, [])






    return (

        <div>

            <h1>Vis alle monarker</h1>

            {/* ---------- Data er klar og map'es ud */}
            {
                monarker &&
                <>
                    <h2>Antal monarker: {monarker.length}</h2>
                    {
                        monarker.map(t => (
                            // første element i map skal altid have en key som er unik - her bruger vi _id fra Mongo
                            <div key={t._id}>
                                <h1>{t.navn}</h1>
                                <p>{t.land}</p>
                                <p>{t.historie}</p>
                                <p>{t.foedtaar}</p>
                                <p>{t.doedaar}</p>
                                <img className="pictures" src={"http://localhost:5056/images/" + t.billede}  style={{height: "200px"}} />
                                

                            </div>
                        ))
                    }




                </>
            }





            {/* ---------- Vi venter på data (endnu ingen data - og heller ingen fejl) */}
            {
                !monarker && !fejl &&
                <h1>Loader ....</h1>

            }


            {/* ---------- Der er opstået en fejl */}
            {
                fejl &&
                <h1>{fejl}</h1>
            }


        </div>
    )
}

export default Monarker
