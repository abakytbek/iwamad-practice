import { useState } from 'react'
import type { ChangeEvent, SubmitEvent } from 'react'
import { validateRegistration } from '../lib/validateRegistration'
import type { RegistrationValues } from '../lib/validateRegistration'
import Button from '../components/ui/Button'

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })

  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitAttempted(true)

    if (Object.keys(errors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <section>
      <h2>Create an account</h2>

      {submitted ? (
        <p role="status">
          Thanks, {values.fullName.trim()}. You are registered.
        </p>
      ) : (
        <form className="form" onSubmit={handleSubmit} noValidate>

          <div className="field">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={values.fullName}
              onChange={handleChange}
            />
            {submitAttempted && errors.fullName && (
              <p className="field-error">{errors.fullName}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {submitAttempted && errors.email && (
              <p className="field-error">{errors.email}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            {submitAttempted && errors.password && (
              <p className="field-error">{errors.password}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {submitAttempted && errors.confirmPassword && (
              <p className="field-error">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="field">
            <div className="check">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                checked={values.acceptTerms}
                onChange={handleChange}
              />
              <label htmlFor="acceptTerms">
                I accept the terms
              </label>
            </div>

            {submitAttempted && errors.acceptTerms && (
              <p className="field-error">{errors.acceptTerms}</p>
            )}
          </div>

          <Button type="submit">Create account</Button>

        </form>
      )}
    </section>
  )
}

export default RegisterPage