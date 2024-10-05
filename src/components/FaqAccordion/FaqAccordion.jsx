import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Here are some frequently asked questions (FAQs) for Technical and Vocational Education and Training (TVET) colleges, along with their answers</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What is a TVET college?</Accordion.Header>
                    <Accordion.Body>
                    TVET colleges provide technical and vocational education and training that equips students with practical skills and knowledge to prepare them for the job market. These institutions focus on industries such as ICT, engineering, agriculture, hospitality, and more.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header> What qualifications can I get at a TVET college?</Accordion.Header>
                    <Accordion.Body>
                    You can earn qualifications like certificates, diplomas, or higher national diplomas (HND) in specific technical fields. Some colleges also offer short courses or skills development programs.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What are the entry requirements for TVET courses?</Accordion.Header>
                    <Accordion.Body>
                    Entry requirements vary depending on the course. For certificate programs, you may need to have completed primary or secondary education (e.g., KCSE in Kenya). For diplomas or higher qualifications, a higher level of secondary education or equivalent may be required.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How long do TVET courses take to complete?</Accordion.Header>
                    <Accordion.Body>
                    The duration depends on the type of program:
                        1. Diploma 3 year.
                        2. Certificate 2 years.
                        3. Artisan   1 year.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;