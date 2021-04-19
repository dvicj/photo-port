import React from 'react';
//render - creates a simulated DOM
//cleanup - remove components from DOM to prevent memory leaking
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //First test - verify that component is rendering
    it('renders', () => {
        render(<About/>)
    });

    //Second test
    it('matches snapshot DOM node structure', () => {
        //render About - asFragment returns snapshot of About component
        const { asFragment } = render(<About/>);
        expect(asFragment()).toMatchSnapshot(); 
    })
})