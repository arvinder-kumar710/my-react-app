import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const StudentAdmitForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    roll: '',
    bloodGroup: '',
    religion: '',
    email: '',
    StudentClass: '',
    section: '',
    admissionId: '',
    phone: '',
    bio: '',
    photo: null as File | null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // 👇 DUPLICATE FIELD CHECK FUNCTION
  const checkDuplicateField = async (field: string, value: string) => {
    try {
      const response = await axios.post(API_BASE_URL+'/students/check-duplicates', {
        roll: field === "roll" ? value : formData.roll,
        email: field === "email" ? value : formData.email,
        admissionId: field === "admissionId" ? value : formData.admissionId,
      });

      const { duplicateFields } = response.data;

      if (duplicateFields[field]) {
        window.alert(`${field === "roll" ? "Roll Number" : field === "email" ? "Email" : "Admission ID"} already exists!`);
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `Please Enter Unique ${field === "roll" ? "Roll Number" : field === "email" ? "Email ID" : "Admission ID"}`
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: ""
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  if (['roll', 'email', 'admissionId'].includes(name)) {
    checkDuplicateField(name, value);
  }
};


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, photo: file });

    if (file && errors.photo) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.photo;
        return newErrors;
      });
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      roll: '',
      bloodGroup: '',
      religion: '',
      email: '',
      StudentClass: '',
      section: '',
      admissionId: '',
      phone: '',
      bio: '',
      photo: null,
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    const requiredFields = [
      'firstName', 'lastName', 'gender', 'dob', 'roll', 'bloodGroup',
      'religion', 'email', 'StudentClass', 'section', 'admissionId', 'phone', 'bio'
    ];

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = 'This field is required';
      }
    });

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!formData.photo) {
      newErrors.photo = 'Please upload a photo';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          data.append(key, value);
        } else if (typeof value === 'string') {
          data.append(key, value);
        }
      });

      console.log("Submitting form data:", formData);

      const response = await axios.post(API_BASE_URL+"/students/add", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log('Response:', response.data);
      alert('Student added successfully!');
      handleReset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message);
        const backendError = error.response?.data?.error;
        if (backendError) {
          alert(backendError);
        } else {
          alert('Error submitting form. Check console for details.');
        }
      } else {
        console.error('Unexpected error:', error);
        alert('Error submitting form. Check console for details.');
      }
    }
  };

  return (
    <div className="p-4">
      <div className="row">
        <h4 className="mb-4">Add New Students</h4>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={3}><Form.Control name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} isInvalid={!!errors.firstName} />
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Col>
            <Col md={3}><Form.Control name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} isInvalid={!!errors.lastName} />
            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Col>
            <Col md={3}>
              <Form.Select name="gender" value={formData.gender} onChange={handleChange} isInvalid={!!errors.gender}>
                <option>Please Select Gender *</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
            </Col>
            <Col md={3}><Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} isInvalid={!!errors.dob} />
            <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}>
              <Form.Control name="roll" placeholder="Roll" value={formData.roll} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.roll} />
              <Form.Control.Feedback type="invalid">{errors.roll}</Form.Control.Feedback>
            </Col>
            <Col md={3}>
              <Form.Select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} isInvalid={!!errors.bloodGroup}>
                <option>Please Select Group *</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.bloodGroup}</Form.Control.Feedback>
            </Col>
            <Col md={3}>
              <Form.Select name="religion" value={formData.religion} onChange={handleChange} isInvalid={!!errors.religion}>
                <option>Please Select Religion *</option>
                <option>Islam</option>
                <option>Christian</option>
                <option>Hindu</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.religion}</Form.Control.Feedback>
            </Col>
            <Col md={3}>
              <Form.Control name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.email} />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}>
              <Form.Select name="StudentClass" value={formData.StudentClass} onChange={handleChange} isInvalid={!!errors.StudentClass}>
                <option>Please Select Class *</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.StudentClass}</Form.Control.Feedback>
            </Col>
            <Col md={3}>
              <Form.Select name="section" value={formData.section} onChange={handleChange} isInvalid={!!errors.section}>
                <option>Please Select Section *</option>
                <option>A</option>
                <option>B</option>
                <option>Pink</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.section}</Form.Control.Feedback>
            </Col>
            <Col md={3}>
              <Form.Control name="admissionId" placeholder="Admission ID" value={formData.admissionId} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.admissionId} />
              <Form.Control.Feedback type="invalid">{errors.admissionId}</Form.Control.Feedback>
            </Col>
            <Col md={3}>
              <Form.Control name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone} />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Control as="textarea" name="bio" placeholder="Short BIO" rows={5} value={formData.bio} onChange={handleChange} isInvalid={!!errors.bio} />
            </Col>
            <Col md={6}>
              <Form.Label>Upload Student Photo (150px x 150px)</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleFileChange} isInvalid={!!errors.photo} />
            </Col>
          </Row>

          <Button variant="warning" type="submit" className="me-2">Save</Button>
          <Button variant="dark" type="button" onClick={handleReset}>Reset</Button>
        </Form>
      </div>
    </div>
  );
};

export default StudentAdmitForm;
