import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import CountTimer from '../CountTimer';

describe('CountTimer component', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    })

    it ('renders initial time as 0', () => {
        render(<CountTimer />);
        expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
    })

    it ('Start button starts on the counter', () => {
        render(<CountTimer />);
        const startBtn = screen.getByText('Start');
        fireEvent.click(startBtn);

        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect.getByText(/Count: 1/i).toBeInTheDocument();
    })
})