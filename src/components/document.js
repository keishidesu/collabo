import React from 'react';
import { Container, ListGroup,Tab, Col, Row } from 'react-bootstrap';
import { NavBar } from './NavBar';
import Footer from './footer';
import DocViewer, { PDFRenderer } from "react-doc-viewer";
import myfile from '../assets/doc1.pdf';
import myfile2 from '../assets/doc2.pdf';

export default function Document(){
  const doc1 = [
    { uri: myfile },
  ];

  const doc2 = [
    { uri: myfile2 },
  ]

  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        <h2>My Documents</h2>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#doc1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#doc1">
                  Document 1
                </ListGroup.Item>
                <ListGroup.Item action href="#doc2">
                  Document 2
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#doc1">
                  <DocViewer pluginRenderers={[PDFRenderer]} documents={doc1} />
                </Tab.Pane>
                <Tab.Pane eventKey="#doc2">
                <DocViewer pluginRenderers={[PDFRenderer]} documents={doc2} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <Footer />
      </Container>
    </div>
  );
}