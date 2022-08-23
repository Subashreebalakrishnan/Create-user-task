import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Users from './Users';
import Table from './Table';
import Products from './Products';
import Createuser from './Createuser';
import Userview from './Userview';
import Edituser from './Edituser';
import Demo from './Demo';



function App() {
  return (

    <BrowserRouter>
        <div id="wrapper">
          <Sidebar></Sidebar>
           <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <Navbar></Navbar>
                <Routes>
                  <Route path="/Users" element={<Users />}> </Route>
                  <Route path="/Table" element={<Table />}> </Route>
                  <Route path="/Products" element={<Products/>}> </Route>
                  <Route path="/Create-user" element={<Createuser/>}> </Route>
                  <Route path="Table/:id" element={<Userview/>}> </Route>
                  <Route path="Table/edit/:id" element={<Edituser/>}> </Route>
                  <Route path="Table/Demo" element={<Demo/>}> </Route>
                 </Routes>
           </div>
     </div>
    </div>
    </BrowserRouter>
  );


}

export default App;
