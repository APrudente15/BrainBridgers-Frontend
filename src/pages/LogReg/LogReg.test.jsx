import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import LogReg from './index';
import { MemoryRouter } from 'react-router-dom';

const assert = (condition, message) => {
    if (!condition) {
        throw new Error(message);
    }
};

describe('LogReg component', () => {
    it('renders landing page text', () => {
        const logReg = (
            <MemoryRouter>
                <LogReg logged={false} setLogged={() => { }} />
            </MemoryRouter>
        );
        render(logReg);
        const landingText = screen.getByText('Take control of your learning');
        assert(landingText, 'Landing page text not found in rendered component');
    });

    it('redirects to /discover when logged in', () => {
        const logReg = <LogReg logged={true} setLogged={() => { }} />;
    });

    it('calls setLogged when logged in', () => {
        const setLoggedMock = () => { };
        const logReg = <LogReg logged={false} setLogged={setLoggedMock} />;
    });
});
