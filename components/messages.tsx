import { NextPage } from "next";
import styles from '../styles/message.module.css'
import Message from "./message";

function Messages({messages} : {messages : Array<any>}) {
  messages = messages.slice(1)
  return (
    <div className={styles.messages}>
      {messages.map(({ text }) => ( 
        <>
          <Message message={text} />
        </>
      ))}
    </div>
  );
}

export default Messages;
