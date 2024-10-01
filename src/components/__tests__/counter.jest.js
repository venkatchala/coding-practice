import { render,screen } from "@testing-library/react"
import Counter from "../Counter"
import "@testing-library/jest-dom"

it('Should contain button in the component', () => {
    render(<Counter />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});

it('Should contain text in the component', () => {
    render(<Counter />);
    const text = screen.getByRole('button', {name: 'Increment by'});
    expect(text).toBeInTheDocument();
});