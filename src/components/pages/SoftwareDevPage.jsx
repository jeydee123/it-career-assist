import React, { useEffect } from 'react'
import { AppContext } from '../../context/Context'
import {useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from 'react'

const SoftwareDevPage = () => {
  // Use the useContext hook to get the 'name' value from the context API
  const {name} = useContext(AppContext)
  // Use the useNavigate hook to create a 'navigate' function for navigating to different pages
  let navigate = useNavigate()
  // keeping state of the jokes about software developers
  const [jokes, setJokes] = useState([]);

// Use the useEffect hook to run some code when the component is first rendered
  useEffect(() => {
    // If the 'name' value from the context is non-existent, navigate to the root page '/'
    if(!name) {
      navigate('/')
    }
    //calling the software development jokes API
    fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10')
    .then(response => response.json())
    //updating the state of the jokes to the response from the api call (storing the jokes returned from the API in the jokes variable)
    .then(data => setJokes(data.jokes));
}, [])

//return the UI for the beginners guide page
  return (
    <div className="container text-white">
      <h1 className="text-center mt-5 animate-character-h1">Software Development</h1>
       {/* intro section */}
      <div className="border border-1 border-white container">
        <h3 className="text-center"> What is Software Development?</h3>
        <p>Software development is primarily conducted by programmers, software engineers and software developers. These roles interact and overlap, and the dynamics between them vary greatly across development departments and communities. </p>
        <p>Programmers, or coders, write source code to program computers for specific tasks like merging databases, processing online orders, routing communications, conducting searches or displaying text and graphics. Programmers typically interpret instructions from software developers and engineers and use programming languages like C++ or Java to carry them out.</p>
        <p>Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software.Software itself is the set of instructions or programs that tell a computer what to do. It is independent of hardware and makes computers programmable. (IBM)</p>
      </div>
{/* facts and statistics section */}
      <div className="border border-1 border-white container mt-4">
        <h3 className="text-center"> Facts and Statistics</h3>
        <ol>
          <li>
          The average annual base salary for a software developer is $73,967. 
          </li>
          <li>
          There are approximately 26.9 million software developers in the world.
          </li>
          <li>
          Europe has an estimated 6.1 million developers.
          </li>
          <li>
          The global software development market size was valued at 429.59 billion in 2021 and is expected to expand at a CAGR of 11.7% from 2022 to 2030. 
          </li>
          <li>
          The average software developer age is between 25 and 34 years.
          </li>
        </ol>
      </div>
      {/* Salary and Positions section */}
      <div className="border border-1 border-white container mt-4">
        <h3 className="text-center"> Salaries and Positions Information</h3>
        <ol>
          <li>
          Web programmer:  <a href="https://www.glassdoor.com/Salaries/web-programmer-salary-SRCH_KO0,14.htm">$84,511</a>
          </li>
          <li>
          Java Developer: <a href="https://www.glassdoor.com/Salaries/java-developer-salary-SRCH_KO0,14.htm">$99,855.</a>
          </li>
          <li>
          Analyst programmers: $113,017
          </li>
          <li>
          Web application programmers: $97,696
          </li>
        </ol>
      </div>
      {/* Software Development Jokes */}
      <div className="border border-1 border-white container mt-4">
        <h3 className="text-center"> Some Jokes About Software Development!</h3>
        {/* iterating through the jokes and creating a list of jokes to display on the UI */}
        <ul>
          {jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </div>
{/* youtube section */}
      <div className="border border-1 border-white container mt-4 mb-4">
        <h3 className="text-center mb-3">Media Links</h3>
        
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-6">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/k9WqpQp8VSU" title="How I Would Learn To Code (If I Could Start Over)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-md-6">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/zOjov-2OZ0E" title="Introduction to Programming and Computer Science - Full Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SoftwareDevPage