import { useState } from 'react'
import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react'
import { validateRegistration } from '../lib/validateRegistration'
import type { RegistrationValues } from '../lib/validateRegistration'
import Button from '../components/ui/Button'
import TextField from '../components/ui/TextField'

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
  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationValues, boolean>>
  >({})

  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }
  function handleBlur(event: FocusEvent<HTMLInputElement>) {
  const name = event.target.name as keyof RegistrationValues

  setTouched((current) => ({
    ...current,
    [name]: true,
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

          <TextField
          label="Full Name"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error=
          {touched.fullName || submitAttempted
            ? errors.fullName : undefined}
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
              ? errors.email : undefined}
          />

         <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.password || submitAttempted 
              ? errors.password : undefined}
          />

         <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.confirmPassword || submitAttempted 
              ? errors.confirmPassword : undefined}
          />

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