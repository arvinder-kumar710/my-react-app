import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import './CallbackModal.css'; // Import custom CSS for styling

// Dummy list of country codes with flags
const countryCodes = [
  { code: '+91', flag: '🇮🇳' }, // India
  { code: '+1', flag: '🇺🇸' },  // USA
  { code: '+44', flag: '🇬🇧' },  // UK
  { code: '+61', flag: '🇦🇺' },  // Australia
];
 const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CallbackModal: React.FC = () => {
  const [show, setShow] = useState(true);
  const [formData, setFormData] = useState({
    parentName: '',
    phoneNumber: '',
    email: '',
    class: '',
    alternateNumber: '',
  });
  const [validated, setValidated] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCountryCodeSelect = (country: typeof countryCodes[0]) => {
    setSelectedCountryCode(country);
  };

  // 💡 Corrected to be an async function
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    // 1. Client-Side Validation Check
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return; // Stop execution if validation fails
    }
    
    setValidated(true); // Trigger validation UI
    setIsSubmitting(true);

    // 2. Prepare Data Payload
    // This uses JSON format, NOT multipart/form-data, as there are no file uploads.
    const payload = {
      parent_name: formData.parentName, // Match SQL column name
      country_code: selectedCountryCode.code, // Separate field
      phone_number: formData.phoneNumber, // Match SQL column name
      email: formData.email,
      class_interest: formData.class, // Match SQL column name
      alternate_number: formData.alternateNumber || null, // Allow NULL if empty
    };

    try {
      console.log('Submitting payload:', payload);

      // 3. Send Request (Adjusted URL to match your route file)
      const response = await axios.post(
        API_BASE_URL+"/callback/add", 
        payload, 
        {
          // We use application/json, NOT multipart/form-data, since there are no files.
          headers: {
            "Content-Type": "application/json", 
          },
        }
      );

      console.log('Response:', response.data);
      alert('Your Request submitted successfully!');
      
      // Close modal and reset form state
      setShow(false); 
      setFormData({
        parentName: '',
        phoneNumber: '',
        email: '',
        class: '',
        alternateNumber: '',
      });
      setValidated(false);

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message);
        const backendError = error.response?.data?.error || 'Error submitting form. Please try again.';
        alert(backendError);
      } else {
        console.error('Unexpected error:', error);
        alert('An unexpected error occurred. Check console for details.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      centered
      className="callback-modal"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton className="callback-modal-header">
        <Modal.Title className="modal-title">Request a Callback</Modal.Title>
      </Modal.Header>
      <Modal.Body className="callback-modal-body">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* ... (Form fields remain the same) ... */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formParentName" className="mb-3">
                <Form.Label className="form-label">Parent Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Parent's Full Name"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="custom-form-control"
                />
                <Form.Control.Feedback type="invalid">
                  <i className="bi bi-exclamation-circle-fill me-1"></i> This field is required
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPhoneNumber" className="mb-3">
                <Form.Label className="form-label">Phone Number *</Form.Label>
                <div className="input-group">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-country-code" className="country-code-dropdown-toggle">
                      {selectedCountryCode.flag} {selectedCountryCode.code}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="country-code-dropdown-menu">
                      {countryCodes.map((country, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => handleCountryCodeSelect(country)}
                        >
                          {country.flag} {country.code}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form.Control
                    type="tel"
                    placeholder="Enter 10-digit Mobile Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="custom-form-control phone-number-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    <i className="bi bi-exclamation-circle-fill me-1"></i> This field is required
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className="form-label">Email Address *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="custom-form-control"
                />
                <Form.Control.Feedback type="invalid">
                  <i className="bi bi-exclamation-circle-fill me-1"></i> This field is required
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formClass" className="mb-3">
                <Form.Label className="form-label">Class *</Form.Label>
                <Form.Select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                  className="custom-form-control"
                >
                  <option value="">Select Class</option>
                  <option value="preschool">Preschool</option>
                  <option value="kindergarten">Kindergarten</option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  <i className="bi bi-exclamation-circle-fill me-1"></i> This field is required
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="formAlternateNumber">
                <Form.Label className="form-label">Alternate Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter Alternate Mobile Number"
                  name="alternateNumber"
                  value={formData.alternateNumber}
                  onChange={handleChange}
                  className="custom-form-control"
                />
              </Form.Group>
            </Col>
          </Row>
          <p className="terms-text mb-4">
            By submitting this form, you agree to the <a href="#privacy">Privacy Policy</a>, and <a href="#terms">Terms & Conditions</a>
          </p>
          <Button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CallbackModal;