import styles from '../styles/Home.module.css';
import Image from 'next/image';
import profilePic from '../public/image/logo192.png'
import profilePic2 from '../public/image/Nextjs.png'


export default function TitleLogo(){
    return(
      <div>
        <main className={styles.main} >
          <h1> Learn</h1>
        </main >
        <div className={styles.logo}>
          <div className={styles.logo2}>
            <Image src={profilePic} alt="logo" className={styles.react}/>
          </div>  
          <p className={styles.logoText}>&amp;</p>
          <div className={styles.logo2}>
            <Image src={profilePic2} alt="logo" className={styles.next}/>
          </div>
        </div>
      </div>
    )
}