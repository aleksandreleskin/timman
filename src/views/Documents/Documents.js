import React, {useEffect, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import documentsActions from '../../utils/documents/documentsActions';
import axios from 'axios';
import {getToken} from '../../utils/auth';
import store from '../../store/store';

const Documents = (props) => {
  const [file, setFile] = useState(null);
  const [key, setKey] = useState(0);

  const changeFile = (event) => {
    setFile({file: event.target.files[0]});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.upload(file);
    setKey(Math.random());
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/documents/', {
      headers: {
        Authorization: getToken(),
        user_id: store.getState().authReducer.id
      }
    }).then(response => console.log(response.data));
  });

  const documents = 1;

  return (
    <div>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group>
          <Form.File id="exampleFormControlFile1" onChange={changeFile} key={key}/>
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
      </Form>
      <div>

      </div>
    </div>
  );
};

export default connect(
  null,
  dispatch => ({
    upload: data => documentsActions.upload(data).then(result => dispatch(result))
  })
)
(Documents);