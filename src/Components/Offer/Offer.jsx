import React from 'react'
import './style.css'
const Offer = props =>  {
    const sections = [
        {icon:'fa fa-desktop', title:"Responsive", desc:'Lorem ipsum dolor sit amet consectetur.'},
        {icon:'fa fa-mobile', title:"Redesigned", desc:'Lorem ipsum dolor sit amet consectetur.'},
        {icon:'fa fa-lock', title:"Favorited", desc:'Lorem ipsum dolor sit amet consectetur.'},
        {icon:'fa fa-magic', title:"Question", desc:'Lorem ipsum dolor sit amet consectetur.'},
    ]
    return (
        <>
            <div className="offer bg-info text-white text-center">
                <div className="container">
                    <h6 className='text-white text-uppercase'>Services</h6>
                    <h2 className='text-capitalize font-weight-bold mb-5'>what we offer</h2>
                    <div className="row">
                        
                            {sections.map((section, index) => {
                                return(
                                    <div key={index} className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-3">
                                        <span> <i className={`icon text-info ${section.icon}`}></i> </span>
                                        <h4 className='mt-2 offer-title'>{section.title}</h4>
                                        <p className='offer-desc tetx-muted'> {section.desc} </p>
                                    </div>
                                )
                            })}                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Offer;