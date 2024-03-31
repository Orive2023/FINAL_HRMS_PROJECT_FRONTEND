import React from 'react'
import {Route, Routes} from "react-router-dom"
import EditSubType from './Mainfile/EditSubtype';

const RouteSubType = () => {
  return (
    <div>
        <Routes>
            <Route path={"/edit-subType/:id"} element={<EditSubType />}/>
        </Routes>
    </div>
  )
}

export default RouteSubType;