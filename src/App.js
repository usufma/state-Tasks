
import './App.css';
import Incdec from './class-state';
import Yamaha from './yamaha';
import Objiter from './objiter';
import Buton from './func-use-state';
import ColorChange from './color-change';
import Use from './login-out';

function App() {
  const employee=[

    {
    name:"Alex",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ]
    
    },
    {
    name:"Anna",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
    
    }
    
    
    ]
  return (
    <div className='container'>
    <div className="App">
      <h1 className='h'>STATE Tasks</h1>
      <h3>Class State</h3>
    <div><h1>task 3  </h1><Incdec/></div>
    <div><h1>task 4 Yamaha </h1><Yamaha/></div>
    </div>

    <div className='oi'><h1>Objet Data </h1><Objiter  d={employee}/></div>

    <div className='container'>
    <h1>Function useState</h1>
    <div className='bt'><Buton/></div>

    <div className='bt'><ColorChange/></div>

    <h1>Sign In & Out</h1>
    <div><Use/></div>

    
    </div>

    </div>
  );
} 

export default App;
