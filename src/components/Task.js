import React from 'react';
import { Container, Tab, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { NavBar } from './NavBar';
import Footer from './footer';

export default function Task(){
  return (
    <div>
      <NavBar />
      <Container>
        <Card className="mt-4">
          <Card.Text>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#task1">
              <Row>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroup.Item action href="#task1">
                      Task 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#task2">
                      Task 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#task3">
                      Task 3
                    </ListGroup.Item>
                    <ListGroup.Item action href="#task4">
                      Task 4
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8} className="p-2">
                  <Tab.Content>
                    <Tab.Pane eventKey="#task1">
                      <h3>Task Description</h3>
                      <small className="text-muted">Due Date: 28 February 2021</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non neque at magna posuere lobortis. Nam aliquam massa sem, a egestas arcu tincidunt vitae. Fusce a purus ac ex fringilla pellentesque. Nunc gravida urna sed odio feugiat, non auctor risus scelerisque. Praesent semper sem quis magna semper porta nec sed magna. Integer non ligula ac nisl dignissim sagittis. In pulvinar, ipsum vel imperdiet placerat, tortor erat euismod risus, nec bibendum augue eros et turpis. Aliquam suscipit, odio non vehicula faucibus, leo lectus mollis neque, eget elementum tellus nunc id diam. Nam eget ipsum accumsan, vehicula leo at, bibendum lorem. Nullam consectetur eros et placerat feugiat.<br/> <br/>
                        Vestibulum consequat efficitur augue, id laoreet mauris semper vitae. Phasellus maximus ante tristique dui consequat, non ullamcorper enim tincidunt. Nam nibh justo, tempus laoreet congue eget, viverra a est. Sed vitae felis ipsum. Donec finibus pretium sem nec hendrerit. Morbi nunc odio, interdum sit amet justo vitae, pellentesque fringilla lacus. In mattis faucibus nulla, quis sodales ex euismod nec. Donec quam massa, posuere laoreet finibus vitae, volutpat posuere risus. Proin lobortis lobortis velit at congue.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#task2">
                      <h3>Task Description</h3>
                      <small className="text-muted">Due Date: 28 February 2021</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non neque at magna posuere lobortis. Nam aliquam massa sem, a egestas arcu tincidunt vitae. Fusce a purus ac ex fringilla pellentesque. Nunc gravida urna sed odio feugiat, non auctor risus scelerisque. Praesent semper sem quis magna semper porta nec sed magna. Integer non ligula ac nisl dignissim sagittis. In pulvinar, ipsum vel imperdiet placerat, tortor erat euismod risus, nec bibendum augue eros et turpis. Aliquam suscipit, odio non vehicula faucibus, leo lectus mollis neque, eget elementum tellus nunc id diam. Nam eget ipsum accumsan, vehicula leo at, bibendum lorem. Nullam consectetur eros et placerat feugiat.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#task3">
                      <h3>Task Description</h3>
                      <small className="text-muted">Due Date: 28 February 2021</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non neque at magna posuere lobortis. Nam aliquam massa sem, a egestas arcu tincidunt vitae. Fusce a purus ac ex fringilla pellentesque. Nunc gravida urna sed odio feugiat, non auctor risus scelerisque. Praesent semper sem quis magna semper porta nec sed magna. Integer non ligula ac nisl dignissim sagittis. In pulvinar, ipsum vel imperdiet placerat, tortor erat euismod risus, nec bibendum augue eros et turpis. Aliquam suscipit, odio non vehicula faucibus, leo lectus mollis neque, eget elementum tellus nunc id diam. Nam eget ipsum accumsan, vehicula leo at, bibendum lorem. Nullam consectetur eros et placerat feugiat.<br/><br/>
                        Cras eget urna laoreet, aliquet diam finibus, ultrices dui. Sed interdum iaculis egestas. Aenean ac dui a dui tristique vehicula. Cras eros sapien, aliquam in neque ut, mattis vulputate turpis. Suspendisse mattis neque velit, ut pretium lacus cursus a. Nunc sagittis blandit finibus. Vestibulum luctus lobortis risus in placerat. Morbi ipsum ipsum, hendrerit a mattis a, ullamcorper non ante. Suspendisse potenti. Sed ornare quam ex, id egestas dolor dapibus eget. Etiam in ipsum mattis, facilisis odio quis, imperdiet leo. Suspendisse potenti. Donec dapibus auctor urna sit amet lacinia. Ut sed ligula a felis fringilla mattis id eget libero. Vestibulum sed faucibus nulla. Sed porttitor velit dui, non blandit arcu suscipit a.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#task4">
                      <h3>Task Description</h3>
                      <small className="text-muted">Due Date: 28 February 2021</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non neque at magna posuere lobortis. Nam aliquam massa sem, a egestas arcu tincidunt vitae. Fusce a purus ac ex fringilla pellentesque. Nunc gravida urna sed odio feugiat, non auctor risus scelerisque. Praesent semper sem quis magna semper porta nec sed magna. Integer non ligula ac nisl dignissim sagittis. In pulvinar, ipsum vel imperdiet placerat, tortor erat euismod risus, nec bibendum augue eros et turpis. Aliquam suscipit, odio non vehicula faucibus, leo lectus mollis neque, eget elementum tellus nunc id diam. Nam eget ipsum accumsan, vehicula leo at, bibendum lorem. Nullam consectetur eros et placerat feugiat.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Card.Text>
        </Card>
        <Footer />
      </Container>
    </div>
  );
}