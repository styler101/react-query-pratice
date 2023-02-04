import React from "react";
import { useQuery, useMutation, isError, useQueryClient } from 'react-query'
import { delay } from './utils/Timer'
import './App.css'

const posts = [
  { id: 1, title: ' POST 1 '},
  { id: 2, title: ' POST 2 '}
]

// query -> you get data from the query
// mutation -> set data 
export function App() {
 const queryClient = useQueryClient();
 const postsQuery = useQuery({
    queryKey: ['posts'], // unique identifier
    queryFn: () => delay(1000).then(() => [...posts]  )}
  )

 const newPostsMutation = useMutation({
  mutationFn:() => delay(1000).then(() =>  posts.push({ id: Math.random(), title:`POST ${posts.length + 1}`})),
  onSuccess: () => {
    queryClient.invalidateQueries(['posts'])
  }
 })
  if(postsQuery.isLoading) return  <h1> Loading...</h1>
  if(postsQuery.isError) return <h1> Ocorreu um erro no sistema.</h1>

  console.log(postsQuery.data)
  return (
  <React.Fragment>
    <button  disabled={newPostsMutation.isLoading}onClick={() => newPostsMutation.mutate('New Post')}> Add New Post</button>
    
  {postsQuery.data.map((item) => (
   <React.Fragment key={item.id}>
    <div>
     <span> name: {item.title}</span>
     <strong> Id: {item.id}</strong>
    </div>
   </React.Fragment>
  ))}
  </React.Fragment>  
  )
}

export default App;
