import React from 'react';
import { useField } from 'formik';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
interface LoginInputProps {
  labelText: string,
  name: string,
  value: string,
  type: string,
  placeholder?: string,
  passwordField?: boolean,
  toggleButton?: () => void,
  onChange?: any
}

export default function AuthInput(props: LoginInputProps) {
  const [
    field,
    { error, touched },
  ] = useField({
    name: props.name,
    type: props.type,
  });
  return (
    <div className='form-input-group mt-2'>
      <label className='font-primary' htmlFor={props.labelText}>{props.labelText}</label>
      {props.passwordField ? <div className="password_container relative">
        <input
          className={`block font-secondary w-full border border-slate-400 rounded-sm py-2 px-2 focus:border-blue-500 outline-none ${error && "border-red-500"}`}
          {...field} 
          {...props}
        />
        <div className="toggle_btn absolute right-4 top-[15px] cursor-pointer" onClick={props.toggleButton} >
          {
            props.type === 'password' ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />
          }
        </div>
      </div> : <input
        className={`block font-secondary w-full border border-slate-400 rounded-sm py-2 px-2 focus:border-blue-500 outline-none ${error && "border-red-500"}`}
        {...field} {...props}
      />}
    </div>
  )
}
AuthInput.defaultProps = {
  passwordField: false
}