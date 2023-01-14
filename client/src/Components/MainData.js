import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { postUrl } from '../endpoint'

export default function MainData() {
  const [blogs, setBlogs] = useState([])

  const fetchData = () => {
    const url = postUrl
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
    <div class="container mt-3">{blogs.map((blog, index)=> (
        <div className="row" key={index} style={{borderBottom: "1px solid sliver"}}>
            <div className="col pt-3 pb-2">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <p>ชื่อผู้แต่ง: {blog.author}, เผยแพร่วันที่ {new Date(blog.created_at).toLocaleString()}</p>
                <div>
                  <Link to={`/${blog.id}`} class="btn btn-warning">แสดงรายละเอียดบทความ</Link>
                  <button class="btn btn-danger mx-2">ลบบทความ</button>
                </div>
            </div>
        </div>
    ))}</div>
  )
}
