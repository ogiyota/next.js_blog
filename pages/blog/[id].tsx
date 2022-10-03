import {client} from "../libs/client";

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
        <main>
          <h1 className="titleName">{blog.title}</h1>
          <div className="word">
            <div dangerouslySetInnerHTML={{__html: `${blog.body}` }}></div>
          </div>
        </main>
        
    );
}