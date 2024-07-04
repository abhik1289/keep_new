import React from 'react'

interface ButtonProps {
    text: string,
    onTap?: () => void;
}

export default function Button({ text, onTap }: ButtonProps) {
    return (
        <button onClick={onTap} className='w-[150px] bg-background font-primary rounded-sm text-white py-2 mt-3' >{text}</button>
    )
}

export function CancelButton({ text, onTap }: ButtonProps){
    return ( <button onClick={onTap} className='w-[150px] font-primary border border-slate-500 py-2 ml-2 rounded-md' >{text}</button>)
} 