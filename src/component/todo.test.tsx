import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';
describe('todo', () => {
    describe('somke test', () => {
        it('should render todo correctly',async () => {
            const onDeleteMock = jest.fn();
            const onCheckMock = jest.fn();
             render(<Todo
                title="Eat burger"
                assginedTo="Murad"
                onCheck={onCheckMock}
                id="16"
                isComplete={false}
                onDelete={onDeleteMock}
            />);
            const todo = screen.getAllByText(/murad/i);
            expect(todo).toHaveLength(1);
        });
        test('should call onCheck prop when check icon is clicked', () => {
            const onDeleteMock = jest.fn();
            const onCheckMock = jest.fn();
             render(<Todo 
            title="Eat burger"
            assginedTo="Murad"
            onCheck={onCheckMock}
            id="16"
            isComplete={false}
            onDelete={onDeleteMock} />);
            const check = screen.getByTestId('check-icon')
            userEvent.click(check);
            expect(onCheckMock).toHaveBeenCalledWith('16', true);
          });
          
          test('should call onDelete prop when delete icon is clicked', () => {
            const onDeleteMock = jest.fn();
            const onCheckMock = jest.fn();
             render(<Todo 
            title="Eat burger"
            assginedTo="Murad"
            onCheck={onCheckMock}
            id="16"
            isComplete={false}
            onDelete={onDeleteMock} />);
            const delet = screen.getByTestId('delete-icon')
            userEvent.click(delet);
            expect(onDeleteMock).toHaveBeenCalledWith('16');
          });
        });
    })
