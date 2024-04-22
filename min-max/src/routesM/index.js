import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import ProductM from '../pages/ProductM'
import Provider from '../pages/Provider'
import WareHouse from '../pages/WareHouse'
import General from '../pages/GeneralM'
import ProductDashBoard from '../pages/DashBoard1'
import Inventory from '../pages/DashBoard3'
import Statistic2 from '../pages/DashBoard2'
import ManageAccount from '../pages/ManageAccount'
import LayoutDefault from '../layout/LayoutDefault'
import ReportWarehouse from '../pages/ReportWarehouse'
import Warehouse2 from '../pages/WareHouse2'

export default function RouterM() {
  return (
    <>  
        <Routes>
            {/* <Route path='/' element={<LayoutDefault></LayoutDefault>}></Route> */}
            <Route path='/productdashboard'  element={<ProductDashBoard></ProductDashBoard>}></Route>
            <Route path='/productm' element={<ProductM></ProductM>}></Route>
            <Route path='/provider' element={<Provider></Provider>}></Route>
            <Route path='/warehouse' element={<WareHouse></WareHouse>}></Route>
            <Route path='/general' element={<General></General>}></Route>
            <Route path='/inventory' element={<Inventory></Inventory>}></Route>
            <Route path='/statistic' element={<Statistic2></Statistic2>}></Route>
            <Route path='/account' element={<ManageAccount></ManageAccount>}></Route>
            <Route path='/report' element={<ReportWarehouse></ReportWarehouse>}></Route>
            <Route path='/createwarehouse' element={<Warehouse2></Warehouse2>}></Route>
        </Routes>
    </>
  )
}
