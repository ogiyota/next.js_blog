import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { client } from "../src/libs/client";
import TitleLogo from '../components/titleLogo';
import TitleText from '../components/TitleText';

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
