'use client'

import { useState } from 'react'
import Image from 'next/image'
import '@styles/home.css'

export default function Home() {

  const [input, setInput] = useState('')
  const [nama, setNama] = useState('aida')
  const [kosong, setKosong] = useState(true)


  const handlerGantiNama = () => {
    setNama(input);
  }

  const handlerInput = (val) => {
    setInput(val);
    setKosong(val.trim() === '');
  }

  function enterButton(e) {
    if (e.key == "Enter") handlerGantiNama();
  }

  let content;
  if (kosong) {
    content = (
      <button className="active-banner">
        <p>ganti nama</p>
      </button>
    );
  } else {
    content = (
      <button className="cta-banner" onClick={() => {
        handlerGantiNama();
      }}>
      <p>ganti nama</p>
    </button>
    );
  }

  return (
    <>
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
              <p>Teknik Informatikaaaa</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          <input
          className='input-banner'
            placeholder='Siapa nama anda?'
            onInput={(val) => handlerInput(val.target.value)}
            onKeyDown={(value) => {
              enterButton(value)
            }}
          ></input>
          {content}
        </div>
      </div>
    </>
  )
}
