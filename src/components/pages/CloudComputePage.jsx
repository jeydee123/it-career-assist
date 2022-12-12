import React, { useEffect } from 'react'
import { AppContext } from '../../context/Context'
import {useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const CloudComputePage = () => {
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
      <h1 className="text-center mt-5 animate-character-h1">Cloud Computing</h1>
     
      {/* intro section */}
      <div className="border border-1 border-white container">
        <h3 className="text-center"> What is Cloud Computing?</h3>
        <p>The term ‘cloud computing’ also refers to the technology that makes cloud work. This includes some form of virtualized IT infrastructure—servers, operating system software, networking, and other infrastructure that’s abstracted, using special software, so that it can be pooled and divided irrespective of physical hardware boundaries. For example, a single hardware server can be divided into multiple virtual servers.</p>
        <p>Virtualization enables cloud providers to make maximum use of their data center resources. Not surprisingly, many corporations have adopted the cloud delivery model for their on-premises infrastructure so they can realize maximum utilization and cost savings vs. traditional IT infrastructure and offer the same self-service and agility to their end-users.</p>
        <p>If you use a computer or mobile device at home or at work, you almost certainly use some form of cloud computing every day, whether it’s a cloud application like Google Gmail or Salesforce, streaming media like Netflix, or cloud file storage like Dropbox. According to a recent survey, 92% of organizations use cloud today (link resides outside IBM), and most of them plan to use it more within the next year. (IBM) </p>
      </div>
      {/* facts and statistics section */}
      <div className="border border-1 border-white container mt-4">
        <h3 className="text-center"> Facts and Statistics</h3>
        <ol>
          <li>
          The cloud applications market is worth over $150 billion 
          </li>
          <li>
          200 ZB of data will be stored in the cloud by 2025
          </li>
          <li>
          60% of the world’s corporate data is stored in the cloud 
          </li>
          <li>
          Cloud data centers account for 3% of the world’s energy consumption 
          </li>
          <li>
          Cloud infrastructure services generate $178 billion per year in revenue 
          </li>
          <li>
          90% of large enterprises have adopted a multi-cloud infrastructure  
          </li>
          <li>
          Enterprises use an average of 2.6 public and 2.7 private clouds
          </li>
        </ol>
      </div>
      
      {/* Salary and Positions section */}
      <div className="border border-1 border-white container mt-4">
        <h3 className="text-center"> Salaries and Positions Information</h3>
        <ol>
          <li>
          Network and Cloud Architect <a href="https://www.payscale.com/research/US/Job=Cloud_Network_Engineer/Salary">$106,100 / year.</a>
          </li>
          <li>
          Cloud Network Engineer <a href="https://www.salary.com/research/salary/benchmark/cloud-architecture-analyst-v-salary">$150,866 /year.</a>
          </li>
          <li>
          Computer Systems Analyst <a href="https://www.payscale.com/research/US/Job=Computer_Systems_Analyst/Salary">$73,318 /year.</a>
          </li>
          <li>
          Cloud Security Analyst <a href="https://www.indeed.com/career/salaries/cloud%20security%20analyst">$94,796 / year.</a>
          </li>
          <li>
          Cloud Database Administrator <a href="https://www.talent.com/salary?job=cloud+dba#:~:text=The%20average%20Cloud%20Dba%20salary%20in%20USA%20is%20%24130%2C000%20per,up%20to%20%24165%2C750%20per%20year.">$130,000 / year.</a>
          </li>
        </ol>
      </div>

      {/* youtube section */}
      <div className="border border-1 border-white container mt-4 mb-4">
        <h3 className="text-center mb-3">Media Links</h3>
        
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-6">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/M988_fsOSWo" title="Cloud Computing In 6 Minutes | What Is Cloud Computing? | Cloud Computing Explained | Simplilearn" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-md-6">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/xIyDhaIfC1I" title="How To Become A Cloud Engineer - 7 Tips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CloudComputePage