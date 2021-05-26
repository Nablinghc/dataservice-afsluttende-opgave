import { useState, useEffect } from 'react'

// Apikald
import { hentMonarker } from '../helpers/apikaldMonark'

const Monark = () => {



    // State (til at rumme data)
    const [monark, setMonark] = useState()
    const [fejl, setFejl] = useState()



    // UseEffect (til at kalde api'et når comp er loadet)
    useEffect(() => {

        hentMonarker().then(data => {

            console.log(data);
            setMonark(data);
            setFejl(); // tøm fejlbesked, hvis der har været en fejl og fejlen nu er løst

        }).catch(err => {

            console.log(err)
            setFejl("Der er sket en fejl!")
            setMonark()

        })

    }, [])






    return (

        <div>

            <h1>Vis alle monarker</h1>

            {/* ---------- Data er klar og map'es ud */}
            {
                monark &&
                <>
                    <h2>Antal monarker: {monark.length}</h2>
                    {
                        monark.map(t => (
                            // første element i map skal altid have en key som er unik - her bruger vi _id fra Mongo
                            <div key={t._id}>
                                <h1>{t.titel}</h1>
                                <p>{t.monark}</p>
                            </div>
                        ))
                    }




                </>
            }





            {/* ---------- Vi venter på data (endnu ingen data - og heller ingen fejl) */}
            {
                !monark && !fejl &&
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

export default Monark
