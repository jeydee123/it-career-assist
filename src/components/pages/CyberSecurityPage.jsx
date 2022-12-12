import React, { useEffect } from 'react'
import { AppContext } from '../../context/Context'
import {useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const CyberSecurityPage = () => {
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
      <h1 className="text-center mt-5 animate-character-h1">Cyber Security</h1>
 {/* intro section */}
      <div className="border border-1 border-white container">
        <h3 className="text-center"> What is Cyber Security?</h3>
        <p>Cybersecurity is the practice of protecting critical systems and sensitive information from digital attacks. Also known as information technology (IT) security, 
          cybersecurity measures are designed to combat threats against networked systems and applications, whether those threats originate from inside or outside of an organization.
          In 2020, the average cost of a data breach was USD 3.86 million globally, and USD 8.64 million in the United States.</p>
        <p>These costs include the expenses of discovering and responding to the breach, the cost of downtime and lost revenue, 
          and the long-term reputational damage to a business and its brand. Cyber criminals target customers’ personally identifiable information (PII) — names, addresses, national 
          identification numbers (e.g., Social Security number in the US, fiscal codes in Italy), and credit card information — and then sell these records in underground digital marketplaces. 
          Compromised PII often leads to a loss of customer trust, the imposition of regulatory fines, and even legal action. </p>
        <p>Security system complexity, created by disparate technologies and a lack of in-house expertise, can amplify these costs. But organizations with a comprehensive cybersecurity strategy,
           governed by best practices and automated using advanced analytics, artificial intelligence (AI) and machine learning, can fight cyberthreats more effectively and reduce the lifecycle and
            impact of breaches when they occur. (IBM) </p>
      </div>
{/* facts and statistics section */}
      <div className="border border-1 border-white container mt-4">
        <h3 className="text-center"> Facts and Statistics</h3>
        <ol>
          <li>
            PwC's 2022 Global Digital Trust Insights shows that more organizations (66%) are expecting cyber budget growth compared to previous years. Of these companies, over a third project double-
            digit cyber spending growth. (Fortinet) 
          </li>
          <li>
            Cybersecurity Ventures estimates that an increase in cybercrime and the need for digitized businesses and consumers to guard against such crimes will drive up expenditure on cybersecurity
             products and services to $1.75 trillion between 2021 and 2025. 
          </li>
          <li>
          Deloitte performed a 2021 survey to find the greatest challenges for CISOs and CIOs. Over 40% responded that transformation and hybrid IT were the most difficult parts of cybersecurity management. 
          </li>
          <li>
          In August 2021, Google announced its commitment to strengthening cybersecurity with a pledge of $10 billion by 2025. This investment will focus on advancing open-source security, zero-trust programs, and the software supply chain. 
          </li>
          <li>
          In June 2022, the US House Appropriations Committee released spending bills for 2023 that allocate $15.6 billion to federal cybersecurity efforts.
          </li>
          <li>
          According to data from Fortune Business Insights, the global cyber insurance market will expand at a CAGR of 25.3% between 2021 and 2028. It's expected to reach $36.85 billion in 2028. 
          </li>
          <li>
          According to Sophos' State of Ransomware 2022 report, only 4% of businesses that pay the ransom when held hostage by ransomware actually retrieve all their stolen data.
          </li>
          <li>
          A 2022 IBM security report revealed a surge in various cyberattacks between 2020-2021. Notably, those caused by exploiting vulnerabilities have increased by 33%.
          </li>
          <li>
          Between 2020 and 2021, the average data breach cost rose almost 10%, reaching $4.24 million. This is the highest growth rate seen in the past seven years, according to IBM’s Cost of a Data Breach 2021 report. 
          </li>
          <li>
          The Javelin Strategy and Research's 2021 Identity Fraud Study revealed that identity fraud losses reached $56 billion in 2020, with $13 billion lost from traditional identity fraud and $43 billion lost from identity fraud scams 
          </li>
        </ol>
      </div>
      {/* Salary and Positions section */}
      <div className="border border-1 border-white container mt-4">
        <h3 className="text-center"> Salaries and Positions Information</h3>
        <ol>
          <li>
          Information Security Manager	$150,000-$225,000
          </li>
          <li>
          Cyber Security Engineer	$120,000-$210,000
          </li>
          <li>
          Application Security Engineer	$130,000-$200,000
          </li>
          <li>
          Network Security Engineer	$125,000-$185,000
          </li>
          <li>
          Cyber Security Analyst	$95,000-$160,000
          </li>
          <li>
          Penetration Tester “Ethical Hacker”	$80,000-$130,000
          </li>
        </ol>
      </div>
{/* youtube section */}
      <div className="border border-1 border-white container mt-4 mb-4">
        <h3 className="text-center mb-3">Media Links</h3>
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-6">
              <iframe width="100%" height="500" src="https://www.youtube.com/embed/PlhNVmaACQI" title="2022 Guide to Entry-Level Cybersecurity Jobs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-md-6">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/VFns39RXPrU" title="Edward Snowden: How Your Cell Phone Spies on You" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CyberSecurityPage