import React from 'react';
import './Downloads.css'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import courseFile1 from '../../utils/pdfs/example.pdf';
import courseFile2 from '../../utils/pdfs/example.pdf';
import brochure from '../../utils/pdfs/example.pdf';
import form from '../../utils/pdfs/example.pdf';

function Downloads() {
  const downloads = [
    {
      title: 'Course Material 1',
      description: 'Learn about Software Installation in this comprehensive guide.',
      file: courseFile1,
    },
    {
      title: 'Course Material 2',
      description: 'A detailed guide on Information Security practices.',
      file: courseFile2,
    },
    {
      title: 'College Brochure',
      description: 'Get the latest information on our courses and services.',
      file: brochure,
    },
    {
      title: 'Application Form',
      description: 'Apply to join the college with this downloadable form.',
      file: form,
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Downloads</h1>
      <Row>
        {downloads.map((item, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <a href={item.file} download>
                  <Button variant="primary">
                    <i className="fas fa-download"></i> Download
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Downloads;
