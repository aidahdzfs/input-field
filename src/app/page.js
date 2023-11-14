'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {

  const [input, setInput] = useState('aida')
  const [nama, setNama] = useState(input)


  const handlerGantiNama = (val) => {
    console.warn(val.target.value)
    setInput(val.target.value)
    setNama(input)

  }

  return (
    <div className='body'>
      <div className="banner-container">
        <div className="header-banner-wrapper">
          <div className="foto">
            <Image
            src="/assets/aida.png"
            fill
            objectFit='contain'
            />
          </div>
          <div className="nama">
            {
              nama?
              <h1>{input}</h1> :null
            }
            <div className="bio-nim">
              <p>D121211037</p>
              <p>Teknik Informatika</p>
            </div>
          </div>
        </div>
        <div className='inputfields'>
          <input type='text' onChange={handlerGantiNama}/>
        </div>
        <div className="cta" onClick={(val)=>setNama(true)}>
          <button>
            <p>ganti nama</p>
          </button>
        </div>
      </div>
    </div>
  )
}
