import Hooks from './components/hooks/index';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/index';
const Root=()=>{

    return(
        <>
        {/* <Routes>
      <Route element={<Navbar></Navbar>}>
      <Route path={'/home'} element={<Hooks></Hooks>}/>
      </Route>
    </Routes> */}
    <Routes>
        <Route element={<Navbar></Navbar>}>
        <Route path='/home' element={<Hooks></Hooks>}/>
        <Route path='/about' element={<h1>about</h1>}/>
        <Route path='/service' element={<h1>service</h1>}/>
        <Route path='/students' element={<h1>students</h1>}/>
        </Route>
    </Routes>
        </>
    )
}
export default Root