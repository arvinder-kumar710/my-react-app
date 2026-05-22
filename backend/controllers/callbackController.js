// backend/controllers/callbackController.js

// 💡 Corrected import name: callbackModal
import { insertRequestCallBack } from "../models/callbackModal.js"; // 💡 Ensure this path is correct

/**
 * Handles insertion of a new request call entry.
 * POST /api/callback/add
 */
export const addRequestCall = async (req, res, next) => {
  try {
    const { 
      parent_name, 
      country_code, 
      phone_number, 
      email, 
      class_interest, 
      alternate_number 
    } = req.body;

    // 1. Basic validation check
    if (!parent_name || !phone_number || !email || !class_interest || !country_code) {
      return res.status(400).json({ error: "Missing required fields: Parent Name, Phone, Email, Class, and Country Code." });
    }

    // 2. Prepare data object for MySQL insertion
    const requestData = {
        parent_name,
        country_code,
        phone_number,
        email,
        class_interest,
        alternate_number: alternate_number || null, // Handle optional field
        // status and request_time use defaults in the SQL table
    };

    // 3. Call model function to insert data
    insertRequestCallBack(requestData, (err, results) => {
      if (err) {
        console.error('Database insertion error:', err);
        // Handle database specific errors (e.g., duplicate entry if you set a unique index)
        return res.status(500).json({ error: "Database error occurred while processing your request." });
      }

      // 4. Success response
      res.status(201).json({ 
        message: "Callback request submitted successfully!",
        requestId: results.insertId 
      });
    });

  } catch (error) {
    console.error('Controller error:', error);
    next(error); // Pass unexpected errors to express error handler
  }
};