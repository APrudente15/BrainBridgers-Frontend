import React from 'react';
import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginRegister from './index';

describe('LoginRegister component', () => {
    it('Switches to Sign In panel when "Sign In" button is clicked', () => {
        render(
            <MemoryRouter>
                <LoginRegister />
            </MemoryRouter>
        );
    });

    it('Switches to Sign Up panel when "Sign Up" button is clicked', () => {
        const signUpButtons = screen.queryAllByText('Sign Up');
        console.log('Number of Sign Up buttons:', signUpButtons.length);
        const signUpButton = signUpButtons[0];
        console.log('Sign Up button:', signUpButton);
        fireEvent.click(signUpButton);
        const container = screen.getByTestId('container');
        console.log('Container class:', container.classList);
        const signUpOverlay = screen.getByText('Hello, Friend!');
        console.log('Sign Up overlay:', signUpOverlay);
        const signInOverlay = screen.queryByText('Welcome Back!');
        console.log('Sign In overlay:', signInOverlay);
    });
});
