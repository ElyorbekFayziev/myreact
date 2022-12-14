import Hooks from './components/hooks/index';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/index';
import List from './components/StudentList';
import Register from './components/register';
import Login from './components/login';
const Root=()=>{

    return(
        <>
        {/* <Routes>
      <Route element={<Navbar></Navbar>}>
      <Route path={'/home'} element={<Hooks></Hooks>}/>
      </Route>
    </Routes> */}
    <Routes location={'/login'}>
        <Route element={<Navbar></Navbar>}>
        <Route path='/home' element={<Hooks></Hooks>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='/students' element={<List></List>}/>
        </Route>
    </Routes>
        </>
    )
}
export default Root