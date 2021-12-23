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
                <div className='control'>
                  <label className='label'>Email Address
                    <input className='input' type='email' autoComplete='email' name='email' onChange={handleChange} required />
                  </label>
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <label className='label'>
                    <input className='input' type='password' autoComplete='password' name='password' onChange={handleChange} required />
                    Password
                  </label>
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
