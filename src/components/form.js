import React from 'react'
import { useForm } from '../hooks'

const Form = () => {
  const login = () => {
    // console.log(values)
    window.alert(JSON.stringify(values))
  }

  const { values, handleChange, handleSubmit } = useForm(login)

  return (
    <div className='section is-fullheight'>
      <div className='container'>
        <div className='column is-4 is-offset-4'>
          <div className='box'>
            <form onSubmit={handleSubmit}>
              <div className='field'>
                <label className='label' htmlFor='email-id'>
                  Email Address
                </label>
                <div className='control'>
                  <input className='input' id='email-id' type='email' name='email' onChange={handleChange} required />
                </div>
              </div>
              <div className='field'>
                <label className='label' htmlFor='p-id'>
                  Password
                </label>
                <div className='control'>
                  <input className='input' id='p-id' type='password' name='password' onChange={handleChange} required />
                </div>
              </div>
              <button type='submit' className='button is-block is-info is-fullwidth'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
