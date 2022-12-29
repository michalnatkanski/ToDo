import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native'
import InputBar from '../src/components/input-bar';
import { store } from '../src/redux/reducers/rootReducer';
import { Provider } from 'react-redux'


describe('Input component', () => {
    it('Should render value input', () => {
        const { getByTestId } = render
            (
                <Provider store={store}>
                    <InputBar />
                </Provider>
            );

        const inputElement = getByTestId('input');
        const addTaskElement = getByTestId('add-task');

        fireEvent.changeText(inputElement, 'test task');
        expect(inputElement.props.value).toBe('test task');

        fireEvent.press(addTaskElement);
    })
})