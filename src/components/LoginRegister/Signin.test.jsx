import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import SignInForm from './SignIn';


describe('SignInForm component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SignInForm />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('Renders the form with input fields and a submit button', () => {
        const form = screen.getByTestId('signin-form');
        const usernameInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        const submitButton = screen.getByRole('button', { name: 'Sign In' });
        expect(form).toBeInTheDocument();
        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it('Updates the state on input change', async () => {
        const usernameInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        userEvent.type(usernameInput, 'testuser');
        await waitFor(() => {
            expect(usernameInput.value).toBe('testuser');
        });
        userEvent.type(passwordInput, 'testpassword');
        await waitFor(() => {
            expect(passwordInput.value).toBe('testpassword');
        });
    });

    it('Submits the form with the provided credentials', async () => {
        const usernameInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        const submitButton = screen.getByRole('button', { name: 'Sign In' });
        userEvent.type(usernameInput, 'testuser');
        userEvent.type(passwordInput, 'testpassword');
        await userEvent.click(submitButton);
    });
});
