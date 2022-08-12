import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/splash.module.css";
const Splash: NextPage = () => {

const [display, setDisplay] = useState(true)
useEffect(() => {
    setTimeout(() => {
        setDisplay(false)
    }, 1000)
})
    return(
        <div data-display={display} className={styles.splash}>
            <div className={styles.container}>
            <h1 className={styles.text}>Qust Developer Preview</h1>
            <div className={styles.spinner} />
            </div>
        </div>
    )
}
export default Splash