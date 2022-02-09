import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss'

export default function Post({post}) {
  return (
      <div className="post">
      <div className="rounded border pre-parent" >
          <div className="pre-info pre-header">
              <div className="row">
                <div className="col-sm-5">
                    <h4>{post.title}</h4>
                </div>
                <div className="col-sm-7 text-right">
                <a
                style={{width:'7rem'}}
                className="btn btn-success">show paste
                </a>
                </div>
                </div>
          </div>
          <br />
          <div className="well well-sm well-white pre">
                <div className="text" style={{fontFamily:'monospace'}}>
                    <ul style={{listStyleType:'none'}}>
                        <li style={{fontWeight: 'normal', verticalAlign:'top'}}>
                            <div style={{font: 'normal normal 1em/1.2em monospace', margin:0, padding:0, background:'none', verticalAlign:'top',verticalAlign: 'middle'}}>
                                {/* {content} */}
                                {post.content}
                            </div>
                        </li>
                    </ul>
                </div>
          </div>
          <div className="pre-info pre-footer border">
                <div className="row">
                    <div className="col-sm-6">
                        {/* {author}  {date}  */}
                        {`${post.author} at ${new Date(post.date).toString().slice(0,24)}`}
                    </div>
                </div>
          </div>
      </div>
    </div>
  )
}
