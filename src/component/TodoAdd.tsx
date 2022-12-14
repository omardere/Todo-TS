import { Button, Container, FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { addTodoProps } from '../types/componentTypes';

const TodoAdd: React.FunctionComponent<addTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [assign, setAssign] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(title, assign);
    setTitle('');
    setAssign('');
  }
  return (
    <Container sx={{ marginTop: '16px' }} maxWidth='sm'>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <Box sx={{ margin: 'auto' }}>
            <TextField value={title} onChange={(e) => setTitle(e.target.value)} sx={{ marginRight: '8px', }} label="Title" required={true} />
            <TextField value={assign} onChange={(e) => setAssign(e.target.value)} label="Assign" required={true} />
          </Box>
          <Button sx={{ marginTop: '8px' }} variant='contained' color='primary' type='submit'>Add ToDo</Button>
        </FormControl>
      </form>
    </Container>

  )
}


export default TodoAdd
