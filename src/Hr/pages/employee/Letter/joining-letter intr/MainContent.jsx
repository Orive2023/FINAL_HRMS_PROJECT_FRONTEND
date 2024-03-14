import React from "react";

const Content = ({
  employeeDesignation,
  department,
  startDate,
  endDate,
  duration,
  location,
  internStipend,
  weeklyComeOfficeForDays,
  signBondCompanyForMonths,
  subject,
  submissionDate,
}) => {
  return (
    <>
      <div>
        <div>
          <section className="">
            <div className="">
              {" "}
              <p className="fw-bold">
                <span className="">Subject:</span> {subject}
              </p>
            </div>
          </section>
        </div>
        <div className="tracking-wide text-1xl mb-3 mt-7 ">Dear,</div>
        <div>
          {" "}
          <p className="text-justify">
            <span className="ml-8"> We are </span>pleased to offer you the
            opportunity to join <b>Orive Solutions Pvt. Ltd.</b> as an intern.
            After careful consideration of your application and interview, we
            believe that you possess the skills, qualifications, and potential
            to contribute effectively to our organization. We are excited to
            welcome you to our team.
          </p>{" "}
          <section className="">
            <div className="paragraph-1">
              {" "}
              <span className="">Position:</span> {employeeDesignation}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">Department:</span>
              {department}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">Start Date:</span>
              {startDate}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">End Date:</span>
              {endDate}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">Duration:</span>
              {duration}
            </div>
            <div className="paragraph-1">
              {" "}
              <span className="">Location:</span>
              {location}
            </div>
          </section>
        </div>
        <div>
          {" "}
          <ul>
            <li className="paragraph-1">
              Your primary responsibilities and tasks as an intern will include,
              but are not limited to:
            </li>
            <li className="paragraph-1">
              Assisting with -
              <div>
                <ul className="list-l">
                  <li className="paragraph-1">
                    Conducting research and analysis in technical field
                  </li>
                  <li>Supporting the team in Developing the company growth</li>
                  <li className="paragraph-1">
                    Collaborating with colleagues to achieve project objectives
                  </li>
                  <li className="paragraph-1">
                    Attending meetings, workshops, and training sessions as
                    required
                  </li>
                  <li className="paragraph-1">
                    Contributing innovative ideas and solutions to improve
                    processes
                  </li>
                </ul>
              </div>
            </li>
            <li className="paragraph-1">
              <section className="">
                <div className="paragraph-1">
                  {" "}
                  <span className="">Internship Stipend/Salary:</span>{" "}
                  {internStipend}
                </div>
              </section>
              <ul className="list-l">
                <li className="paragraph-1">
                  First month of the Internship is Unpaid
                </li>
                <li>
                  <section className="">
                    <div className="paragraph-1">
                      {" "}
                      <span className="">
                        {" "}
                        During your internship period will have to come office
                        for
                      </span>{" "}
                      {weeklyComeOfficeForDays} Days in a week
                    </div>
                  </section>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="fw-bold text-decoration-underline tracking-wide text-2xl appoint mt-4 mb-4">
          Terms and Conditions:
        </h2>
        <p>
          <ul className="list-li list-l">
            <li>
              <section className="">
                <div className="paragraph-1">
                
                  During your internship, you will be
                  <span className="">reporting directly to our HR </span>
                  {internStipend} who will provide guidance, mentorship, and
                  regular feedback on your progress. She will introduce you to
                  the team and ensure that you have the necessary resources and
                  support to succeed in your role.
                </div>
              </section>
            </li>
            <li>
              As an intern, you will be expected to adhere to the policies,
              rules, and regulations of Orive solutions Confidentiality,
              professionalism, punctuality, and a commitment to learning and
              growth are essential throughout your internship.
            </li>
            <li>
              To accept this internship, offer, please sign and return a copy of
              this letter by {submissionDate}Additionally, please ensure that
              you complete any required documentation, including the attached
              internship agreement and any other forms provided, before your
              joining date.
            </li>
            <li>
              To accept the Internship, you have to work with to company for 4
              months, if you leave before 6 months, then you will have to pay 3
              months’ salary as per company act, also you have to Sign a bond
              with the company for{signBondCompanyForMonths} Months.
            </li>
            <li>
              Your performance will be evaluated periodically during your
              internship. Successful completion of your internship with
              satisfactory performance will be a prerequisite for transitioning
              to full-time employment
            </li>
          </ul>
        </p>
        <p className="para-g">
          <span className="ml-8"> We </span> understand that you may have
          questions or require further information before your start date.
          Please feel free to reach out to the HR Department at
          info@orivesolutions.com [9777798142]. We are available to assist you
          and address any concerns you may have. We congratulate you once again
          on your appointment as an intern at Orive solutions, we are confident
          that this internship will provide you with valuable experience,
          professional growth, and opportunities to expand your network. We look
          forward to working with you and wish you a successful and enriching
          internship experience.
        </p>
        <p className="mt-4 mb-4">
          Please accept our best wishes for a rewarding journey with Orive
          solutions pvt ltd.
        </p>
      </div>
    </>
  );
};

export default Content;
