import styles from '../../styles/Home.module.css';


export default function TitleText(){
    return(
        <div className={styles.textArea}> 
          <p className={styles.pText}>本サイトはNext.jsで作られておりReact・Next.jsの学習を記録したブログサイトです。</p>
          <p className={styles.pText}>javascriptの基礎学習を終え、ライブラリ・フレームワークの学習をしたい方にオススメです。</p>
        </div>
    )
}