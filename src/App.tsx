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
import { UserProvider } from './context/UserContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
    return (
        <>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<DashboardLayout />} >
                        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                        <Route path="/students" element={<ProtectedRoute><Students /></ProtectedRoute>} />
                        <Route path="/students/:id" element={<ProtectedRoute><Student /></ProtectedRoute>} />
                        <Route path="/classes" element={<ProtectedRoute><Classes /></ProtectedRoute>} />
                        <Route path="/classes/:id" element={<ProtectedRoute><Class /></ProtectedRoute>} />
                        <Route path="/teachers" element={<ProtectedRoute><Teachers /></ProtectedRoute>} />
                        <Route path="/teachers/:id" element={<ProtectedRoute><Teacher /></ProtectedRoute>} />
                        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </UserProvider>
        </>
    );
}

export default App;