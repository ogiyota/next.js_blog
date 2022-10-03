import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { client } from "./libs/client";
import Image from 'next/image';
import profilePic from '../public/image/logo192.png'
import profilePic2 from '../public/image/Nextjs.png'

//ssg
export const getStaticProps = async() =>{
  const data = await client.get({ endpoint : "blog"});
  return{
    props : {
      blog : data.contents,
    },
  };
};

const Home: NextPage = ( {blog}:any ) => {

  return (
    <div>
      <main className={styles.main} >
        <h1 className={styles.titleName}> Learn</h1>
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
      <div className={styles.textArea}> 
          <p className={styles.pText}>本サイトはNEXT.jsで作られておりReat・Next.jsの学習を記録したブログサイトです。</p>
          <p className={styles.pText}>javascriptの基礎学習を終え、ライブラリ・フレームワークの学習をしたい方にオススメです。</p>
        </div>
      <div>
        <h2 className={styles.titleMassage}>記事一覧</h2>
        <ul className={styles.title}>
          {blog.map((blog : any) => (
            
            <li className={styles.blog} key={blog} >
              <Link href={`blog/${blog.id}`}>
                <a href="">{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className={styles.titleSns}>
        <li className={styles.titleProfile}>profile</li>
        <li className={styles.titleProfile}><i className={styles.icon}>icon</i></li>
      </ul>
    </div>
  )
}

export default Home
