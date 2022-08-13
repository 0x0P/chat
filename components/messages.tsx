import { NextPage } from "next";
import styles from '../styles/message.module.css'
import Message from "./message";

function Messages({messages} : {messages : Array<JSX.Element>}) {
  return (
    <div className={styles.messages}>
      {messages}
    </div>
  );
}

export default Messages;