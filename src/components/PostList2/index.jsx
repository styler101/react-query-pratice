import React from 'react';
import {Loading} from '../Loading'
import { baseUrl } from '../../services'
import {useQuery} from 'react-query'
import '../styles.css'

export function PostList2(props){
  const {postId} = props;

  const posts2Query = useQuery({
    queryKey:['posts', postId],
   queryFn: () => fetch(`${baseUrl}/posts?=${postId}`).then((response) => response.json())
  })

  if(posts2Query.isLoading) return <Loading/>

  return(
    <div className='container'>
    <h1> Post List 2</h1>
    <ul>

      {posts2Query.data.map((item) => (
        <React.Fragment key={item.id}>
          <strong> Title: {item.title}</strong>
          <p> {item.body}</p>
        </React.Fragment>
      ))}
    </ul>
  </div>
  )
}