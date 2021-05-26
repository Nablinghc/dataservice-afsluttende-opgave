import { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'


// Apikald
import { hentMonarker, sletMonark } from '../helpers/apikaldMonark'


// react-icons 
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';




const MonarkAdmin = () => {

    // State (til at rumme data)
    const [monark, setMonark] = useState()
    const [fejl, setFejl] = useState()
    const [besked, setBesked] = useState()



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

    }, [besked])



    // Håndter slet ved klik på slet-knap
    const handleSlet = (monarkId) => {

        if (window.confirm("Vil du slette denne? De kan ikke fortrydes bagefter!") ) {

            console.log("Her skal slettes ...", monarkId)
            // Slet... husk at sende ID med på den der skal slettes

            sletMonark(monarkId).then(data => {

                console.log(data);
                setBesked(data);
                setFejl(); // tøm fejlbesked, hvis der har været en fejl og fejlen nu er løst

            }).catch(err => {

                console.log(err)
                setFejl("Der er sket en fejl!")
                

            })

        }

    }


    return (

        <div>

            <h1>Ret eller Slet en monark</h1>

            {/* ---------- Data er klar og map'es ud */}
            {
                monark &&
                <Fragment>
                    <h2>Antal monarker: {monark.length}</h2>
                    {
                        monark.map(t => (
                            // første element i map skal altid have en key som er unik - her bruger vi _id fra Mongo
                            <div key={t._id}>
                                <p>
                                    <AiFillDelete onClick={ () => handleSlet(t._id) } />
                                    
                                    <Link to={"/retmonark/" + t._id}>
                                    <AiFillEdit />
                                    </Link>
                                    
                                    
                                    {/* <button onClick={() => handleSlet(t._id)}>X</button> */}

                                    {t.navn} ... {t._id}

                                </p>
                            </div>
                        ))
                    }




                </Fragment>
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

export default MonarkAdmin