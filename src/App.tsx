import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import Student from './pages/Student';
import Classes from './pages/Classes';
import Class from './pages/Class';
import Teachers from './pages/Teachers';
import Teacher from './pages/Teacher';
import Settings from './pages/Settings';
import DashboardLayout from './layouts/DashboardLayout';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<DashboardLayout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/students/:id" element={<Student />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/classes/:id" element={<Class />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/teachers/:id" element={<Teacher />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;