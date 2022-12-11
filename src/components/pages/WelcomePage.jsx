import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/Context';

const WelcomePage = () => {
    // Use the useNavigate hook to create a 'navigate' function for navigating to different pages
    let navigate = useNavigate();
    // Use the useContext hook to import the 'setName' value from the context API to update the name when entered by the user
    const {setName} = useContext(AppContext)

  return (
    <div className="container text-white">
      <h1 className="text-center welcome-header">Welcome to IT Career Assist</h1>
      <div className="center-question">
          <div className="row justify-content-center">
            <div className="col=sm-auto">
              <h2 className="animate-character">Enter your name below to begin</h2>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-sm-auto">
              {/* updating the stored "name" any time anything is inputted in the input box */}
            <input className = "bg-light border-secondary" onChange={e => setName(e.target.value)} type="text" name="name" />
          </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-sm-auto">
              {/* sending the user to questions page once they click submit */}
            <button className="btn btn-outline-secondary btn-light" onClick = {() => navigate('/questions')}><strong>Submit</strong></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage