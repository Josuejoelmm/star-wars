import React from 'react'

export default function FetchErrorMsg({ errorMsg }) {
    return (
        <h2 style={{color: 'red'}}>
            {errorMsg}... please try again
        </h2>
    )
}
