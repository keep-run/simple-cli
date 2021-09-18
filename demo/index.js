import React from 'react'
import { render } from 'react-dom'
import './index.css'
import './index.less'
import './index.styl'
import imgSrc from './img/test.jpg'

function handleFetch() {
  fetch('/test', {
    method: 'get',
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
      "X-Requested-With": "XMLHttpRequest"    //手动增加字段以识别ajax请求
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    });
}
render(
  <div className="container">
    <div>this is a react app 1</div>
    <button onClick={() => { handleFetch() }}>test</button>
    <img
      width='537'
      height='342'
      src={imgSrc}
    // src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'
    />
  </div>,
  document.getElementById('root') || document.body
)