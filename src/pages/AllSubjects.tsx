import React, { useState } from 'react';
import {
  Button,
  Col,
  Form,
  Row,
  Table,
  Pagination,
} from 'react-bootstrap';

interface Subject {
  id: string;
  subject_name: string;
  subject_type: string;
  class: number;
  code: string;
  date: string;
}

const AllSubjects: React.FC = () => {
  const [formData, setFormData] = useState({
    id: '',
    subject_name: '',
    subject_type: '',
    class: '',
    code: '',
    date: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [searchExam, setSearchExam] = useState('');
  const [searchSubject, setSearchSubject] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const subjects: Subject[] = [
    { id: '#0021', subject_name: 'Accounting', subject_type: 'Mathematics', class: 4, code: '00524', date: '02/05/2001' },
    { id: '#0022', subject_name: 'Bangla', subject_type: 'Theory', class: 6, code: '00525', date: '02/05/2001' },
    { id: '#0023', subject_name: 'English', subject_type: 'Theory', class: 7, code: '00526', date: '02/05/2001' },
    { id: '#0024', subject_name: 'Arts', subject_type: 'Theory', class: 6, code: '00527', date: '02/05/2001' },
    { id: '#0025', subject_name: 'Finance', subject_type: 'Theory', class: 6, code: '00528', date: '02/05/2001' },
    { id: '#0026', subject_name: 'Economics', subject_type: 'Theory', class: 6, code: '00529', date: '02/05/2001' },
    { id: '#0027', subject_name: 'English', subject_type: 'Theory', class: 6, code: '0054', date: '02/05/2001' },
    { id: '#0028', subject_name: 'Bangla', subject_type: 'Theory', class: 6, code: '0052', date: '02/05/2001' },
  ];

 const handleFormChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    const requiredFields = ['subject_name', 'subject_type', 'class', 'code', 'date'];

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate save
    console.log('Saved data:', formData);

    // Reset form
    setFormData({
      id: '',
      subject_name: '',
      subject_type: '',
      class: '',
      code: '',
      date: '',
    });
    setErrors({});
  };

  const filteredSubjects = subjects.filter(
    (sub) =>
      sub.subject_name.toLowerCase().includes(searchSubject.toLowerCase()) &&
      sub.date.includes(searchDate)
  );

  return (
    <div className="container-fluid mt-4">
      <Row>
        <Col md={4}>
          <div className="p-4 shadow-sm bg-white rounded">
            <h5 className="mb-3">Add New Subject</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Subject Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="subject_name"
                  value={formData.subject_name}
                  onChange={handleFormChange}
                  isInvalid={!!errors.subject_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.subject_name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject Type *</Form.Label>
                <Form.Select
                  name="subject_type"
                  value={formData.subject_type}
                  onChange={handleFormChange}
                  isInvalid={!!errors.subject_type}
                >
                  <option value="">Please Select</option>
                  <option value="Theory">Theory</option>
                  <option value="Practical">Practical</option>
                  <option value="Mathematics">Mathematics</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.subject_type}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Select Class *</Form.Label>
                <Form.Select
                  name="class"
                  value={formData.class}
                  onChange={handleFormChange}
                  isInvalid={!!errors.class}
                >
                  <option value="">Please Select</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.class}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject Code *</Form.Label>
                <Form.Select
                  name="code"
                  value={formData.code}
                  onChange={handleFormChange}
                  isInvalid={!!errors.code}
                >
                  <option value="">Please Select</option>
                  <option value="A01">A01</option>
                  <option value="B02">B02</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.code}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date *</Form.Label>
                <Form.Control
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleFormChange}
                  placeholder="dd/mm/yyyy"
                  isInvalid={!!errors.date}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button type="submit" variant="warning">
                  Save
                </Button>
                <Button
                  type="reset"
                  variant="dark"
                  onClick={() =>
                    setFormData({
                      id: '',
                      subject_name: '',
                      subject_type: '',
                      class: '',
                      code: '',
                      date: '',
                    })
                  }
                >
                  Reset
                </Button>
              </div>
            </Form>
          </div>
        </Col>

        <Col md={8}>
          <div className="p-4 shadow-sm bg-white rounded">
            <h5 className="mb-3">All Subjects</h5>
            <Row className="g-2 mb-3">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Search by Exam ..."
                  value={searchExam}
                  onChange={(e) => setSearchExam(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Search by Subject ..."
                  value={searchSubject}
                  onChange={(e) => setSearchSubject(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="dd/mm/yyyy"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button variant="warning">Search</Button>
              </Col>
            </Row>

            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th><Form.Check type="checkbox" /></th>
                  <th>ID</th>
                  <th>Subject Name</th>
                  <th>Subject Type</th>
                  <th>Class</th>
                  <th>Code</th>
                  <th>Date</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubjects.map((sub, index) => (
                  <tr key={index}>
                    <td><Form.Check type="checkbox" /></td>
                    <td>{sub.id}</td>
                    <td>{sub.subject_name}</td>
                    <td>{sub.subject_type}</td>
                    <td>{sub.class}</td>
                    <td>{sub.code}</td>
                    <td>{sub.date}</td>
                    <td>...</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="d-flex justify-content-end">
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AllSubjects;
