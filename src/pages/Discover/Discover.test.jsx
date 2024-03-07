import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Discover from './index';

const assert = (condition, message) => {
    if (!condition) {
        throw new Error(message);
    }
};

describe('Discover component', () => {
    it('renders the welcome message', () => {
        const discover = <Discover name="John" auth="sampleAuth" />;
        render(discover);
        const welcomeMessage = screen.getByText(/Welcome John!/i);
        assert(welcomeMessage, 'Welcome message not found in rendered component');
    });
});
