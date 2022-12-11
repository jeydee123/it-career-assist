import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/Context'
import {useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from "react-toastify"

const QuestionPage = () => {
  // Use the useContext hook to get the 'name' value from the context API
  const {name} = useContext(AppContext)
  // Use the useNavigate hook to create a 'navigate' function for navigating to different pages
  let navigate = useNavigate()
  //creating a list of questions to iterate through
  let questionsList = [" are you a beginner?", " are you interested in software development?", " are you interested in network engineering?", " are you interested in cyber security?", " are you interested in cloud computing?"]
  //keeping count of what question # the user is on
  let [questionCount, setQuestionCount] = useState(0)
  //setting the current question on the UI to match the question # the user is currently on
  let [currentQuestion, setCurrentQuestion] = useState(questionsList[questionCount])

  // Use the useEffect hook to run some code when the component is first rendered
  useEffect(() => {
    // If the 'name' value from the context is non-existent, navigate to the root page '/'
    if(!name) {
      navigate('/')
    }
    //updating the current question whenever the question count increases
    setCurrentQuestion(questionsList[questionCount])
    //making sure that if the user said "no" to all the questions, for them to start the survey all over again
    if (questionCount > 4) {
      setQuestionCount(0)
      setCurrentQuestion(questionsList[0])
      //notifying the user that they must say yes to at least one question
      toast.error("You must answer yes to one of the questions " + name)
    }
}, [questionCount]) //whenever questionCount is updated, page will be re-rendered and useEffect function will be re-ran

  //when ever "no" is selected, update the question count +1
  function noHandler() {
    setQuestionCount(questionCount+1)
  }

  //whenever "yes" is selected, navigate to the appropriate URL in accordance to the question number they are on
  function navigator() {
    if (questionCount === 0) {
      navigate('/beginnerGuide')
    } else if (questionCount === 1) {
      navigate('/softwareDevelopment')
    } else if (questionCount === 2) {
      navigate('/networking')
    } else if (questionCount === 3) {
      navigate('/cyberSecurity')
    } else if (questionCount === 4) {
      navigate('/cloudComputing')
    }
    
  }
  return (
    <div className="container">
      <div className="center-question">
        {/* displaying the current question */}
          <div className="row">
            <div className="col-xs-auto col-sm-auto col-md-auto col-xl-auto col-xxl-auto">
              <h2 className="animate-character">{name} {currentQuestion}</h2>
            </div>
          </div>
          {/* yes and no buttons */}
          <div className="row justify-content-center">
            <div className="col-xs-6 col-sm-4 col-md-4 col-xl-3 col-xxl-3">
              {/* calling navigator function every time yes is clicked */}
              <button className="btn btn-outline-secondary btn-light" onClick = {navigator}><strong>Yes</strong></button>
            </div>

            <div className="col-xs-6 col-sm-4 col-md-4 col-xl-3 col-xxl-3">
              {/* calling noHandler function every time no is clicked */}
              <button className="btn btn-outline-secondary btn-light" onClick={noHandler}><strong>No</strong></button>
            </div>
          
        </div>
      </div>
      {/* this is set for the toast notifications to work to let them know that they need to answer yes to at least one question */}
      <ToastContainer/>
    </div>
  )
}

export default QuestionPage