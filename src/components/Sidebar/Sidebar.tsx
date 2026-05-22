import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // We will create this file

const Sidebar: React.FC = () => {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    const toggleMenu = (menuName: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuName]: !prev[menuName],
        }));
    };

    return (
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100">
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4 fw-bold ps-2">RMS School</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto custom-nav">
                
                {/* Dashboard Menu */}
                <li className="nav-item">
                    <div className={`nav-link-wrapper ${openMenus['dashboard'] ? 'active-parent' : ''}`}>
                        <button 
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-white w-100 justify-content-between"
                            onClick={() => toggleMenu('dashboard')}
                        >
                            <span><i className="fi fi-rr-dashboard me-2"></i> Dashboard</span>
                            <i className={`fi fi-rr-angle-small-down arrow-icon ${openMenus['dashboard'] ? 'rotate' : ''}`}></i>
                        </button>
                    </div>
                    <div className={`collapse-menu ${openMenus['dashboard'] ? 'show' : ''}`}>
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-4">
                            <li><Link to="/admin" className="nav-link text-white-50"><i className="fi fi-rr-arrow-small-right me-1"></i> Admin</Link></li>
                            <li><Link to="/students-dash" className="nav-link text-white-50"><i className="fi fi-rr-arrow-small-right me-1"></i> Students</Link></li>
                            <li><Link to="/parents-dash" className="nav-link text-white-50"><i className="fi fi-rr-arrow-small-right me-1"></i> Parents</Link></li>
                        </ul>
                    </div>
                </li>

                {/* Students Menu */}
                <li className="nav-item">
                    <div className={`nav-link-wrapper ${openMenus['student'] ? 'active-parent' : ''}`}>
                        <button 
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-white w-100 justify-content-between"
                            onClick={() => toggleMenu('student')}
                        >
                            <span><i className="fi fi-rr-people me-2"></i> Students</span>
                            <i className={`fi fi-rr-angle-small-down arrow-icon ${openMenus['student'] ? 'rotate' : ''}`}></i>
                        </button>
                    </div>
                    <div className={`collapse-menu ${openMenus['student'] ? 'show' : ''}`}>
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-4">
                            <li><Link to="/all-students" className="nav-link text-white-50">All Students</Link></li>
                            <li><Link to="/student-details" className="nav-link text-white-50">Student Details</Link></li>
                            <li><Link to="/admission-form" className="nav-link text-white-50">Admission Form</Link></li>
                        </ul>
                    </div>
                </li>

                {/* Teachers Menu */}
                <li className="nav-item">
                    <div className={`nav-link-wrapper ${openMenus['teacher'] ? 'active-parent' : ''}`}>
                        <button 
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-white w-100 justify-content-between"
                            onClick={() => toggleMenu('teacher')}
                        >
                            <span><i className="fi fi-rr-school me-2"></i> Teachers</span>
                            <i className={`fi fi-rr-angle-small-down arrow-icon ${openMenus['teacher'] ? 'rotate' : ''}`}></i>
                        </button>
                    </div>
                    <div className={`collapse-menu ${openMenus['teacher'] ? 'show' : ''}`}>
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-4">
                            <li><Link to="/all-teachers" className="nav-link text-white-50">All Teachers</Link></li>
                            <li><Link to="/add-teacher" className="nav-link text-white-50">Add Teacher</Link></li>
                        </ul>
                    </div>
                </li>

                {/* Simple Menu (No Dropdown) */}
                <li className="nav-item mt-2">
                    <Link to="/attendance" className="nav-link text-white d-flex align-items-center">
                        <i className="fi fi-rr-user-check me-2"></i> Attendance
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;