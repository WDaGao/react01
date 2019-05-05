import React from 'react';

import CommentItem from './ComponentItem.jsx'

export default class HelloWorld extends React.Component{
    constructor(props){
      super()
  
      this.state={
        CommentList : [
          { user: '张三', content: '哈哈，沙发1' },
          { user: '张三2', content: '哈哈，板凳2' },
          { user: '张三3', content: '哈哈，凉席3' },
          { user: '张三4', content: '哈哈，砖头4' },
          { user: '张三5', content: '哈哈，楼下山炮5' }
      ]
      }
    }
    
    render(){
      return <div>
        {this.state.CommentList.map((item,i)=>{
          return <CommentItem key={i} user={item.user} content={item.content}></CommentItem>
        })}
      </div>
    }
  }