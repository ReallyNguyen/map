import styles from '@/styles/About.module.css'
import data from '../data/employee.json'
import { useState } from 'react'
import Card from '@/components/Card'


export default function About() {
    const [information, setInformation] = useState([...data])
    console.log(data)
    return (
        <>
            {
                information && information.map((info, index) => {
                    if (info.name.toLowerCase() === "brown") {
                        return (
                            <Card key={index} name={info.name}/>
                        )

                    }
                })
            }
        </>

    )
}