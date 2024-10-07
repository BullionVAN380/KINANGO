import React from 'react'

function FinancialAid() {
  return (
    <div>
    <div className="container mt-5">
      <h1 className="text-center mb-4">Financial Aid and Bursaries</h1>
      <div className="card p-4 mb-4">
        <h2>Financial Aid and Bursaries</h2>
        <p>
          Students, especially needy ones, are encouraged to source for funds to raise school fees through a number of available sources, some of which are within the university while others are external. These include:
        </p>
        <ul>
          <li>Parents</li>
          <li>Higher Education Loans Board (H.E.L.B)</li>
          <li>Self</li>
          <li>Constituency Development Funds (CDF)</li>
          <li>Government Bursaries</li>
          <li>Well-wishers</li>       
        </ul>
        <p>For many of the above cases, students are expected to initiate the process through application at the scheduled times.</p>
      </div>

      <div className="card p-4 mb-4">
        <h3>Higher Education Loans Board (HELB)</h3>
        <p>
          The Higher Education Loans Board provides loans and bursaries to needy students registered in all Kenyan universities, both public and private. Applications are done annually, and there is a specific criterion that is used to award loans (ranging from Kshs. 35,000/= to 60,000/=) and bursaries (Kshs. 8,000/=).
        </p>
        <p>
          Loans are disbursed twice in an academic year, at the beginning of the 1st and 2nd semesters. Dissatisfied students may appeal for additional loans by providing evidence as justification. Further information concerning HELB support can be found on the HELB website.
        </p>
      </div>

      <div className="card p-4 mb-4">
        <h3>Constituency Development Funds (CDF)</h3>
        <p>
          Various Constituency Development Fund programs offer financial support to students from their respective constituencies. The criteria and award amounts vary across constituencies. Application forms require endorsement by the Dean of Students to confirm the applicant’s academic information.
        </p>
      </div>

      <div className="card p-4 mb-4">
        <h3>Government Bursaries - Through the Ministry of Education</h3>
        <p>
          The government offers support to needy students through bursaries administered by the Ministry of Education. Applications are made by filling out forms available at specific times of the year.
        </p>
      </div>

        <div className="card p-4 mb-4">
        <h3>Talent scholarships</h3>
        <p>
        These are awarded to students who are talented in various fields. Currently, the scholarship is awarded in the following areas: Handball, hockey, Volleyball, Soccer, netball, Music, Theatre, Basketball, Athletics and Rugby. Eligibility for the scholarship includes above average academic performance, exceptional performance in the talent area and admission for studies at KTVC among others.
        </p>
        </div>
      </div>
    </div>
  )
}

export default FinancialAid

