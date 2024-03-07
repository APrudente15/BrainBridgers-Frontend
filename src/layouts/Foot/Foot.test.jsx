import React from 'react';
import Foot from './index';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

const assert = (condition, message) => {
    if (!condition) {
        throw new Error(message);
    }
};

describe('Foot component', () => {
    it('renders the component with the correct address', () => {
        const foot = <Foot />;
        render(foot);
        const renderedText = screen.getByText('17 Brain Under The Bridge Vallye, BB17 XYZ');
        assert(renderedText, 'Address not found in rendered component');
    });
});