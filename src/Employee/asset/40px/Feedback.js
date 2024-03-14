import React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Feedback = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
    <div style={{backgroundColor:"grey"}}>
    
    <div style={{width: "740px",
height: "813px",

marginLeft: "300",
borderRadius: "8px",
}} >
        <div
          id="card"
          className="card"
          style={{
            height: "110vh",
            width: "600px",
            marginLeft:"250px",
            position:"center"
          }}
        >
          <h4
            style={{
              textAlign: "start",
              paddingLeft: "20px",
              marginTop: "20px",
              fontWeight: "600",
              lineHeight: "28.8px",
              fontSize: "16px",
            }}
          >
            SELF ASSESSMENT
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  marginTop: "8px",
                  marginLeft: "30px",
                  fontWeight: "600",
                  padding:"10px, 20px"
                }}
              >
                1. How well did you meet your performance goals for the past
                quarter/year?
                <div>
                 
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      width: "143.65px",
                      height: "21px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                  >
                    <div style={{ color: "#646978" }}>Rating:</div>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>

                  <div
                    style={{
                     
                     
                      marginTop: "13px",
                      marginLeft: "5px",
                      padding: "10px, 12px, 10px, 12px",
                      borderRadius: "5px",
                      
                    }}
                  >
                     <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  marginLeft: "30px",
                  fontWeight: "600",
                }}
              >
                2.Have you acquired new skills or improved existing ones since
                the last self-assessment?
                <div>
                  <Box
                    component="form"
                    sx={
                      {
                        // '& > :not(style)': { m: 1, width: '120px' },
                      }
                    }
                    noValidate
                    autoComplete="off"
                  ></Box>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      width: "143.65px",
                      height: "21px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                  >
                    <div style={{ color: "#646978" }}>Rating:</div>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>

                  <div
                    style={{
                      width: " 500px",
                      height: "Fixed (51px)",
                      marginTop: "13px",
                      marginLeft: "5px",
                      padding: "10px, 12px, 10px, 12px",
                      borderRadius: "5px",
                      border: "2px",
                      gap: "357px",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Comments"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  marginLeft: "30px",
                  fontWeight: "600",
                }}
              >
                3.How would you rate your collaboration with team members and
                colleagues?
                <div>
                  <Box
                    component="form"
                    sx={
                      {
                        // '& > :not(style)': { m: 1, width: '120px' },
                      }
                    }
                    noValidate
                    autoComplete="off"
                  ></Box>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      width: "143.65px",
                      height: "21px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                  >
                    <div style={{ color: "#646978" }}>Rating:</div>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>

                  <div
                    style={{
                      width: " 500px",
                      height: "Fixed (51px)",
                      marginTop: "13px",
                      marginLeft: "5px",
                      padding: "10px, 12px, 10px, 12px",
                      borderRadius: "5px",
                      border: "2px",
                      gap: "357px",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Comments"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  marginLeft: "30px",
                  fontWeight: "600",
                }}
              >
                4.How well have you managed your time and prioritized tasks?
                <div>
                  <Box
                    component="form"
                    sx={
                      {
                        // '& > :not(style)': { m: 1, width: '120px' },
                      }
                    }
                    noValidate
                    autoComplete="off"
                  ></Box>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      width: "143.65px",
                      height: "21px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                  >
                    <div style={{ color: "#646978" }}>Rating:</div>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>

                  <div
                    style={{
                      width: " 500px",
                      height: "Fixed (51px)",
                      marginTop: "13px",
                      marginLeft: "5px",
                      padding: "10px, 12px, 10px, 12px",
                      borderRadius: "5px",
                      border: "2px",
                      gap: "357px",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Comments"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  marginLeft: "30px",
                  fontWeight: "600",
                }}
              >
                5.In what ways have you worked to improve your communication
                skills?
                <div>
                  <Box
                    component="form"
                    sx={
                      {
                        // '& > :not(style)': { m: 1, width: '120px' },
                      }
                    }
                    noValidate
                    autoComplete="off"
                  ></Box>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      width: "143.65px",
                      height: "21px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                  >
                    <div style={{ color: "#646978" }}>Rating:</div>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>

                  <div
                    style={{
                      width: " 500px",
                      height: "Fixed (51px)",
                      marginTop: "13px",
                      marginLeft: "5px",
                      padding: "10px, 12px, 10px, 12px",
                      borderRadius: "5px",
                      border: "2px",
                      gap: "357px",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Comments"
                      variant="outlined"
                    />
                    
                  </div>
                  <button className="emp-header-check-btn">
             Submit
              
            </button>
            <button className="emp-header-check-btn">
             Cancel
              
            </button>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default Feedback;
