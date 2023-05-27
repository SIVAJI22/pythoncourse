
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './about';
import Learn from './let learn';
import { PythonH } from './python home';
import Intro from './intro';

import Syntax from './syntax';
import Comments from './comments';
import { Variable } from './variable';
import { Login } from './login';
import Vn from './variablename';
import Multiple from './multiple';
import Out from './output';
import Global from './Global';
import Datatypes from './`pythondata';
import Number from './numbers';
import Casting from './casting';
import String from './String';
import Boolean from './Bollean';
import { Operator } from './operator';
import { List } from './List';
import Codepen from './codepen';
import { Tuple } from './Tuple';
import { Sets } from './Sets';
import { Dict } from './Dictnaries';
import { Ifelse } from './If else';
import { Singup } from './Signup';
import { While } from './while loop';
import { Forloop } from './for loop';
import { Start } from './started';
import { Function } from './function';
import { Lambda } from './Lambda';

import { Array } from './arrays';
import { Class } from './classobject';
import { Inheritance } from './inheritance';
import { Iterator } from './Iterators';
import { Poly } from './Polymor';
import { Scope } from './Scope';
import { Module } from './Module';
import { Date } from './Date';
function App() {
  return (
 
 <BrowserRouter>  
 <Routes>
  <Route path='/'  element={<Home/>}></Route>
  <Route path='/about'  element={<About/>}></Route>
  <Route path='/Lets Learn'  element={<Learn/>}></Route>
  <Route path='/code'  element={<PythonH/>}></Route>
  <Route path='/intro'  element={<Intro/>}></Route>
  <Route path='/start'  element={<Start/>}></Route>
  <Route path='/syntax'  element={<Syntax/>}></Route>
  <Route path='/comment'  element={<Comments/>}></Route>
  <Route path='/login'  element={<Login/>}></Route>
  <Route path='/V1'  element={< Variable/>}></Route>
  <Route path='/vname'  element={<Vn/>}></Route>
  <Route path='/M'  element={<Multiple/>}></Route>
  <Route path='/out'  element={<Out/>}></Route>
  <Route path='/G'  element={<Global/>}></Route>
  <Route path='/D'  element={<Datatypes/>}></Route>
  <Route path='/N'  element={<Number/>}></Route>
  <Route path='/Cast'  element={<Casting/>}></Route>
  <Route path='/String'  element={<String/>}></Route>
  <Route path="/bool" element={<Boolean />}></Route>
  <Route path="/opera" element={<Operator />}></Route>
  <Route path="/list" element={<List />}></Route>
  <Route path="/c" element={<Codepen/>}></Route>
  <Route path="/Tuple" element={<Tuple />}></Route>
  <Route path="/Sets" element={<Sets />}></Route>
  <Route path="/Dict" element={<Dict   />}></Route>
  <Route path="/if" element={<Ifelse   />}></Route>
  <Route path="/Signup" element={<Singup  />}></Route>
  <Route path="/while" element={<While  />}></Route>
  <Route path="/for" element={<Forloop  />}></Route> 
  <Route path="/func" element={<Function/>}></Route> 
  <Route path="/lambda" element={<Lambda/>}></Route> 
  <Route path="/array" element={<Array/>}></Route> 
  <Route path="/class" element={<Class/>}></Route> 
  <Route path="/inheritance" element={<Inheritance/>}></Route> 
  <Route path="/iterator" element={<Iterator/>}></Route> 
  <Route path="/poly" element={<Poly/>}></Route> 
  <Route path="/scope" element={<Scope/>}></Route> 
  <Route path="/module" element={<Module/>}></Route> 
  <Route path="/Date" element={<Date/>}></Route> 
 </Routes>

 </BrowserRouter>
  );
}

export default App;
