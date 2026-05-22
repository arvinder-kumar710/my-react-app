import db from "../config/db.js";

// ✅ Insert student
export const insertStudent = (data, callback) => {
  const sql = "INSERT INTO add_new_student SET ?";
  db.query(sql, data, callback);
};

// ✅ Fetch all students
export const fetchAllStudents = (callback) => {
  const sql = "SELECT * FROM add_new_student";
  db.query(sql, callback);
};

// ✅ Check if roll number exists
export const checkRollNoExists = (roll, callback) => {
  const sql = "SELECT id FROM add_new_student WHERE roll = ?";
  db.query(sql, [roll], callback);
};

// ✅ Check if email exists
export const checkEmailExists = (email, callback) => {
  const sql = "SELECT id FROM add_new_student WHERE email = ?";
  db.query(sql, [email], callback);
};

// ✅ Check if admissionId exists
export const checkAdmissionIdExists = (admissionId, callback) => {
  const sql = "SELECT id FROM add_new_student WHERE admissionId = ?";
  db.query(sql, [admissionId], callback);
};

// ✅ Check duplicate roll, email, admissionId in one query (for faster checking)
export const checkDuplicate = (roll, email, admissionId, callback) => {
  const sql = `
    SELECT roll, email, admissionId
    FROM add_new_student
    WHERE roll = ? OR email = ? OR admissionId = ?
  `;
  db.query(sql, [roll, email, admissionId], callback);
};
