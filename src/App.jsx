import React from "react";
import { useQuery, useMutation, useQueryClient }from 'react-query'
import { wait } from './utils/Timer'
import './App.css'

const posts = [
  { id: 1, title: ' POST 1 '},
  { id: 2, title: ' POST 2 '}
]

// query -> you get data from the query
// mutation -> change Data 
// formas de se salvar chaves com o react-query
// /posts -> ["posts"]
// /posts/1 -> ["posts", post.id],
// /posts?authorid=1 -> ["posts", { authorId: 1}]
// /posts/2/comments -> ["posts", post.id , "comments"]

export function App() {
 
  const queryClient = useQueryClient();

  const newPostsMutation = useMutation({
    // essa função será responsável por alterar as informãções do nossos posts
     mutationFn: () =>  wait(1000).then(() =>{
      return posts.push({ id: Math.random(), title: 'New Post'})
    }),
    // Ira invalidar o nossa chave do posts e ira alterar as mesmas.
    onSuccess: () =>{
      queryClient.invalidateQueries(['posts'])
    }


  })

  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () =>  wait(1000).then(() => posts)
  })
  
  console.log(postsQuery);

  if(postsQuery.isLoading )  return <h1> Carregando as informações...</h1>
  if(postsQuery.isError) return <h1> Ocorreu um erro ao processar a requisição.</h1>
  


  return (
  <React.Fragment>
      <button  disabled={newPostsMutation.isLoading} onClick={() => newPostsMutation.mutate('New Post')}> Add New Post</button>
       {postsQuery.data.map((item) => (
        <React.Fragment key={item.id}>
          <div style={{display: 'block'}}> 
           <strong>  ID: <span> {item.id} </span></strong>
           <strong>  Name: <span> {item.title} </span></strong>
          </div>
        </React.Fragment>
       ))}
 
  </React.Fragment>
  )
}

export default App;
