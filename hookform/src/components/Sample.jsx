import React from 'react';
import { useForm } from 'react-hook-form';

function Sample() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="email">Email</label>
            <input id='email' {...register('email', { required: true })} type='email' />
            {errors.email && <span>入力が必須の項目です</span>}
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input id='password' {...register('password', {
                required: {
                    value: true,
                    message: '入力が必須の項目です',
                },
                pattern: {
                    value: /^[A-Za-z]+$/,
                    message: 'アルファベットのみ入力してください。',
                },
                minLength: {
                    value: 8,
                    message: '８文字以上入力してください',
                }
            })} type='password' />
            {
            errors.password?.types?.required && (
                <div>{errors.password.types.required}</div>
            )
            }
            {
            errors.password?.types?.pattern && <div>{errors.password.types.pattern}</div>
            }
            {
            errors.password?.types?.minLength && <div>8文字以上入力してください。</div>
            }
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Sample
