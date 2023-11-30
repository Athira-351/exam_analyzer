import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import End from './components/end';
import Ans from './components/answersheet';

function App() {

    const userId = localStorage.getItem('userId')

    if (userId) {
        return (
            <Router>
                <Routes>
                    <Route index Component={Start} />
                    <Route path="/login" Component={Login} />
                    <Route path="/signup" Component={Signup} />
                    <Route path="/forgot-password" Component={ForgotPassword} />
                    <Route path="/new-password" Component={Newpassword} />
                    <Route path="/otp" Component={OTP} />
                    <Route path="/new-exam" Component={NewExam} />
                    <Route path="/my-exam-page" Component={MyExamPage} />
                    <Route path="/result" Component={Result} />
                    <Route path="/next" Component={Next} />
                    <Route path="/answersheet/:examId" Component={Ans} />
                    <Route path="/end" Component={End} />
                </Routes>
            </Router>
        );
    } else {
        return (
            <Router>
                <Routes>
                    <Route index Component={Start} />
                    <Route path="/login" Component={Login} />
                    <Route path="/signup" Component={Signup} />
                    <Route path="/forgot-password" Component={ForgotPassword} />
                    <Route path="/new-password" Component={Newpassword} />
                    <Route path="/otp" Component={OTP} />
                </Routes>
            </Router>
        )
    }
}

export default App