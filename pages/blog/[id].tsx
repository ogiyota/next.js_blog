import {client} from "../../src/libs/client";
import Head from "next/head";

export const getStaticProps = async (context : any) => {
    const id =context.params.id;
    const data = await client.get( {endpoint: "blog", contentId: id });

    return{
        props: {
            blog: data,
        },
    };
};
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content: any) => `/blog/${content.id}`);
    return{
        paths,
        fallback: false,
    };
  };

export default function BlogId( {blog}:any ) {
    return(
        <div>
            <Head>
                <title>{blog.metaTitle}</title>
                <meta property="og:title" content={blog.metaTitle} key="title"/>
                <meta property="og:description" content={blog.descripution} key="description"/>
            </Head>
          <main>
            <h1 className="titleName">{blog.title}</h1>
            <div className="word">
              <div dangerouslySetInnerHTML={{__html: `${blog.body}` }}></div>
            </div>
          </main>
        </div>
        
    );
}