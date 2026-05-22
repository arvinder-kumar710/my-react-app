// backend/models/callbackModal.js

import db from "../config/db.js"; // 💡 Ensure this path to your database config is correct

/**
 * Inserts a new callback request record into the database.
 * @param {object} data - The data object to insert. Keys must match column names.
 * @param {function} callback - Callback function (err, results).
 */
export const insertRequestCallBack = (data, callback) => {
    // 💡 Ensure column names match the database table: parent_name, class_interest, phone_number, etc.
    const sql = "INSERT INTO callback_requests SET ?";
    db.query(sql, data, callback);
};