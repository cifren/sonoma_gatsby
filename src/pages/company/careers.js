import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"

const CareersPage = () => (
    <Layout sidebar={true}>
        <h1>Careers</h1>
        <hr/>
        <p>
            Sonoma is looking for bright enthusiastic professionals looking to join a highly motivated team who are passionate about delivering excellence in everything we do. The ideal candidate must be a self starter with a strong customer service back ground and possess technical and problem solving skills.
        </p>        
        <p>
            Applicants with experience in the Financial and or Point of Sale markets will be given priority.
        </p>        
        <p>
            Sonoma offers a unique environment for its employees, if you are looking for an opportunity that gives you the flexibility to work out of your home office, continue to take on added responsibilities and participate in the success of the company then Sonoma could be the right place for you.
        </p>
        <p>
            Sonoma is currently looking to fill the following positions;
        </p> 
        <p class="margin-left-5">
            <Link to="">HELP DESK ANALYST - (Part-Time, Full-Time or Project Specific)</Link>
        </p>
        <p>
            If your ideal job is not posted above, please feel free to submit a resume for future opportunities.
        </p>
        <p>
            <a href="mailto:resumes@sonomaservices.com">Submit Resume</a>
        </p>
    </Layout>
)

export default CareersPage