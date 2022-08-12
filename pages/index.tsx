import type { NextPage } from 'next'
import styles from '../styles/index.module.css'
import { useEffect, useState } from 'react';
import * as CryptoJS from 'crypto-js'
import Splash from './splash';
import Messages from '../components/messages';

const nick = ((Math.random() + 1).toString(36).substring(7));


const Home: NextPage = () => {
  const [messages, setMessages] = useState([{}]);
  const textAray : Array<string> = []
  
  if (typeof window !== 'undefined') {
    const ws = new WebSocket("ws://localhost:6974");
    ws.onopen = function (event) {
      ws.onmessage = function (event) {
       const data : { text : string } = {text: JSON.parse(event.data).text}
       setMessages([...messages, data])
      }
    }
  }
  


  function submit(e : KeyboardEvent) {
    if (e.key === 'Enter') {
      const text = (e.target as HTMLInputElement).value
      textAray.push(text)
      console.log(textAray)
      const ws = new WebSocket("ws://localhost:6974");
      ws.onopen = function (event) {
        ws.send(JSON.stringify({ author : nick, text : text }))
      }
    }
  }
    return (
    <>
      <Splash />
        <div className={styles.container}>
          <div className={styles.left} />
          <div className={styles.messages}>
          <Messages messages={messages} />
          <div className={styles.bottom}>
          <input type="text" className={styles.input} onKeyDown={(e: any) => submit(e)} placeholder="입력해요!" />
          </div>
          </div>
        </div>
    </>
  )
}

export default Home
