import React from "react";
import { Route, Routes } from "react-router-dom";
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

const routesData = [
  { path: "/hr/timesheets/leaves", element: <LeaveView /> },
  { path: "/timesheets/leave/edit-Leave/:id", element: <LeaveEdit /> },
  { path: "/leave-profile/:id", element: <LeavePofile /> },
  { path: "/hr/timesheets/holiday", element: <HolidayView /> },
  { path: "/timesheets/edit-holiday/:id", element: <EditHoliday /> },
  { path: "/hr/timesheets/attendance", element: <AttendanceView /> },
  { path: "/hr/event", element: <EventCalender /> },
  { path: "/hr/timesheets/officeshift", element: <OfficeShift /> },
  { path: "/edit-officeShift/:id", element: <EditOfficeShift /> },
  { path: "/timesheets/holiday-profile/:id", element: <HolidayProfile /> },
  { path: "/officeShift-profile/:id", element: <OfficeShiftPofile /> },
  { path: "/timesheets/edit-attendance/:id", element: <AttendanceEdit /> },
  { path: "/Attendance-profile/:id", element: <AttendanceProfile /> },

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
