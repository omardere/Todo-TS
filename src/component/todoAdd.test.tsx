import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TodoAdd from './TodoAdd';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

describe('todo add',()=>{
  describe('somke test',()=>{
    it('should render component correctly', () => {
      const addTodoMock = jest.fn();
      render(<TodoAdd addTodo={addTodoMock} />);
      const titleElement = screen.getByLabelText(/^title/i);
      const assignElement = screen.getByLabelText(/^assign/i);
      const addTodoButtonElement = screen.getByRole("button");
      expect(titleElement).toBeInTheDocument();
      expect(assignElement).toBeInTheDocument();
      expect(addTodoButtonElement).toBeInTheDocument();
    });
  })

  describe('validation',()=>{
    beforeEach(()=>{
      const addTodoMock = jest.fn();
      return render(<TodoAdd addTodo={addTodoMock} />);
    })
    it('should show * you should enter title when the user not type title',async () => {
      const titleElement = screen.getByLabelText(/^title/i);
      userEvent.type(titleElement,"test");
      userEvent.clear(titleElement);
      userEvent.click(document.body);
      const validationMessage=await screen.findByText("* you should enter title");
      expect(validationMessage).toBeInTheDocument();      
    });
    
  })
  describe("basic functionality",()=>{
    it('should add new todo when click add',async () => {
      const handleAdd=jest.fn();
      jest.spyOn(axios,"post").mockImplementation((url)=>Promise.resolve(1));
      render(<TodoAdd addTodo={handleAdd} />);
      const titleElement = screen.getByLabelText(/^title/i);
      const assignElement = screen.getByLabelText(/^assign/i);
      const addTodoButtonElement = screen.getByRole("button");
      userEvent.type(titleElement,"new title");
      userEvent.type(assignElement,"new assign");
      userEvent.click(addTodoButtonElement);
      await waitFor(()=>{
        expect(handleAdd).toHaveBeenCalled()
      })
 
    });
  })
})
