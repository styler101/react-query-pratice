import React from 'react';
import { Tabs, PostList1,PostList2 } from '../../components'

const tabOptions = [
  { id: 1, label: 'Post List 1', component: <PostList1 postId={1}/>},
  { id: 2, label: 'Post List 2', component: <PostList2 postId={2}/>}
]
export  function Home(){
  const [tabIndex, setTabIndex] = React.useState(0)
  return(
    <React.Fragment>
      <Tabs
        activeTab={{
          tabIndex, 
          setTabIndex
        }}
        options={tabOptions}
        />
       {tabOptions[tabIndex].component} 
    </React.Fragment>
  )
}