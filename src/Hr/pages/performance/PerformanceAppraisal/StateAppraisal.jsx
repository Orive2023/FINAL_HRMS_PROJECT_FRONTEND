import {useState} from 'react'

const StatePerformance = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [qualityOfWorkRating, setQualityOfWorkRating] = useState(0);
    const [jobKnowledgeRating, setJobKnowledgeRating ] = useState(0);
    const [communicationSkillsRating, setCommunicationSkillsRating ]= useState(0);
    const [teamworkAndCollaborationRating, setTeamWorkAndCollaborationRating] = useState(0);
    const [initiativeAndCreativityRating, setInitiativeAndCreativityRating] =useState(0);
    const [punctualityAndAttendanceRating, setPunctualityAndAttendanceRating] =useState(0);
    const [adaptabilityRating, setAdaptabilityRating] = useState(0);
    const [communicationSkillsComments, setCommunicationSkillsComments] = useState(0);
    const [employee, setEmployee] = useState([]);
    const [department, setDepartment] = useState([]);

    
    const [overallRating , setOverallRating] = useState(0);
    const [performances, setPerformances] = useState([]);
    const [recDelete,setRecDelete] = useState("")
    const [formData, setFormData] = useState({
    
        employeeName: "",
       username: "",
        DepartmentName: "",
        jobTitle: "",
        appraisalPeriod: "",
        
        qualityOfWorkComments: "",
        
        jobKnowledgeComments:"",
        
        CommunicationSkillsComments:"",
        teamworkAndCollaborationRating:"",
        teamworkAndCollaborationComments:"",
        
        initiativeAndCreativityComments:"",
        
        punctualityAndAttendanceComments:"",
        
        adaptabilityComments:"",
       
        overallComments:"",
        strengths:"",
        areasForImprovement:"",
        employeesSelfAssessment:"",
        goalsAchieved:"",
        developmentPlan:"",
        managersComments:"",
        employeesSignature:"",
        employeesSignatureDate:"",
        managersSignature:"",
        managersSignatureDate:"",
    
      });

  return {
    recDelete,setRecDelete,performances,setPerformances,overallRating,setOverallRating,setPunctualityAndAttendanceRating,punctualityAndAttendanceRating,adaptabilityRating,setAdaptabilityRating,teamworkAndCollaborationRating,setTeamWorkAndCollaborationRating,initiativeAndCreativityRating,setInitiativeAndCreativityRating,jobKnowledgeRating,setJobKnowledgeRating,communicationSkillsRating,setCommunicationSkillsRating,formData,setFormData,formVisible,setFormVisible,toggle,setToggle,qualityOfWorkRating, communicationSkillsComments, setCommunicationSkillsComments, setQualityOfWorkRating,employee, setEmployee,department,setDepartment
  }
}

export default StatePerformance