import React from 'react'
import ReactDOM from 'react-dom'


//var myH1 = React.createElement('h1', null, '这是一个大大的H1')

//var myDiv = React.createElement('div', { title: 'this is a div', id: 'mydiv' }, '这是一个div', myH1)

/*function Hello(props){
  return (
  <div>
      <h1>这是一个H1标签---{props.name}</h1>
  </div>)
}*/
import Hello from './components/Hello.jsx'
import HelloWorld from './components/ComponentList.jsx'

var person={
  name:'李四',
  age:20,
  sex:'男'
}
var name = "张三";
var age =20

ReactDOM.render(<div>
      <Hello {...person}></Hello>
      <HelloWorld/>
</div>, document.getElementById('app'))