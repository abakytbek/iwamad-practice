import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

import type { CampusEvent } from '../data/events'
import {
  validateSignup,
  type SignupValues,
} from '../lib/validateSignup'

import TextField from './ui/TextField'
import Button from './ui/Button'

type EventSignupFormProps = {
  event: CampusEvent
}

export default function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  })

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    tickets: false,
  })

  const [submitAttempted, setSubmitAttempted] = useState(false)

  const [seatsLeft, setSeatsLeft] = useState(event.seats)

  const [message, setMessage] = useState('')

  const errors = validateSignup(values, seatsLeft)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setValues((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.name as keyof SignupValues

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitAttempted(true)
    setTouched({
      fullName: true,
      email: true,
      tickets: true,
    })

    if (Object.keys(errors).length > 0) {
      return
    }

    const tickets = Number(values.tickets)

    setSeatsLeft((previous) => previous - tickets)

    setMessage(`Booked: ${tickets} for ${values.fullName.trim()}.`)

    setValues({
      fullName: '',
      email: '',
      tickets: '1',
    })

    setTouched({
      fullName: false,
      email: false,
      tickets: false,
    })

    setSubmitAttempted(false)
  }

  return (
    <section>
      <h2>Book tickets</h2>

      <p>Seats left: {seatsLeft}</p>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.fullName || submitAttempted
              ? errors.fullName
              : undefined
          }
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.email || submitAttempted
              ? errors.email
              : undefined
          }
        />

        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.tickets || submitAttempted
              ? errors.tickets
              : undefined
          }
        />

        <Button type="submit">Book</Button>
      </form>

      {message && <p role="status">{message}</p>}
    </section>
  )
}