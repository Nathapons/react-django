import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function BlogTable() {
    const [blogs, setBlogs] = useState([])

    const fetchData = () => {
      const url = `${process.env.REACT_APP_API}/posts/`
      axios.get(url).then(res => {
          setBlogs(res.data)
      }).catch(err => {
          console.warn(err)
      })
    }
  
    useEffect(()=> {
      fetchData()
    }, [])

    return (
        <table class="table table-hover" style={{marginTop: "20px"}}>
            <thead class="thead-dark">
                <th scope="col">id</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Author</th>
                <th scope="col">Created at</th>
                <th scope="col">Updated at</th>
            </thead>
            <tbody>
            {blogs.map((blog, index)=> (
                <tr>
                    <th scope="row">{blog.id}</th>
                    <td><p className='' to={`/post/${blog.id}`}>{blog.title}</p></td>
                    <td>{blog.content}</td>
                    <td>{blog.author}</td>
                    <td>{blog.created_at}</td>
                    <td>{blog.updated_at}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
