import React, { useState } from 'react'
import Button from './UI/Button'
export default function Verify() {
    const [otp, setOtp] = useState("");
    return (
        <div className='main_wrapper w-screen h-screen bg-slate-300 flex justify-center items-center'>
            <div className="mainBox w-[400px] h-[250px] bg-white rounded-md p-4">
                <div className="header font-primary text-2xl font-[500]">
                    Verify Your account
                </div>
                <div className="form_box mt-4">
                    <form>
                        <label className='font-primary'>
                            One Time Password
                        </label>
                        <input
                            value={otp}
                            onChange={(e)=>setOtp(e.target.value)}
                            placeholder='456413'
                            className={`block mt-2 font-secondary w-full border border-slate-400 rounded-sm py-2 px-2 focus:border-blue-500 outline-none `}
                        />
                        <Button

                            text="Verify" />
                    </form>
                </div>
            </div>
        </div>
    )
}
