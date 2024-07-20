import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './loginpage';
import DefaultLayout from './layout';
import Sellersl from './sellers_table/seller_s_l'
import Expiry from './expiry_table/expiry_list'
import Home from './abc'
import Create from './components/add'
import ExpiryAdd from './expiry_table/Expiry_add'
import SellerAdd from './sellers_table/seller_add'
import ExpiryEdit from './expiry_table/expiry_edit'
import Edit from './components/edit'
import SellerEdit from './sellers_table/seller_edit'

function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/layout'  element={<DefaultLayout/>} >
      <Route path='Stock_List' element={<Home/>}></Route>
      <Route path='expiry' element={<Expiry/>}></Route>
   <Route path='sellersl' element={<Sellersl/>}></Route>
      <Route path='addstock' element={<Create/>}></Route>
      <Route path='expiryadd' element={<ExpiryAdd/>}></Route>
      <Route path='selleradd' element={<SellerAdd/>}></Route>
      <Route path='expiryedit/:id' element={<ExpiryEdit/>}></Route>
      <Route path='edit/:id' element={<Edit/>}></Route>
      <Route path='selleredit/:id' element={<SellerEdit/>}></Route>
      


      </Route>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;