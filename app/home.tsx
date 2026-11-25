import { promises as fs } from 'fs'

export default async function HomeC() {
  const data = await fs.readFile('./content/home.json', 'utf-8')
  const homeContent: home = await JSON.parse(data)
  
  return (
    <>
      <h1>{homeContent.title}</h1>
      <p>{homeContent.body}</p>
      <img src={homeContent.image} width={250} />
    </>
  )
}

type home = {
  title: string,
  body: string,
  image: string
}
