export default async function Post() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const post: post = await data.json()
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}

type post = {
  userId: number,
  id: number,
  title: string,
  body: string
}
