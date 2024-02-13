import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addPress } from '../../services/pressBlogService';

const BasinForm = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await addPress(title, text);
    }
  return (
    <Container className='mt-5'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formPressTitle">
        <Form.Label>Haber Blog Başlığı</Form.Label>
        <Form.Control
          type="text"
          placeholder="Başlık girin"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPressText">
        <Form.Label>Haber Blog İçeriği</Form.Label>
        <ReactQuill theme="snow" value={text} onChange={setText} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Blog Ekle
      </Button>
    </Form>
  </Container>
  )
}

export default BasinForm