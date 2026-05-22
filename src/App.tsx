import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/SchoolFrontend/login/Login';
import DashboardLayout from './DashboardLayout';
import Dashboard from './components/Dashboard';
import ProtectedRoute from "./components/ProtectedRoute";
import AllStudentsData from './pages/students/AllStudentsData';
import StudentDetails from './pages/students/StudentDetails';
import StudentAdmitForm from "./pages/students/StudentAdmitForm";
import StudentPromotionForm from "./pages/students/StudentPromotionForm";
import AllTeacherData from "./pages/teachers/AllTeacherData";
import TeacherDetails from "./pages/teachers/TeacherDetails";
import AddTeachers from "./pages/teachers/AddTeachers";
import TeacherPaymentHistory from "./pages/teachers/TeacherPaymentHistory";
import AllparentsData from "./pages/Parents/AllparentsData";
import ParentsDetails from "./pages/Parents/ParentsDetails";
import AddParents from "./pages/Parents/AddParents";
import AllLibraryBooks from "./pages/library/AllLibraryBooks";
import AllBooks from "./pages/library/AllBooks";
import AddNewBook from "./pages/library/AddNewBook";
import AllFeesCollection from "./pages/acconunt/AllFeesCollection";
import AllExpense from "./pages/acconunt/AllExpense";
import Add_new_expense from "./pages/acconunt/Add_new_expense";
import All_class from "./pages/class/All_class";
import Add_new_class from "./pages/class/Add_new_class";
import AllSubjects from "./pages/AllSubjects";
import StudentForm from "./pages/StudentForm";
import HomePage from "./components/SchoolFrontend/HomePage";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard layout */}
        <Route path="/dashboard"  element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }>
          {/* This will show inside <Outlet /> in DashboardLayout */}
          <Route index element={<Dashboard />} />
          <Route path="students" element={<AllStudentsData />} />
          <Route path="about-student" element={<StudentDetails />} />
          <Route path="studetn-adminsion-form" element={<StudentAdmitForm />} />
                        <Route path="student-promotion" element={<StudentPromotionForm />} />
                        <Route path="all-teachers" element={<AllTeacherData />} />
                        <Route path="teacher-details" element={<TeacherDetails />} />
                        <Route path="add-new-teacher" element={<AddTeachers />} />
                        <Route path="teacher-payment" element={<TeacherPaymentHistory />} />
                        <Route path="all-parents" element={<AllparentsData />} />
                        <Route path="parents-details" element={<ParentsDetails />} />
                        <Route path="add-parents" element={<AddParents />} />
                        <Route path="all-book" element={<AllLibraryBooks />} />
                        <Route path="all-books-2" element={<AllBooks />} />
                        <Route path="add-book" element={<AddNewBook />} />
                        <Route path="all-fees" element={<AllFeesCollection />} />
                        <Route path="all-expense" element={<AllExpense />} />
                        <Route path="add-expense" element={<Add_new_expense />} />
                        <Route path="all-class" element={<All_class />} />
                        <Route path="add-class" element={<Add_new_class />} />
                        <Route path="all-subject" element={<AllSubjects />} />
                        <Route path="StudentForm" element={<StudentForm />} />
                        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
