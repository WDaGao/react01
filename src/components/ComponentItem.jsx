import React from 'react'
import ComponentStyle from '../css/ComponentStyle.css';
console.log(ComponentStyle);
export default function CommentItem(props){
    return <div className={ComponentStyle.box}>
    <h1 className={ComponentStyle.title}>用户:{props.user}</h1>
    <p className={ComponentStyle.content}>评论:{props.content}</p>
  </div>
}