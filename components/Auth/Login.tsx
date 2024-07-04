import React, { useState } from 'react'
import AuthInput from './UI/Input'
import { Formik, Form } from 'formik';
import Button from './UI/Button';
import * as Yup from "yup";
import { BsPersonFillAdd } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import SignUp from './SignUp';
import LoginHeader from './LoginHeader';


const loginFields = {
    email: "", password: ""
}

export default function Login() {
    const [loginInfo, setLoginInfo] = useState(loginFields);
    const [isShowText, setIsShowText] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const { email, password } = loginInfo;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    }
    const formValidation = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    })
    return (
        <div className='main_wrapper w-screen h-screen bg-slate-300 flex justify-center items-center'>
            <div className="mainBox w-[400px] h-[400px] bg-white rounded-md p-4">
                <LoginHeader />
                <div className="login_form">
                    <Formik
                        validationSchema={formValidation}
                        onSubmit={(values, actions) => {
                            console.log(values, actions);
                        }}
                        enableReinitialize
                        initialValues={{ email, password }} >
                        {/* {({ formik }) => ( */}
                        <Form>
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
                            <Button text='Log in' />
                        </Form>
                        {/* )} */}
                    </Formik>
                </div>
                <div className="bottom_part flex  justify-center">
                    <div className="icon flex gap-4 mt-4 text-2xl">
                        <div className="icon cursor-pointer" >
                            <FcGoogle />
                        </div>
                        <div className="icon cursor-pointer" onClick={() => setShowSignIn(true)}>
                            <BsPersonFillAdd />
                        </div>
                    </div>
                </div>
            </div>
            {
                showSignIn && <SignUp setShowSignIn={setShowSignIn} />
            }
        </div>
    )
}
