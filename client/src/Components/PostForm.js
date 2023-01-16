import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

import { postUrl } from '../endpoint'


export default function PostForm() {
  const [post, setPost] = useState({title: '', content: '', author: ''})
  // const history = useHistory();
  const navigate = useNavigate()

  const {title, content, author} = post

  // useEffect(() => {
  //   if (post.submitted) {
  //     history.push('/success');
  //   }
  // }, [post, history]);

  const inputValue=name=>event=>{
    setPost({...post, [name]:event.target.value})
  }

  const nav  = () => {
    console.log('NAV')
    navigate("/")
  }

  const submitValue = (event) => {
    event.preventDefault();
    const url = postUrl
    axios.post(url, post).then((res) => {
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      ).then(() => {
        setPost({title: '', content: '', author: ''})
        nav()
      })
    
    }
      
    ).catch(err => {
        Swal.fire('แจ้งเตือน',err.response.data.error,'error')
      }
    )
  }

  return (
    <div class="container" >
        <h1 class="h2 text-success">เขียนบทความ</h1>
        <form onSubmit={submitValue}>
          <div class="form-group">
            <label class="fw-bold">ชื่อบทความ</label>
            <input type="text" class="form-control" value={title} onChange={inputValue("title")} />
          </div>
          <div class="form-group">
            <label class="fw-bold">รายละเอียดบทความ</label>
            <textarea class="form-control" value={content} onChange={inputValue("content")}></textarea>
          </div>
          <div class="form-group">
            <label class="fw-bold">ชื่อผู้แต่ง</label>
            <input type="text" class="form-control" value={author} onChange={inputValue("author")} />
          </div>
          <br />
          <button type="submit" value="บันทึก" class="btn btn-primary" 
          // onClick={nav} 
          ></button>
        </form>
    </div>
  )
}
