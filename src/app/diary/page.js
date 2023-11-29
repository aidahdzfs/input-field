'use client'
import '@app/diary/diary.css';
import { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

export default function Diary(){
  
    const [judul, setJudul] = useState([])
    const [isi_diary, setIsi_diary] = useState([])
    const [isData, setIsData] = useState([]);
    const [tulisJudul, setTulisJudul] = useState("");
    const [tulisIsi, setTulisIsi] = useState("");

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

    async function postDiary(){
      try {
        const res = await axios.post(endpointAPI, {
          judul: tulisJudul,
          isi_diary: tulisIsi,
        });
        setIsData([...isData, res.data]);

        setTulisJudul('');
        setTulisIsi('');
        getDiary();
      } catch(error){
        alert("failed to POST API" + error)
      }
    }

    function handlerInputJudul (event) {
      event.preventDefault();
      setTulisJudul(event.target.value)
  
    }
    function handlerInputIsi (event) {
      event.preventDefault();
      setTulisIsi(event.target.value)
  
    }
    function handlerSubmit (event) {
      postDiary();
      setTulisJudul('');
      setTulisIsi('');
    }
    function enterButton(e) {
      if (e.key == "Enter") {
        handlerSubmit();
      }
    }

    useEffect(()=>{
        getDiary();
    }, [])

    return(
        <>
        <div className="cta-container">
          <input
            name='input-judul'
            type="text"
            placeholder='tulis judul...'
            onChange={handlerInputJudul}
            onKeyDown={(value) => {
              enterButton(value)
            }}
            value = {tulisJudul}
          />
          <input
            name='input-isi'
            type="text"
            placeholder='tulis isi diary...'
            onChange={handlerInputIsi}
            onKeyDown={(value) => {
              enterButton(value)
            }}
            value = {tulisIsi}
          />
          {tulisJudul && tulisIsi ? (
            <button className='cta' onClick={postDiary}>
              <p>Submit</p>
            </button>
          ) : (
            <button className='active'>
              <p>Submit</p>
            </button>
          )}
          
        </div>
        {isData ? judul.length>0 ? (
            <ul>
                {judul.map((item, idx)=>(
                    <Link href={`/diary/${item}/${isi_diary[idx]}`}>
                    <li key= {idx}>
                        <div className={`diary-container ${idx === judul.length - 1? 'last-item' :''}`}>
                            <h1>{judul[idx]}</h1>
                            <p className="p-diary">{isi_diary[idx]}</p>
                        </div>
                    </li>
                    </Link>
                ))}
            </ul>
        ):(
            "API loading.."
        ) : (
          "nothing API"
        )
        }
        
        </>
    )
}