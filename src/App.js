import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Start from './components/Start';
import Login from './components/Login'
import Signup from './components/Signup'
import MyExamPage from './components/MyExamPage'
import ForgotPassword from './components/ForgotPassword'
import Newpassword from './components/Newpassword'
import NewExam from './components/NewExam';
import Result from './components/Result';
import OTP from './components/OTP';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Start" element = {<Start />} />  
                <Route path="/Login" element = {<Login />} />
                <Route path="/Signup" element = {<Signup />} />
                <Route path="/MyExamPage" element = {<MyExamPage />} />
                <Route path="/ForgotPassword" element = {<ForgotPassword />} />
                <Route path ="/Newpassword" element = {<Newpassword />} />
                <Route path ="/NewExam" element = {<NewExam />} />
                <Route path = "/Result" element = {<Result />} />
                <Route path = "/OTP" element = {<OTP />} />
                <Route index element={<Start />} />
            </Routes>
        </Router>
    );
}

export default App