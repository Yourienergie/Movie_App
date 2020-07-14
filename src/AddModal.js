import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange=(e)=>{
this.setState({[e.target.name]:e.target.value});
  };
  add =()=>{
this.props.add({
  name : this.state.name,
  image : this.state.image,
  year : this.state.year,
  rating : this.state.rating,
});
this.setState({show: false})
  };
  render() {
    return (
      <div>
        <div>
          <Button variant="primary" onClick={this.handleShow}>
            add movie
          </Button>

          <Modal show={this.state.show} onHide={this.handleShow}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <label>Name</label>
             <input type="text" name="name" onChange={this.handleChange} />
             <label>Year</label>
             <input type="text" name="year" onChange={this.handleChange}/>
             <label>Image</label>
             <input type="text" name="image" onChange={this.handleChange}/>
             <label>Rating</label>
             <input type="text" name="rating" onChange={this.handleChange}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleShow}>
                Close
              </Button>
              <Button variant="primary" onClick={this.add}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AddModal;
