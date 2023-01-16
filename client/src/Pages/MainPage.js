import React from 'react'
import MenuBar  from '../Components/MenuBar'
import BlogTable from '../Components/BlogTable'

export default function Main() {
  return (
    <div>
      <MenuBar />
      <div class="container-md">
        <div>
          <h3 class="text-right text-success" style={{marginTop: "20px"}}>Blog list</h3>
          <a href="/post" class="btn btn-success" style={{marginTop: "10px"}}>Create</a>
        </div>
        <BlogTable />
      </div>
    </div>
  )
}
