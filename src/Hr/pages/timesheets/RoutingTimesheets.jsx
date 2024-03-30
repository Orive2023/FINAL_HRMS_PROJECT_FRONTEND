import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LeaveView from "../timesheets/leave/Mainfile/LeaveView";
import LeaveEdit from "../timesheets/leave/Mainfile/LeaveEdit";
import HolidayView from "./Holiday/Mainfile/HolidayView";
import EditHoliday from "../timesheets/Holiday/Mainfile/EditHoliday";
import AttendanceView from "./Attendance/mainfile/AttendanceView";
import EventCalender from "./Event/EventCalender";
import OfficeShift from "./officeshift/Mainfile/OfficeShiftView";
import EditOfficeShift from "./officeshift/Mainfile/EditOfficeShift";
import HolidayProfile from "./Holiday/Mainfile/HolidayProfile";
import OfficeShiftPofile from "./officeshift/Mainfile/OfficeShiftPofile";
import AttendanceEdit from "./Attendance/mainfile/AttendanceEdit";
import AttendanceProfile from "./Attendance/mainfile/AttendanceProfile";
import LeavePofile from "./leave/Mainfile/LeavePofile";
import Login from '../../../Login'

const routesData = [
  { path: "/hr/timesheets/leaves", element: localStorage.getItem("Role")==="ADMIN"?<LeaveView />:<Navigate to='/'/> },
  { path: "/timesheets/leave/edit-Leave/:id", element: localStorage.getItem("Role")==="ADMIN"?<LeaveEdit />:<Navigate to='/'/> },
  { path: "/leave-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<LeavePofile />:<Navigate to='/'/> },
  { path: "/hr/timesheets/holiday", element: localStorage.getItem("Role")==="ADMIN"?<HolidayView />:<Navigate to='/'/> },
  { path: "/timesheets/edit-holiday/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditHoliday />:<Navigate to='/'/> },
  { path: "/hr/timesheets/attendance", element: localStorage.getItem("Role")==="ADMIN"?<AttendanceView />:<Navigate to='/'/> },
  { path: "/hr/event", element: localStorage.getItem("Role")==="ADMIN"?<EventCalender />:<Navigate to='/'/> },
  { path: "/hr/timesheets/officeshift", element: localStorage.getItem("Role")==="ADMIN"?<OfficeShift />:<Navigate to='/'/> },
  { path: "/edit-officeShift/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditOfficeShift />:<Navigate to='/'/> },
  { path: "/timesheets/holiday-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<HolidayProfile />:<Navigate to='/'/> },
  { path: "/officeShift-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<OfficeShiftPofile />:<Navigate to='/'/> },
  { path: "/timesheets/edit-attendance/:id", element: localStorage.getItem("Role")==="ADMIN"?<AttendanceEdit />:<Navigate to='/'/> },
  { path: "/Attendance-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<AttendanceProfile />:<Navigate to='/'/> },

];

const RoutingTimesheets = () => {
  return (
    <div>
      <div className="App">
        <Routes>
          {routesData.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default RoutingTimesheets;
