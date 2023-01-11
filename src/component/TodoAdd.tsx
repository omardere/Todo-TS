import { Button, Container, FormControl, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { addTodoProps } from '../types/componentTypes';

const TodoAdd: React.FunctionComponent<addTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [assign, setAssign] = useState('');
  const [titleFlag, settitleFlag] = useState(false);

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
            <TextField value={title} onChange={(e) =>{if(e.target.value==="")settitleFlag(true);else settitleFlag(false); setTitle(e.target.value)}} sx={{ marginRight: '8px', }} label="Title" required={true} />
            <TextField value={assign} onChange={(e) => setAssign(e.target.value)} label="Assign" required={true} />
          </Box>
          
            {titleFlag && <Typography variant='body1' sx={{color:"red"}}>* you should enter title </Typography>  }  
           
          <Button sx={{ marginTop: '8px' }} variant='contained' color='primary' type='submit'>Add ToDo</Button>
        </FormControl>
      </form>
    </Container>

  )
}


export default TodoAdd
