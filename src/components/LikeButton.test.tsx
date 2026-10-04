import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import LikeButton from './LikeButton'
import { LikesProvider } from '../context/LikesContext'

describe('LikeButton', () => {
  it('counts every click', async () => {
    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>
    )

    const button = screen.getByRole('button')

    await userEvent.click(button)
    await userEvent.click(button)

    expect(button).toHaveTextContent('Like 2')
  })
})