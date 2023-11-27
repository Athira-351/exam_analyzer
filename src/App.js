import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Start from './components/start';
import Login from './components/login';
import Signup from './components/signup';
import MyExamPage from './components/my-exam-page';
import ForgotPassword from './components/forgot-password';
import Newpassword from './components/new-password';
import NewExam from './components/new-exam';
import Result from './components/result';
import OTP from './components/otp';
import Next from './components/next';
import MyExams from './components/my-exams';
import End from './components/end';
import Ans from './components/answersheet';

function App() {
    return (

        <Router>
            <Routes>
                <Route path="/start" element = {<Start />} />  
                <Route path="/login" element = {<Login />} />
                <Route path="/signup" element = {<Signup />} />
                <Route path="/my-exam-page" element = {<MyExamPage />} />
                <Route path="/forgot-password" element = {<ForgotPassword />} />
                <Route path ="/new-password" element = {<Newpassword />} />
                <Route path ="/new-exam" element = {<NewExam />} />
                <Route path = "/result" element = {<Result />} />
                <Route path = "/otp" element = {<OTP />} />
                <Route path = "/next" element = {<Next />} />
                <Route path = "/my-exams" element = {<MyExams />} />
                <Route path = "/answersheet" element = {<Ans />} />
                <Route path = "/end" element = {<End />} />
                <Route index element={<Start />} />                
            </Routes>
        </Router>

    );
}

export default App