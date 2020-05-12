import LoginForm from "@/container/LoginForm"
import React, { ReactElement } from 'react'

interface Props {
    
}

export default function login({}: Props): ReactElement {
    return (
        <div>
            <LoginForm></LoginForm>
        </div>
    )
}
