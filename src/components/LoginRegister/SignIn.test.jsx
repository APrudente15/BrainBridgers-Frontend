import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import SignInForm from './SignIn';

console.log('SignInForm', SignInForm);

describe('SignInForm', () => {

    beforeEach(() => {
        render(<SignInForm />);
    });

    afterEach(() => {
        cleanup();
    });

    it('renders form', () => {
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    // Additional tests from here ... 

});