'use client'

import '@app/diary/diary.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Diary(){
    const [judul, setJudul] = useState([])
    const [isi_diary, setIsi_diary] = useState([])

    const endpointAPI ='https://6555c45184b36e3a431e48d5.mockapi.io/diary'

    async function getDiary (){
        try{
            const res = await axios.get(endpointAPI)
            const data = res.data

            const judul = data.map((item)=>(item.judul))
            setJudul(judul)

            const isi_diary = data.map((item)=>(item.isi_diary))
            setIsi_diary(isi_diary)
        }
        catch(error){
            console.log("error fetching data: ${error}")
        }
    }

    useEffect(()=>{
        getDiary();
    }, [])

    return(
        <>
        {judul.length>0 ? (
            <ul>
                {judul.map((item, idx)=>(
                    <li>
                        <div className="diary-container">
                            <h1>{judul[idx]}</h1>
                            <p className="p-diary">{isi_diary[idx]}</p>
                        </div>
                    </li>
                ))}
            </ul>
        ):
        (
            "API loading.."
        )}
        
        </>
    )
}