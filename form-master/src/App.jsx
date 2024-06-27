
import './App.css'
// import Refform from './Components/RefForm/Refform'
import ReusuableForm from './Components/ReusuableForm/ReusuableForm'
// import StatefullForm from './Components/StateFullForm/StatefullForm'
// import SimpleForm from './Components/SImpleForm/SimpleForm'

function App() {


  const handleSignUpSubmit = (files)=>{
    console.log("SignUp data :",files)
}

const handleGoSubmit = (files)=>{
  console.log("Go :",files)
}
  return (
    <>
      <h1>React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <Refform></Refform> */}
      <ReusuableForm formTitle="SignUp" handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up right now</p>
        </div>
      </ReusuableForm>
      <ReusuableForm formTitle = "Profile Update" btnText={"Go"} handleSubmit={handleGoSubmit}>
        <div>
          <h2>Go Right now</h2>
          <p>Please go for the sign Up</p>
        </div>
      </ReusuableForm>
    </>
  )
}

export default App
