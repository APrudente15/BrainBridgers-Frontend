import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import SignUpForm from './SignUp';

describe('SignUpForm component', () => {
    beforeEach(() => {
        render(<SignUpForm />);
    });

    afterEach(() => {
        cleanup();
    });

    it('Renders the form with input fields and a submit button', () => {
        const form = screen.getByTestId('signup-form');
        expect(form).toBeTruthy();
        const nameInput = screen.getByPlaceholderText('Name');
        const passwordInput = screen.getByPlaceholderText('Password');
        const submitButton = screen.getByRole('button', { name: 'Sign Up' });
        expect(nameInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
        expect(submitButton).toBeTruthy();
    });

    it('Displays the correct heading for new users', () => {
        const heading = screen.getByRole('heading', { name: 'New User' });
        expect(heading).toBeTruthy();
    });
});
