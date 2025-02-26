import SearchForm from "@/components/SearchForm";
import Image from "next/image";
import StartUpCard from "@/components/StartUpCard";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?:string}>
}) {

  const query = (await searchParams).query
  const posts = [{
    _createdAt:new Date(),
    views:55,
    author:{_id:1,name:`Elon Musk`},
    _id:1,
    description:"This is a description ",
    image:"https://media.istockphoto.com/id/2048631679/photo/signpost-a-cyber-ai-hand-shows-the-business-woman-with-binoculars-where-to-look-find.jpg?s=1024x1024&w=is&k=20&c=j1aHoA7RtIhuKdStrbn45s-4s1F3GcpfLAqn5ziC628=",
    catagory:`robots`,
    title:`we robots `
  }]
  return (
    <>
      <section className="pink_container"> 
        <h1 className="heading">Pitch your startup,<br/>
        connect with Entrepreneurs
        </h1>


        <p className="sub-heading !max-w-3xl">
          Submit ideas,vite on pitches ,and Get noticed in virtual competitions
        </p>

        <SearchForm query={query}/>
      </section>

      <section className="section-container">
        <p className="text-30-semibold">
          {query?`search results for ${query} `:`All startup`}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length>0 ? (
            posts.map((post:StartupCardType,index:number) => (
              <StartUpCard key={post?.id} post={post}/>
            ))
          ):(
            <p className="no-results">No startups found</p>
          )}
        </ul>


      </section>
    </>
  );
}
