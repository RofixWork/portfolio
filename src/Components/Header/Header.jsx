import React from 'react'
import './style.css'
const Header = props => {
    return (
        <header className='d-flex justify-content-center align-items-center text-white'>
            <div className="container">
                <div className="row">
                    <div className='col-md-10 mx-auto text-center'>
                        <h1 className='text-capitalize header-title font-weight-bold'>{props.title}</h1>
                        <h4 className='text-capitalize font-italic mb-3 header-desc'>a free bootstrap theme by start bootstrap</h4>
                        <a href="#" className='mt-1 text-capitalize btn btn-info btn-lg'>{props.button}</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;