import React from 'react';
import Todo from './Todo';

export default function List(props){
    let list = props.tasks.map((item, idx)=> {
        return (
            <Todo key={idx} task={item} />
        )
      })
    
    return (
        <div>
            { list }
        </div>
    )
}