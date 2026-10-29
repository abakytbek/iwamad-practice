import { describe, it, expect } from 'vitest'
import { validateSignup } from './validateSignup'
import type { SignupValues } from './validateSignup'

const validValues: SignupValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
}

describe('validateSignup', () => {
  it('accepts valid signup data', () => {
    expect(validateSignup(validValues, 10)).toEqual({})
  })

  it('rejects 0 tickets', () => {
    const values = { ...validValues, tickets: '0' }

    expect(validateSignup(values, 10).tickets).toBe(
      'Choose 1 to 4 tickets'
    )
  })

  it('rejects 5 tickets', () => {
    const values = { ...validValues, tickets: '5' }

    expect(validateSignup(values, 10).tickets).toBe(
      'Choose 1 to 4 tickets'
    )
  })

  it('rejects decimal tickets', () => {
    const values = { ...validValues, tickets: '1.5' }

    expect(validateSignup(values, 10).tickets).toBe(
      'Choose 1 to 4 tickets'
    )
  })

  it('accepts 4 tickets', () => {
    const values = { ...validValues, tickets: '4' }

    expect(validateSignup(values, 10)).toEqual({})
  })

  it('rejects booking more tickets than available seats', () => {
    const values = { ...validValues, tickets: '3' }

    expect(validateSignup(values, 2).tickets).toBe(
      'Only 2 seats left'
    )
  })
})