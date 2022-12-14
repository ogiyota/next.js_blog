import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { client } from "../src/libs/client";
import TitleLogo from '../components/titleLogo';
import TitleText from '../components/TitleText';
import { GetStaticProps } from 'next'

interface BlogData {
  title : string;
  id : string;
  blog : any
  
}
//ssg
export const getStaticProps:GetStaticProps = async() =>{
  const data = await client.get({ endpoint : "blog"});
  return{
    props : {
      blog : data.contents,
    },
  };
};

const Home: NextPage<BlogData> = ( {blog}:BlogData ) => {

  return (
    <div>
        <title>
          Learn React and Next.js
        </title>
        <meta property='og:title' content="Learn React and Next.js" key="title"/>
        <meta property='description' content="React・Next.jsを学びたい初学者方向けの学習ブログサイトです" key="description"/>
        <meta property='image' content="../public/image/logo192.png"/>
        <meta property='twitter:image' content="../public/image/logo192.png"/>
      <TitleLogo/>
      <TitleText/>
      <div className={styles.blogs}>
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
    </div>
  )
}

export default Home
