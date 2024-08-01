import React, {useState} from 'react';
import './App.css';

const content = [
  {title: 'HTML', text: 'Learn HTML and will be nice'},
  {title: 'CSS', text: 'Learn CSS and wil be nice'},
  {title: 'JavaScript', text: 'If you will study JavaScript, you will know React'},
]

export default function App () {
  const [active, setActive] = useState(null);
  return (
    <ul>
      {content.map((item, index) => (
        <li 
          key={item.title}
          onClick={() => setActive(index)}
          className={index === active ? 'active' : null}
          >
          <h3>{item.title}</h3>
          <div className='content'>{item.text}</div>
        </li>
      ))}
    </ul>
  )
}
