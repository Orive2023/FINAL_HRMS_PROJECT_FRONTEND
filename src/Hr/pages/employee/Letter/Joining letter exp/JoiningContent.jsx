import React from "react";

const Content = ({
  employeeName,
  designation,
  carDriverReimursement,
  gratuity,
  annualCtcFixedVariable,
  annualVariableCtc,
  mediclaimEmployerShare,
  monthlyGrossSalary,
  educationAllowance,
  mealVoucher,
  medical,
  lta,
  uniformAllowance,
  specialAllowance,
  hraConveyance,
  salaryComponentPerBasic,
  username,
  salaryComponentPerMonth,
  ctc,
  workingHours,
  workingTiming,
  reportingManager,
  casualSickLeaves,
  earnedLeaves,
  probationPeriod,
  noticePeriod,
  subject
}) => {
  return (
    <>
      <div>
        <div>
        <h3 className="font-bold tracking-wide text-1xl mb-3">
                <span className="">Subject:</span> {subject}
              </h3>
        </div>
        <div className="tracking-wide text-1xl mb-3">Dear,</div>
        <div className="paragraph-1">
          {" "}
          <p>
            <section className="">
              <div className="paragraph-1">
                {" "}
                With reference to your acceptance of our offer letter, we are
                pleased to appoint you as a <span>{designation }</span>
                at a CTC of Rs.<span>{ctc } </span> (fixed salary of the Observation
                Period) Please note that the variable salary component will be
                performance-based, for more clarity, please read the terms &
                conditions mentioned in the enclosure below.
              </div>
            </section>
          </p>{" "}
        </div>
        <div className="paragraph-1">
          {" "}
          <p>
            Your role will start On joining date. Your direct reporting to
            Director would be on joining date, Even though we offer flexibility,
            we expect the candidate to complete 8 hours every day. The shift
            timings for your profile are office time For the initial 4 month’s
            period, you will be on probation. During this tenure, your conduct,
            behavior and skills would be analyzed. We follow a formal dress
            code. You can read more about it in the employee handbook.
          </p>
        </div>
        <div className="paragraph-1">
          {" "}
          <p>
            Please sign the enclosed Employee Agreement Form as your acceptance
            for the position and revert with a signed copy by Appointment
            Letter. Please carry all your documents like Aadhar Card, PAN Card,
            Marksheets, etc. on your first joining day. Should you have any
            query, feel free to contact +91 7735731872 during office hours on
            <span> { workingHours } </span>  –  <span> { workingTiming } </span>.
          </p>
        </div>
        <div className="paragraph-1">
          <p>Yours truly, </p> <p> For ORIVE SOLUTIONS PVT LTD</p>{" "}
          <p> DLF CYBER CITY, BHUBANESWAR, ODISHA</p>
        </div>
      </div>
      <div className="term-c">
        <h2 className="fw-bold text-decoration-underline tracking-wide text-2xl appoint mt-4 mb-4">
          Employement Terms And Conditions
        </h2>
        <p>
          <ul>
            <li className="paragraph-1">
              Your appointment is with effect from joining date,
            </li>
            <li className="paragraph-1">
              Your Cost to Company Package and Reimbursements (if any) shall be
              mentioned in the Annexure 1 of Appointment Letter or Service
              Agreement whichever is applicable.
            </li>
            <li className="paragraph-1">
              You will be posted at our “BHUBANESWAR” and will be reporting to
            <span>Reporting Manager- </span>   {reportingManager}
            </li>
            <li className="paragraph-1">
              You will be on probation for a period of Three (4) months from the
              date of your joining, where after, your services if found
              satisfactory, will stand confirmed. Any decision to the contrary
              or to extend the probation period will be communicated to you by
              the Human Resource Department. [Orive Solutions] reserves the
              right to reduce/dispense with or extend your probation period at
              its absolute discretion.
            </li>
            <li className="paragraph-1">
              You are entitled to avail <span> { casualSickLeaves }</span> casual Sick leaves (CSL) per month
              until your services are confirmed. After successful completion of
              the probation period, you will be entitled to <span> { earnedLeaves }</span> earned leave
              (EL), which can be carried forward, if not availed in a calendar
              year.
            </li>
            <li className="paragraph-1">
              In case you decide to resign from your services, you will be
              required to serve <span>{ noticePeriod } </span> notice of physical presence in
              case you are under probation period AND <span>{probationPeriod}</span> ’ notice
              period of physical presence OR <span>{ noticePeriod } </span> notice period of physical
              presence with one-month gross salary in lieu of the notice period
              in case you are confirmed on the payrolls of the company unless
              otherwise mentioned in the Service agreement. However, ORIVE
              SOLUTIONS OPC PVT LTD reserves the right to reduce/ dispense with
              or take any contrary decision at its absolute discretion.{" "}
            </li>
            <li className="paragraph-1">
              The Company reserves the right to terminate your services in case
              your performance is found to be unsatisfactory/poor/below average,
              by giving either one-month notice/or one-month gross salary in
              case you are under probation period and 2 months’ notice period /
              or one month notice with one-month gross salary in case you are
              confirmed on the payrolls of the company. The Company also
              reserves the right to terminate your services without any notice
              or salary in lieu thereof on the grounds of misconduct, or even in
              the case of reasonable suspicion of misconduct, disloyalty, the
              commission of any act involving moral turpitude, or any act of
              indiscipline or inefficiency or for loss of confidence.{" "}
            </li>
            <li className="paragraph-1">
              Your assignments at work may be changed at any time depending on
              the business exigencies.
            </li>
            <li className="paragraph-1">
              You may be transferred at work in any of the company’s branches or
              client sites/ offices across India or Abroad.
            </li>
            <li className="paragraph-1">
              You will be employed in the service of the company only as long as
              you are medically fit for employment in all aspects. Management
              has the right to get you medically examined by any qualified
              medical practitioner during the tenure of your service.
            </li>
            <li className="paragraph-1">
              In addition to the employment terms and conditions mentioned
              herein, all other standard and general rules, practices and
              policies of the Company as existing now and which may be amended
              from time to time shall be applicable to you.
            </li>
            <li className="paragraph-1">
              {" "}
              You are required at all times to maintain the highest order of
              discipline and secrecy as regards to the work of the Company
              and/or its Subsidiaries or Associate Companies. All inventions,
              improvements, discoveries made by you either alone or with other
              persons, will become the sole property of the company. You will
              ensure that patent protections are obtained for such Appointment
              letter template Appointment letter template
              inventions/improvements and discoveries in India or elsewhere and
              assign the same to the company.{" "}
            </li>
            <li className="paragraph-1">
              You are required to devote your total attention and abilities
              exclusively for the business of the Company. You will respect,
              obey and conform to all the regulations framed and issued by the
              Company from time to time. You shall not, while in the employment
              of the Company, be engaged in any other employment, conduct
              business whatsoever or hold any office of profit or accept any
              other emoluments without the previous consent in writing of the
              Company.{" "}
            </li>
            <li className="paragraph-1">
              During the course of your employment and if the nature of your
              business requires it, the Company may send you for specialized
              training within India or overseas in order to enable you to
              perform more effectively. In such an event, you will be required
              to execute a training bond with the Company.{" "}
            </li>
            <li className="paragraph-1">
              You during the period of employment with the company plus 2 years
              after the ending of the employment shall desist from actively
              soliciting employment and desist from considering employment
              offers from any of the company’s existing or potential client’s
              partner, collaborators or any affiliates of the company, without
              obtaining written permission from the company.{" "}
            </li>
            <li className="paragraph-1">
              The emoluments/benefits due to you will be liable/subject to tax
              in accordance with the provisions of the Income Tax Act and Rules
              made there under as also other applicable laws, if any, as may be
              in force from time to time.{" "}
            </li>
            <li className="paragraph-1">
              The Company lays emphasis on all statutory compliances and you
              should ensure compliance with various statutes in your area of
              operations including Insider Trading Regulations.{" "}
            </li>
            <li className="paragraph-1">
              You shall retire from the services of the company on completion of
              58 (fifty-eight) years of age.{" "}
            </li>
            <li className="paragraph-1 para-2">
              That jurisdiction of courts at Bhubaneswar shall only apply to any
              dispute arising out of these terms and conditions of employment.{" "}
              <ul>
                <li className="paragraph-1">
                  Any trade secret within the period of employment or after the
                  period of employment will be termed as illegal.
                </li>
                <li className="paragraph-1">
                  Any trade secret of the value of the information to the
                  employer and the employer’s competitors will be termed as
                  illegal.
                </li>
                <li className="paragraph-1 para-2">
                  Information possessing the quality of confidence
                  <ul>
                    <li className="paragraph-1">Customer lists;</li>
                    <li>
                      The prices at which manufacturers sell, and the nature of
                      the products sold and purchased;
                    </li>
                    <li className="paragraph-1">Costing information and</li>
                    <li className="paragraph-1">Profit-and-loss figures.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <p className="paragraph-1">
              Any discloser of the information will be termed as illegal and
              will be subjected to the jurisdiction of courts at Bhubaneswar.
              <div className="para-1">
                {" "}
                <ul>
                  <li className="paragraph-1">
                    You will have to do compulsory work for 6 months, you can’t
                    give resignation, if you do, you will have to give a notice
                    period of 15 DAYS and pay 3-month salary
                  </li>
                </ul>
              </div>
            </p>
          </ul>
        </p>
      </div>

      <div className="ann-x">
        <h2 className="fw-bold text-decoration-underline tracking-wide text-2xl appoint mt-4 mb-4">
          Annexure
        </h2>
        <div className="paragraph-1">
          Compensation break-up for
          <section className="">
            <div className="paragraph-1">
              {" "}
              <span className="">Employee Name:</span>
              {employeeName}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">Employee ID:</span>
              {username}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">Salary Component Per Month (Rs.):</span>
              {salaryComponentPerMonth}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">Salary Component Per Month (Rs.) BASIC:</span>
              {salaryComponentPerBasic}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">HRA CONVEYANCE:</span>
              {hraConveyance}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">SPECIAL ALLOWANCE:</span>
              {specialAllowance}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">MEDICAL:</span>
              {medical}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">UNIFORM ALLOWANCE:</span>
              {uniformAllowance}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">LTA:</span>
              {lta}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">MEAL VOUCHER:</span>
              {mealVoucher}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">CAR & DRIVER REIMBURSEMENT:</span>
              {carDriverReimursement}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">EDUCATION ALLOWANCE:</span>
              {educationAllowance}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">MONTHLY GROSS SALARY:</span>
              {monthlyGrossSalary}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">GRATUITY:</span>
              {gratuity}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">MEDICLAIM EMPLOYER’S SHARE:</span>
              {mediclaimEmployerShare}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">ANNUAL VARIABLE CTC:</span>
              {annualVariableCtc}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">ANNUAL CTC (FIXED + VARIABLE): </span>
              {annualCtcFixedVariable}
            </div>
          </section>
        </div>

        <p className="paragraph-1">
          Note: *Medi-claim shall be effective after 2 years of service for
          eligible employees. The gross salary shall be subject to TDS (tax
          deduction at source) depending on investments & tax declaration made
          by the employees. Employee contribution to PF, ESI, Meal Voucher and
          medi-claim shall be deducted from monthly gross salary(if & where
          applicable)
        </p>
      </div>
    </>
  );
};

export default Content;