import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './index.jsx'

describe('<Button/>', () => {
    it('should render the button with the text "Load more"', () => {
        const fn = jest.fn()
        render(<Button text="Load more" onClick={fn}/>);

        const button = screen.getByRole('button', {name: /load more/i});

        userEvent.click(button)

        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should be disabled when disabled is true"', () => {

        render(<Button text="Load more" disabled/>);

        const button = screen.getByRole('button', {name: /load more/i});

        expect(button).toBeDisabled()
    })
})