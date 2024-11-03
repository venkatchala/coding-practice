import { render, waitFor } from "@testing-library/react";
import Todo from "../Todo";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => {
            Promise.resolve([
                
            ])
        }
    })
);

describe('Todo Component', () => {
    beforeEach(() => {
        fetch.mockclear();
    })
});

it('fetches and displays data', async () => {
    render(<Todo />);
    await waitFor(() => {
        expect(screen.getByText([])).toBeInTheDocument();
    });
});
