'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {

  const [input, setInput] = useState('')
  const [nama, setNama] = useState('aida')


  const handlerGantiNama = () => {
    setNama(input);
  }

  const handlerInput = (val) => {
    setInput(val);
  }

  function enterButton(e) {
    if (e.code == "Enter") handlerGantiNama();
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
            <h1>{nama}</h1>
            <div className="bio-nim">
              <p>D121211037</p>
              <p>Teknik Informatika</p>
            </div>
          </div>
        </div>
        <div className="cta">
          <input
            placeholder='Siapa nama anda?'
            onInput={(val) => handlerInput(val.target.value)}
            onKeyDown={(value) => {
              enterButton(value)
            }}
          ></input>
          <button onClick={() => {
              handlerGantiNama();
            }}>
            <p>ganti nama</p>
          </button>
        </div>
      </div>
    </div>
  )
}
