import {client} from "../../src/libs/client";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from 'next'

interface BlogData {
  title : string;
  day : string;
  blog : any;
  body : string;
  
}


export const getStaticProps:GetStaticProps = async (context : any) => {
    const id =context.params.id;
    const data = await client.get( {endpoint: "blog", contentId: id });

    return{
        props: {
            blog: data,
        },
    };
};
export const getStaticPaths:GetStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content: any) => `/blog/${content.id}`);
    return{
        paths,
        fallback: false,
    };
  };

export default function BlogId( {blog}:BlogData) {
    return(
        <div>
            <Head>
                <title>{blog.metaTitle}</title>
                <meta property="og:title" content={blog.metaTitle} key="title"/>
                <meta property="og:description" content={blog.descripution} key="description"/>
            </Head>
          <main>
            <h2 className="titleName">{blog.title}</h2>
            <p className="day">{blog.day}</p>
            <div className="word">
              <div dangerouslySetInnerHTML={{__html: `${blog.body}` }}></div>
            </div>
            <div className="back">
              <Link href={"/"}>
                <a>
                  戻る
                </a>
              </Link> 
            </div>
          </main>
        </div>
        
    );
}