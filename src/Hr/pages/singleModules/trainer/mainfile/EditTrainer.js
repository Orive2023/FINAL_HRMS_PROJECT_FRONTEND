import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../../../components/Header'
import SideBar from '../../../../components/SideBar'
import CompanyLogoFile from '../../../../components/CompanyLogoFile'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const EditTrainer = ({ formData, setFormData }) => {
  let navigate = useNavigate()
  const [showConfirmation, setShowConfirmation] = useState(false)
  const { id } = useParams()
  const [trainer, setTrainer] = useState({
    trainersFullName: '',
    emailAddress: '',
    technicalSkills: '',
    phoneNo: '',
    softSkills: '',
    certifications: '',
    // status: '',
  })
  const showUpdateConfirmation = () => {
    setShowConfirmation(true)
  }

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false)
  }

  const handleUpdate = async () => {
    hideUpdateConfirmation()
    await axios.put(`https://api.orivehrms.com/trainerslist/update/${id}`, trainer)
    navigate('/hr/trainer')
  }
  useEffect(() => {
    loadTrainer()
  }, [])

  const loadTrainer = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/trainerslist/get/${id}`,
    )
    setTrainer(result.data)
  }

  const handleInputChange = (e) => {
    setTrainer({
      ...trainer,
      [e.target.name]: e.target.value,
    })
  }

  // const updateTrainer = async (e) => {
  //   e.preventDefault();
  //   await axios.put(https://api.orivehrms.com/trainerslist/update/${id}, trainer);
  //   navigate("/hr/trainer");
  // };
  const [menu, setMenu] = useState(false)

  const status = [
    {
      value: 'Choose',
      label: 'Select Status',
    },
    {
      value: 'Progress',
      label: 'Progress',
    },
    {
      value: 'Completed',
      label: 'Completed',
    },
  ]

  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part" style={{ padding: '0' }}>
          <div className="col-sm-8 py-2 px-5 shadow">
            <h2 className="mt-5"> Edit Trainer</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                showUpdateConfirmation()
              }}
            >
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="Budget">
                  Trainer Full Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="trainersFullName"
                  id="trainersFullName"
                  required
                  value={trainer.trainersFullName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="clientName">
                  Trainer's Email Address
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="emailAddress"
                  id="emailAddress"
                  required
                  value={trainer.emailAddress}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text">Phone No</label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="phoneNo"
                  id="phoneNo"
                  required
                  value={trainer.phoneNo}
                  onChange={(e) => handleInputChange(e)}
                />
               
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="approval">
                  Status
                </label>
                <select
                  className="form-control col-sm-6"
                  name="status"
                  id="status"
                  required
                  value={trainer.status}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="">Select</option>
                  <option value="Available">Available</option>
                  <option value="NotAvailable">NotAvailable</option>
                </select>
              </div>

              <div className="data-buttons">
                <Button id="input-btn-submit" variant="outlined" type="submit">
                  Submit
                </Button>
                <Button
                  id="input-btn-cancel"
                  variant="outlined"
                  onClick={() => navigate('/hr/trainer')}
                >
                  Back
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <div className="confirmation">
          <div className="confirmation-popup d-flex align-items-center justify-content-center">
            <div>
              <p className="fs-4 fw-bold">Are you sure you want to update?</p>
              <div className="d-flex" style={{ gap: '10px' }}>
                <Button
                  id="input-btn-submit"
                  style={{ width: '100%' }}
                  onClick={handleUpdate}
                  variant="contained"
                >
                  Yes
                </Button>
                <Button
                  id="input-btn-cancel"
                  style={{ width: '100%' }}
                  onClick={hideUpdateConfirmation}
                  variant="outlined"
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditTrainer