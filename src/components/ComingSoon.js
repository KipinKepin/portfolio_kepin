import React from 'react'
import "../component_style/ComingSoon.css"
import { NavLink } from 'react-router-dom'

const ComingSoon = () => {
    return (
        <div className='notfound'>
            <div>
                <h1>404</h1>
                <h1 className='not'>NOT FOUND</h1>
            </div>
            <div>
                <p>What are you looking for can be :</p>
                <ul className='miss'>
                    <li>Missing</li>
                    <li>Deleted</li>
                    <li>Need a permission</li>
                </ul>
            </div>
            <div>
                <p>Solution :</p>
                <ul className='miss'>
                    <li>Wait for update</li>
                </ul>
            </div>
            <div className='tombol'>
                <NavLink className="btn" to="/">Back</NavLink>
            </div>
        </div>
    )
}

export default ComingSoon