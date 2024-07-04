import React, { useState } from 'react'
import LoginHeader from './LoginHeader';
import { Formik, Form } from 'formik';
import AuthInput from './UI/Input';
import Button, { CancelButton } from './UI/Button';
import * as Yup from "yup";

interface signUpProps {
    setShowSignIn: any;
}
const info = {
    user_name: "",
    email: "",
    password: "",
    confirmPassword: "",
}
export default function SignUp({ setShowSignIn}: signUpProps) {
    const [signUpInfo, setSignUpInfo] = useState(info)
    const [isShowText, setIsShowText] = useState(false);
    const { user_name, email, password, confirmPassword } = info;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignUpInfo({ ...signUpInfo, [name]: value });
    }
    const formValidation = Yup.object({
        name: Yup.string().email().min(4).max(20).required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        confirmPassword: Yup.string().oneOf(['password']).required()
    });
    return (
        <div className='w-screen h-screen  bg-[#00000057] fixed top-0 left-0 flex justify-center items-center'>
            <div className="mainBx mainBox w-[400px] h-[550px] bg-white rounded-md p-4">
                <LoginHeader />
                <div className="sign_up">
                    <Formik
                        validationSchema={formValidation}
                        onSubmit={(values, actions) => {
                        }}
                        enableReinitialize
                        initialValues={{ name, email, password, confirmPassword }} >
                        {/* {({ formik }) => ( */}
                        <Form>
                            <AuthInput
                                value={user_name}
                                type="text"
                                name="name"
                                labelText='Name'
                                onChange={handleInputChange}
                            />
                            <AuthInput
                                value={email}
                                type="text"
                                name="email"
                                labelText='Email'
                                onChange={handleInputChange}
                            />
                            <AuthInput
                                value={password}
                                type={isShowText ? "text" : "password"}
                                name="password"
                                labelText='Password'
                                passwordField={true}
                                toggleButton={() => setIsShowText(!isShowText)}
                                onChange={handleInputChange}
                            />
                            <AuthInput
                                value={confirmPassword}
                                type={"password"}
                                name="confirmPassword"
                                labelText='Confirm Password'
                                onChange={handleInputChange}
                            />
                            <Button text='Sign Up' />
                            <CancelButton 
                            text='Cancel'
                            onTap={()=>setShowSignIn(false)} />
                        </Form>
                        {/* )} */}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
