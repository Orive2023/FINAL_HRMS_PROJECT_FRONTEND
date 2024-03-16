import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import StatePerformance from './StateAppraisal'
import * as api from './AppraisalApi'
const AppraisalForm = ({
  formData,
  setFormData,
  setFormVisible,
  setToggle,
}) => {
  let navigate = useNavigate()
  const {
    employee,setEmployee,department,setDepartment,
    overallRating,
    setPerformances,
    setOverallRating,
    setPunctualityAndAttendanceRating,
    punctualityAndAttendanceRating,
    adaptabilityRating,
    setAdaptabilityRating,
    teamworkAndCollaborationRating,
    setTeamWorkAndCollaborationRating,
    initiativeAndCreativityRating,
    setInitiativeAndCreativityRating,
    jobKnowledgeRating,
    setJobKnowledgeRating,
    communicationSkillsRating,
    setCommunicationSkillsRating,
    qualityOfWorkRating,
    setQualityOfWorkRating,
  } = StatePerformance()

  const handleQualityChange = (event, qualityOfWorkRating) => {
    setQualityOfWorkRating(qualityOfWorkRating)
  }

  const handleJobChange = (event, jobKnowledgeRating) => {
    setJobKnowledgeRating(jobKnowledgeRating)
  }

  const handleCommunicationChange = (event, communicationSkillsRating) => {
    setCommunicationSkillsRating(communicationSkillsRating)
  }

  const handleCollabChange = (event, teamworkAndCollaborationRating) => {
    setTeamWorkAndCollaborationRating(teamworkAndCollaborationRating)
  }

  const handleInitiativeChange = (event, initiativeAndCreativityRating) => {
    setInitiativeAndCreativityRating(initiativeAndCreativityRating)
  }

  const handleAttendanceRating = (event, punctualityAndAttendanceRating) => {
    setPunctualityAndAttendanceRating(punctualityAndAttendanceRating)
  }
  const handleAdaptabilityRating = (event, adaptabilityRating) => {
    setAdaptabilityRating(adaptabilityRating)
  }

  const handleRating = (event, overallRating) => {
    setOverallRating(overallRating)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "employeeName" && value === "addNewEmployee") {
      // Redirect to the company form in the company module
      navigate("/hr/employee/employee");
      return;
    }
    if (name === "departmentName" && value === "addNewDepartment") {
      // Redirect to the company form in the company module
      navigate("/hr/organisation/department");
      return;
    }
    // const selectedDepartment = department.find((demp) => demp.departmentName === value);
    const selectedEmployee = employee.find((emp) => emp.employeeName === value);
    if (selectedEmployee) {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
       username: selectedEmployee.username  || "",
       position:selectedEmployee.position  || "",
       
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      qualityOfWorkRating: qualityOfWorkRating,
      jobKnowledgeRating: jobKnowledgeRating,
      communicationSkillsRating: communicationSkillsRating,
      teamworkAndCollaborationRating: teamworkAndCollaborationRating,
      initiativeAndCreativityRating: initiativeAndCreativityRating,
      punctualityAndAttendanceRating: punctualityAndAttendanceRating,
      adaptabilityRating: adaptabilityRating,
      overallRating: overallRating,
      });
    }
  };
 
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //     qualityOfWorkRating: qualityOfWorkRating,
  //     jobKnowledgeRating: jobKnowledgeRating,
  //     communicationSkillsRating: communicationSkillsRating,
  //     teamworkAndCollaborationRating: teamworkAndCollaborationRating,
  //     initiativeAndCreativityRating: initiativeAndCreativityRating,
  //     punctualityAndAttendanceRating: punctualityAndAttendanceRating,
  //     adaptabilityRating: adaptabilityRating,
  //     overallRating: overallRating,
  //   })
  // }

  const savePerformances = async () => {
    await api.savePerformances(formData)
    navigate('/hr/performance/Performance-Appraisal')
    setFormData({
      employeeName: '',
     username: '',
      departmentName: '',
      position: '',
      jobTitle: '',
      appraisalPeriod: '',
      qualityOfWorkComments: '',
      jobKnowledgeComments: '',
      teamworkAndCollaborationRating: '',
      teamworkAndCollaborationComments: '',
      initiativeAndCreativityComments: '',
      punctualityAndAttendanceComments: '',
      communicationSkillsComments: '',
      adaptabilityComments: '',
      overallComments: '',
      strengths: '',
      areasForImprovement: '',
      employeesSelfAssessment: '',
      goalsAchieved: '',
      developmentPlan: '',
      managersComments: '',
    })
  }

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  }

  const handleSubmit = (e) => {
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    // handleClose();
  }

  const cancelButton = () => {
    setFormVisible(false)
    setToggle(false)
    setFormData({
      employeeName: '',
     username: '',
      departmentName: '',
      jobTitle: '',
      appraisalPeriod: '',
      position: '',
      qualityOfWorkComments: '',

      jobKnowledgeComments: '',

      communicationSkillsComments: '',
      teamworkAndCollaborationRating: '',
      teamworkAndCollaborationComments: '',

      initiativeAndCreativityComments: '',

      punctualityAndAttendanceComments: '',

      adaptabilityComments: '',

      overallComments: '',
      strengths: '',
      areasForImprovement: '',
      employeesSelfAssessment: '',
      goalsAchieved: '',
      developmentPlan: '',
      managersComments: '',
   
    })

    setQualityOfWorkRating(0)
    setJobKnowledgeRating(0)
    setCommunicationSkillsRating(0)
    setTeamWorkAndCollaborationRating(0)
    setInitiativeAndCreativityRating(0)
    setAdaptabilityRating(0)
    setPunctualityAndAttendanceRating(0)
    setOverallRating(0)
  }

  let buttonCheck =
    formData.DepartmentName.length > 0 &&
    formData.appraisalPeriod.length > 0 &&
    formData.areasForImprovement.length > 0 &&
    formData.developmentPlan.length > 0 &&
    formData.username.length > 0 &&
    formData.employeeName.length > 0 &&
    formData.employeesSelfAssessment.length > 0 &&
    formData.goalsAchieved.length > 0 &&
    formData.jobTitle.length > 0 &&
    formData.managersComments.length > 0 &&
    formData.strengths.length > 0 

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
  }
  const loadPerformances = async () => {
    const result = await api.loadPerformances();
    setPerformances(result);
  };
  useEffect(() => {
    loadPerformances();
    fetchEmployee();
    fetchDepartment();
  }, []);
  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };

  const fetchDepartment = async () => {
    const departmentData = await api.fetchDepartment();
    setEmployee(departmentData);
  };

  console.log(formData)
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex' }}>
      <FormControl fullWidth>
          <InputLabel id="demo-company-select-label">Employee Name</InputLabel>
          <Select
            labelId="demo-company-select-label"
            id="selectedCompany"
            value={formData.employeeName}
            name="employeeName"
            label="employeeName"
            onChange={(e) => handleInputChange(e)}
            required
          >
            {employee &&
              employee.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.employeeName}>
                    {item.employeeName}
                  </MenuItem>
                );
              })}
             <MenuItem className="linkStyle" value="addNewEmployee">
      <a href="#">
        <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
       Create Employee
      </a>
    </MenuItem>

          </Select>
        </FormControl>

      
        <TextField
          margin="dense"
          label="Employee ID Number"
          type="string"
          fullWidth
          name="username"
          id="username"
          value={formData.username}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{ shrink: true }}
          style={{ margin: '8px 3px' }}
          disabled
        />
        <FormControl fullWidth>
          <InputLabel id="demo-department-select-label">Department Name</InputLabel>
          <Select
            labelId="demo-department-select-label"
            id="selectedDepartment"
            value={formData.departmentName}
            name="departmentName"
            label="departmentName"
            onChange={(e) => handleInputChange(e)}
            // required
          >
            {department &&
              department.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.departmentName}>
                    {item.departmentName}
                  </MenuItem>
                );
              })}
             <MenuItem className="linkStyle" value="addNewDepartment">
      <a href="#">
        <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
       Create Department
      </a>
    </MenuItem>

          </Select>
        </FormControl>

      </div>

      <div style={{ display: 'flex' }}>
        <TextField disabled
          margin="dense"
          label="Position"
          type="text"
          fullWidth
          name="position"
          id="position"
          value={formData.position}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: '0px 3px' }}
       
        />
        <TextField
          margin="dense"
          label="Job Title"
          type="text"
          fullWidth
          name="jobTitle"
          id="jobTitle"
          value={formData.jobTitle}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: '0 3px' }}
        />
        <TextField
          margin="dense"
          label="AppraisalPeriod"
          type="date"
          fullWidth
          name="appraisalPeriod"
          id="appraisalPeriod"
          value={formData.appraisalPeriod}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: '0 3px' }}
          InputLabelProps={{ shrink: true }}
        />
      </div>

      <div style={{ display: 'flex', gap: '4px', marginTop: '5px' }}>
        <Box>
          <TextField
            label=" Quality Of Work Rating"
            variant="outlined"
            fullWidth
            style={{ margin: '6px 5px', marginTop: '9px' }}
            InputProps={{
              startAdornment: (
                <Rating
                  name="qualityOfWorkRating"
                  value={qualityOfWorkRating}
                  onChange={handleQualityChange}
                  precision={0.5}
                />
              ),
            }}
          />
        </Box>

        <Box>
          <TextField
            label=" Job Knowledge Rating"
            variant="outlined"
            fullWidth
            style={{ margin: '6px 5px', marginTop: '9px' }}
            InputProps={{
              startAdornment: (
                <Rating
                  name="jobKnowledgeRating"
                  value={jobKnowledgeRating}
                  onChange={handleJobChange}
                  getLabelText={getLabelText}
                  precision={0.5}
                />
              ),
            }}
          />
        </Box>

        <Box>
          <TextField
            label=" Communication Skill Rating"
            variant="outlined"
            fullWidth
            style={{ margin: '0px 5px', marginTop: '9px' }}
            InputProps={{
              startAdornment: (
                <Rating
                  name="communicationSkillsRating"
                  value={communicationSkillsRating}
                  onChange={handleCommunicationChange}
                  precision={0.5}
                />
              ),
            }}
          />
        </Box>
        <Box>
          <TextField
            label=" Team Work And Collaboration Rating"
            variant="outlined"
            fullWidth
            style={{ margin: '0px 5px', marginTop: '9px' }}
            InputProps={{
              startAdornment: (
                <Rating
                  name="teamworkAndCollaborationRating"
                  value={teamworkAndCollaborationRating}
                  onChange={handleCollabChange}
                  precision={0.5}
                />
              ),
            }}
          />
        </Box>
      </div>

      <div style={{ display: 'flex', gap: '4px' }}>
        <Box>
          <TextField
            label="Initiative And Creativity Rating "
            variant="outlined"
            fullWidth
            style={{ margin: '0px 5px', marginTop: '9px' }}
            InputProps={{
              startAdornment: (
                <Rating
                  name="initiativeAndCreativityRating"
                  value={initiativeAndCreativityRating}
                  onChange={handleInitiativeChange}
                  precision={0.5}
                />
              ),
            }}
          />
        </Box>
        <Box>
          <TextField
            label="Punctuality And Attendance Rating"
            variant="outlined"
            fullWidth
            style={{ margin: '0px 5px', marginTop: '9px' }}
            InputProps={{
              startAdornment: (
                <Rating
                  name="punctualityAndAttendanceRating"
                  value={punctualityAndAttendanceRating}
                  onChange={handleAttendanceRating}
                  precision={0.5}
                />
              ),
            }}
          />
        </Box>
        <Box>
          <TextField
            label="AdaptabilityRating "
            variant="outlined"
            fullWidth
            style={{ margin: '0px 5px', marginTop: '9px' }}
            InputProps={{
              startAdornment: (
                <Rating
                  name="adaptabilityRating"
                  value={adaptabilityRating}
                  onChange={handleAdaptabilityRating}
                  precision={0.5}
                />
              ),
            }}
          />
        </Box>
        <Box>
          <TextField
            label="OverallRating "
            variant="outlined"
            fullWidth
            style={{ margin: '0px 5px', marginTop: '9px' }}
            InputProps={{
              startAdornment: (
                <Rating
                  name="overallRating"
                  value={overallRating}
                  onChange={handleRating}
                  precision={0.5}
                />
              ),
            }}
          />
        </Box>
      </div>

      <div style={{ display: 'flex', gap: '4px' }}>
        
        <TextField
          margin="dense"
          label="Strengths"
          type="text"
          fullWidth
          name="strengths"
          id="strengths"
          value={formData.strengths}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: '0px 3px', marginTop: '8px' }}
        />
        <TextField
          margin="dense"
          label="Areas For Improvement"
          type="text"
          fullWidth
          name="areasForImprovement"
          id="areasForImprovement"
          value={formData.areasForImprovement}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: '0px 3px', marginTop: '8px' }}
        />
        <TextField
          margin="dense"
          label="Employees Self Assessment"
          type="text"
          fullWidth
          name="employeesSelfAssessment"
          id="employeesSelfAssessment"
          value={formData.employeesSelfAssessment}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: '0px 3px', marginTop: '8px' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        <TextField
          margin="dense"
          label="Goals Achieved"
          type="text"
          fullWidth
          name="goalsAchieved"
          id="goalsAchieved"
          value={formData.goalsAchieved}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: '0px 3px', marginTop: '8px' }}
        />
        <TextField
          margin="dense"
          label="Development Plan"
          type="text"
          fullWidth
          name="developmentPlan"
          id="developmentPlan"
          value={formData.developmentPlan}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: '0px 3px', marginTop: '8px' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        <TextField
          margin="dense"
          label="Managers Comments"
          type="text"
          fullWidth
          name="managersComments"
          id="managersComments"
          value={formData.managersComments}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: '0px 3px', marginTop: '8px' }}
        />

      
      </div>
      
        

      <div className="data-buttons">
        <Button
          type="submit"
          onClick={savePerformances}
          // disabled={buttonCheck ? false : true}
          variant="outlined"
          id="input-btn-submit"
        >
          Submit
        </Button>
        <Button onClick={cancelButton} id="input-btn-cancel" variant="outlined">
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default AppraisalForm
