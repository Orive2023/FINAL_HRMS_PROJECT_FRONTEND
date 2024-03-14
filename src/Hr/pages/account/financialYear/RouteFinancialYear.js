import React from 'react'
import {Route, Routes} from "react-router-dom"
import EditFinancialYear from './Mainfile/EditFinancialYear';

const RouteFinancialYear = () => {
  return (
    <div>
        <Routes>
            <Route path={"/edit-financialYear/:id"} element={<EditFinancialYear />}/>
        </Routes>
    </div>
  )
}

export default RouteFinancialYear;