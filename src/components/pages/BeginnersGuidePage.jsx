import React, { useEffect } from 'react'
import { AppContext } from '../../context/Context'
import {useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const BeginnersGuidePage = () => {
  // Use the useContext hook to get the 'name' value from the context API
  const {name} = useContext(AppContext)
  // Use the useNavigate hook to create a 'navigate' function for navigating to different pages
  let navigate = useNavigate()

  // Use the useEffect hook to run some code when the component is first rendered
  useEffect(() => {
    // If the 'name' value from the context is non-existent, navigate to the root page '/'
    if(!name) {
      navigate('/')
    }
}, [])
  //return the UI for the beginners guide page
  return (
    <div className="container text-white">
      <h1 className="text-center mt-5 animate-character-h1">Beginner's Guide to Information Technology(IT)</h1>

      {/* intro section */}
      <div className="border border-1 border-white container">
        <h3 className="text-center"> What is IT?</h3>
        <p>Information technology refers to the development, management, and practical application of computer networks, systems, and software. IT plays such an important role in business operations today and significantly affects how we exchange information and communicate in our daily lives. It's no wonder that the IT job outlook is exceptionally bright. </p>
        <p>Information technology's scope often extends well beyond what most people think. To provide some structure on the ins and outs of careers in IT, it's helpful to think about it broken down into three essential categories: operations, infrastructure installation and maintenance, and governance.</p>
        <p>We've all benefited from IT professionals who troubleshoot our computer or technology issues so we can carry on with our business. There are more roles and specialties in the IT field than meets the eye, including governing roles that manage and oversee the efficacy of IT's impact in an organization. There's also professionals who specialize in tangible, hands-on materials such as routers and servers. (zdnet)</p>
      </div>

      {/* facts and statistics section */}
      <div className="border border-1 border-white container mt-4">
        <h3 className="text-center"> Facts and Statistics</h3>
        <ol>
          <li>
          Employment of computer and information technology occupations is projected to grow 11% from 2019 to 2029, much faster than the average for all occupations. These occupations are projected to add about 531,200 new jobs, with companies looking to fill their ranks with specialists in cloud computing, collating and management of business information, and cybersecurity (US Bureau of Labor Statistics, 2020).  
          </li>
          <li>
          The median annual salary of computer and information technology jobs in the US is $88,240, well above the national average of $39,810 (US Bureau of Labor Statistics, 2020). 
          </li>
          <li>
          The global information technology industry was valued at $4.8 trillion in 2020 and is expected to reach $5.2 trillion in 2021 (CompTIA, 2020). 
          </li>
          <li>
          Meanwhile, global IT spending is set to reach $3.92 trillion in 2021, 20% larger than in 2020 (CRN, 2021). 
          </li>
          <li>
          The IT area predicted to have the biggest growth in 2021 is enterprise software sales, with an annual growth rate of 8.8% and a current value of $505 billion (CRN, 2021). 
          </li>
          <li>
          On the other hand, the IT area with the largest spending in 2021 is communications services, amounting to $1.41 trillion, which represents a 4.5% increase from that of 2020 (CRN, 2021).
          </li>
          <li>
          IT services market research shows that, in 2021, spending in this area is expected to amount to 1.03 billion U.S. dollars worldwide, up by 4.1% from that of 2020 (ZDNet, 2020). 
          </li>
        </ol>
      </div>

      {/* Salary and Positions section */}
      <div className="border border-1 border-white container mt-4">
        <h3 className="text-center"> Salaries and Positions Information</h3>
        <ol>
          <li>
          Product support specialist: $71,139
          </li>
          <li>
          Desktop support analyst: $76,221
          </li>
          <li>
          Hardware analyst: $85,579
          </li>
          <li>
          <a href="https://www.coursera.org/articles/what-is-a-system-administrator-a-career-guide">Systems administrator:</a> $99,399
          </li>
          <li>
          Systems analyst: $109,531
          </li>
        </ol>
      </div>
      
      {/* youtube section */}
      <div className="border border-1 border-white container mt-4 mb-4">
        <h3 className="text-center mb-3">Media Links</h3>
        
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-6">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/uibHDPDaUjo" title="IT career paths - the best for beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-md-6">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/625zZYlZHoA" title="CompTIA #ITF+ BEGINNER I.T. COURSE |  #COMPTIA I.T. FUNDAMENTALS | COMPTIA ITF+ #comptia #comptiaitf" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BeginnersGuidePage