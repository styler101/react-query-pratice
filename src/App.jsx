import React from 'react';
import { PostList1 ,PostList2 ,Tabs } from './components'


const tabOptions = [
  { id: 1, label: 'Post List 1', component: <PostList1 postId={1}/>},
  { id: 2, label: 'Post List 2', component: <PostList2 postId={2}/>}
]
export default function App(){
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