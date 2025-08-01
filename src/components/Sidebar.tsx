import { Link } from 'react-router-dom';
import {useState } from "react";


const Sidebar: React.FC = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isStudentOpen, setIsStudentOpen] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);
    const [isParents, setIsParents] = useState(false);
    const [isLibrary, setIsLibrary] = useState(false);
    const [isAcconunt, setIsAcconunt] = useState(false);
    const[isClass, setIsClass] = useState(false);
    const[isExam,setIsExam] =useState(false);

    return (
        <div className="d-flex flex-column p-3 text-white bg-dark vh-100" style={{ width: "500px" }}>
            <h4 className="text-center">RMS School</h4>
            <ul className="nav nav-pills flex-column">
                {/* Dashboard with Submenu */}
                <li className="nav-item">
                    <a 
                        className="nav-link text-white d-flex justify-content-between align-items-center"
                        onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                        style={{ cursor: "pointer" }}
                    >
                        <span>
                            <i className="fi fi-rr-dashboard"></i> Dashboard
                        </span>
                        <img 
                            src={isDashboardOpen ?  "/down.png":"/up.png"} 
                            alt="Toggle Icon" 
                            style={{ width: "15px", height: "15px" }} 
                        />
                    </a>
                    {isDashboardOpen && (
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item">
                                <Link to="#" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i> Admin</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/reports" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i> Students</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/settings" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i> Parents</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/settings" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Teachers</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
               {/* Students with Submenu */}
                <li className="nav-item">
                    <a 
                        className="nav-link text-white d-flex justify-content-between align-items-center"
                        onClick={() => setIsStudentOpen(!isStudentOpen)}
                        style={{ cursor: "pointer" }}
                    >
                        <span>
                        <i className="fi fi-rr-people"></i> Students
                        </span>
                        <img 
                            src={isDashboardOpen ?  "/down.png":"/up.png"} 
                            alt="Toggle Icon" 
                            style={{ width: "15px", height: "15px" }} 
                        />
                    </a>
                    {isStudentOpen && (
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item">
                                <Link to="/dashboard/students" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>All Students</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/about-student" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Student Details</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/studetn-adminsion-form" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Admission Form</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/student-promotion" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Student Promotion</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                {/* Teachers with Submenu */}
                <li className="nav-item">
                    <a 
                        className="nav-link text-white d-flex justify-content-between align-items-center"
                        onClick={() => setIsTeacher(!isTeacher)}
                        style={{ cursor: "pointer" }}
                    >
                        <span>
                        <i className="fi fi-rr-school"></i> Teachers
                        </span>
                        <img 
                            src={isDashboardOpen ?  "/down.png":"/up.png"} 
                            alt="Toggle Icon" 
                            style={{ width: "15px", height: "15px" }} 
                        />
                    </a>
                    {isTeacher && (
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item">
                                <Link to="/all-teachers" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>All Teachers</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/teacher-details" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Teacher Details</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add-new-teacher" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Add Teacher</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/teacher-payment" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Payment</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                 
                {/* Parents with Submenu */}
                <li className="nav-item">
                    <a 
                        className="nav-link text-white d-flex justify-content-between align-items-center"
                        onClick={() => setIsParents(!isParents)}
                        style={{ cursor: "pointer" }}
                    >
                        <span>
                        <i className="fi fi-rr-family"></i> Parents
                        </span>
                        <img 
                            src={isDashboardOpen ?  "/down.png":"/up.png"} 
                            alt="Toggle Icon" 
                            style={{ width: "15px", height: "15px" }} 
                        />
                    </a>
                    {isParents && (
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item">
                                <Link to="/all-parents" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>All Parents</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/parents-details" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Parents Details</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add-parents" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Add Parent</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                {/* Library with Submenu */}
                <li className="nav-item">
                    <a 
                        className="nav-link text-white d-flex justify-content-between align-items-center"
                        onClick={() => setIsLibrary(!isLibrary)}
                        style={{ cursor: "pointer" }}
                    >
                        <span>
                        <i className="fi fi-rr-book"></i> Library
                        </span>
                        <img 
                            src={isDashboardOpen ?  "/down.png":"/up.png"} 
                            alt="Toggle Icon" 
                            style={{ width: "15px", height: "15px" }} 
                        />
                    </a>
                    {isLibrary && (
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item">
                                <Link to="/all-book" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>All Book</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/all-books-2" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>All Book 2</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add-book" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Add New Book</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                 {/* Acconunt with Submenu */}
                 <li className="nav-item">
                    <a 
                        className="nav-link text-white d-flex justify-content-between align-items-center"
                        onClick={() => setIsAcconunt(!isAcconunt)}
                        style={{ cursor: "pointer" }}
                    >
                        <span>
                        <i className="fi fi-rr-user"></i> Acconunt
                        </span>
                        <img 
                            src={isDashboardOpen ?  "/down.png":"/up.png"} 
                            alt="Toggle Icon" 
                            style={{ width: "15px", height: "15px" }} 
                        />
                    </a>
                    {isAcconunt && (
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item">
                                <Link to="/all-fees" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>All Fees Collection</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/all-expense" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Expenses</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add-expense" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Add Expenses</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                {/* Class with Submenu */}

                <li className="nav-item">
                    <a 
                        className="nav-link text-white d-flex justify-content-between align-items-center"
                        onClick={() => setIsClass(!isClass)}
                        style={{ cursor: "pointer" }}
                    >
                        <span>
                        <i className="fi fi-rr-graduation-cap"></i> Class
                        </span>
                        <img 
                            src={isDashboardOpen ?  "/down.png":"/up.png"} 
                            alt="Toggle Icon" 
                            style={{ width: "15px", height: "15px" }} 
                        />
                    </a>
                    {isClass && (
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item">
                                <Link to="/all-class" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>All Classes</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add-class" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i>Add New Class</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="nav-item">
                    <Link to="/all-subject" className="nav-link text-white">
                    <i className="fi fi-rr-notebook"></i><span>Subject</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/account" className="nav-link text-white">
                    <i className="fi fi-rr-briefcase"></i><span>Class Routine</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/account" className="nav-link text-white">
                    <i className="fi fi-rr-user-check"></i><span>Attendence</span>
                    </Link>
                </li>
                {/* Exam with Submenu */}
                <li className="nav-item">
                    <a 
                        className="nav-link text-white d-flex justify-content-between align-items-center"
                        onClick={() => setIsExam(!isExam)}
                        style={{ cursor: "pointer" }}
                    >
                        <span>
                        <i className="fi fi-rr-clipboard-list"></i> Exam
                        </span>
                        <img 
                            src={isDashboardOpen ?  "/down.png":"/up.png"} 
                            alt="Toggle Icon" 
                            style={{ width: "15px", height: "15px" }} 
                        />
                    </a>
                    {isExam && (
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item">
                                <Link to="/dashboard/overview" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i> Exam Schedule</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/reports" className="nav-link text-white">
                                <span><i className="fi fi-rr-arrow-right"></i> Exam Grade</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                {/*<li className="nav-item">
                    <Link to="/account" className="nav-link text-white">
                    <i className="fi fi-rr-clipboard-list"></i><span>Exam</span>
                    </Link>
                </li>*/}
                <li className="nav-item">
                    <Link to="/account" className="nav-link text-white">
                    <i className="fi fi-rr-bus"></i><span>Transport</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/account" className="nav-link text-white">
                    <i className="fi fi-rr-building"></i><span>Hostel</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/account" className="nav-link text-white">
                    <i className="fi fi-rr-file"></i><span>Notice</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/account" className="nav-link text-white">
                    <i className="fi fi-rr-clipboard"></i><span>Messeage</span> 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/account" className="nav-link text-white">
                    <i className="fi fi-rr-map"></i><span>Map</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/account" className="nav-link text-white">
                    <i className="fi fi-rr-user"></i><span>Account</span> 
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
