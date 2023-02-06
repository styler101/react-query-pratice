import React from 'react';
import { useQuery } from 'react-query'
import { Loading } from '../Loading'
import { baseUrl } from '../../services'
import '../styles.css'

export function PostList1(props){
  const { postId } = props;

  const postQuery1 = useQuery({
    queryKey:['posts', postId],
    queryFn: () => fetch(`${baseUrl}/posts?userId=${postId}`).then((response) => response.json())
  })

  console.log(postQuery1.data)
  
 
  if(postQuery1.isLoading) return <Loading/>
  return(
    <div className='container'>
      <h1> Post List 1 </h1>
      <ul>
        {postQuery1.data.map((item) => (
          <React.Fragment key={item.id}>
            <strong> Title: {item.title}</strong>
            <p> {item.body}</p>
          </React.Fragment>
        ))}    
      </ul>
    </div>
  )
}