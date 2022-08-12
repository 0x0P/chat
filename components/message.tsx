import { NextPage } from "next";
import styles from '../styles/message.module.css'

interface Props{
    message : string
}
const Message: NextPage<Props> = (props) => {
    return(<div className={styles.message}>{props.message}</div>)
}

export default Message