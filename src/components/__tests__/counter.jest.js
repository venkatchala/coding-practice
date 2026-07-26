import { fireEvent, render,screen } from "@testing-library/react"
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
    const countBtn = screen.getByRole('button');
    fireEvent.click(countBtn);
});

it('should render count on each click', () => {
    render(<Counter num={1} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getAllByText('2')).toBeInTheDocument();
})