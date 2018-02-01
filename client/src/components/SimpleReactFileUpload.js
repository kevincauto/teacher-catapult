import React from 'react';
import axios, { post } from 'axios';

class SimpleReactFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };

    this.onChange = this.onChange.bind(this);
  }
  // componentDidUpdate() {
  //   console.log(this.state);
  // }
  // onFormSubmit(e) {
  //   e.preventDefault(); // Stop form submit
  //   this.fileUpload(this.state.file).then(response => {
  //     console.log(response.data);
  //   });
  // }
  async onChange(e) {
    await this.setState({ file: e.target.files[0] });
    this.props.onUpload(this.state.file);
  }
  fileUpload(file) {
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
  }

  render() {
    return (
      <div>
        <h3>File Upload</h3>
        <input type="file" onChange={this.onChange} />
      </div>
    );
  }
}

export default SimpleReactFileUpload;
