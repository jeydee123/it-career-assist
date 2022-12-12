import React, { useEffect } from 'react'
import { AppContext } from '../../context/Context'
import {useNavigate } from 'react-router-dom'
import { useContext } from 'react'
const NetworkingPage = () => {
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
        <h1 className="text-center mt-5 animate-character-h1">Network Engineering</h1>
        
        {/* intro section */}
        <div className="border border-1 border-white container">
          <h3 className="text-center"> What is Network Engineering?</h3>
          <p>A computer network comprises two or more computers that are connected—either by cables (wired) or WiFi (wireless)—with the purpose of transmitting, exchanging, or sharing data and resources. You build a computer network using hardware (e.g., routers, switches, access points, and cables) and software (e.g., operating systems or business applications).</p>
          <p>Geographic location often defines a computer network. For example, a LAN (local area network) connects computers in a defined physical space, like an office building, whereas a WAN (wide area network) can connect computers across continents. The internet is the largest example of a WAN, connecting billions of computers worldwide.</p>
          <p>You can further define a computer network by the protocols it uses to communicate, the physical arrangement of its components, how it controls traffic, and its purpose.</p>
          <p>Computer networks enable communication for every business, entertainment, and research purpose. The internet, online search, email, audio and video sharing, online commerce, live-streaming, and social networks all exist because of computer networks. (IBM) </p>
        </div>

        {/* facts and statistics section */}
        <div className="border border-1 border-white container mt-4">
          <h3 className="text-center"> Facts and Statistics</h3>
          <ol>
            <li>
            Internet was invented by ARPANET in 1983.
            </li>
            <li>
            Internet is controlled by 75 million servers.
            </li>
            <li>
            The backbone of the internet is made by 550, 000 miles of underwater cable.
            </li>
            <li>
            About one billion computer systems are connected to the internet. 
            </li>
            <li>
            About 3.2 billion people use the internet from which 1.7 billion internet users are Asians. 6. The Internet consists of five billion computing devices such as computers, phones, modems, switches, routers, etc.
            </li>
            <li>
            According to Google, the Internet consists of 5 million Terabytes of data. 
            </li>
            <li>
            If the internet goes down for a day, approximately 200 billion emails and 3 billion Google searches would have to wait. 
            </li>
            <li>
            Approximately 204 million emails per minute are sent over the Internet. 70% of them are spam.
            </li>
            <li>
            269 billion emails are sent per day. 
            </li>
            <li>
            30, 000 websites are hacked every day.
            </li>
            <li>
            50 million horsepower is required by the internet to keep running in its current state.
            </li>
          </ol>
        </div>

        {/* Salary and Positions section */}
      <div className="border border-1 border-white container mt-4">
        <h3 className="text-center"> Salaries and Positions Information</h3>
        <ol>
          <li>
          Network Architect – $112,690
          </li>
          <li>
          Network Security Manager – $96,352
          </li>
          <li>
          Network and Computer Systems Administrators – $83,510
          </li>
          <li>
          Wireless Network Engineer – $81,234
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
              <iframe width="100%" height="500" src="https://www.youtube.com/embed/qiQR5rTSshw" title="Computer Networking Course - Network Engineering [CompTIA Network+ Exam Prep]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="col-md-6">
              <iframe width="100%" height="500" src="https://www.youtube.com/embed/_IOZ8_cPgu8" title="Networking basics (2020) | What is a switch, router, gateway, subnet, gateway, firewall & DMZ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    )
  
}

export default NetworkingPage