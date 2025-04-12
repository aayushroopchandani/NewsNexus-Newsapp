import React from 'react'

export default function BeforeLoad({length,display='block'}) {
    return (
        // array.map((element, index, array) => {
        //     // Return the transformed value
        // });
        <>
            <div style={{ overflowY: 'scroll', height: 'calc(100vh - 55px)', width: 'calc(100vw - 16vw)' }}>
                <h2 className="card-title placeholder-glow p-2 text-center" style={{display: display}} >
                    <span className="placeholder col-6"></span>

                </h2>
                <div className='d-flex flex-wrap align-items-center justify-content-center overflow-auto' style={{ gap: '20px',paddingTop:'8px' }}>
                    {
                        Array.from( {length} ).map((_, index) => {


                            return <div key={index} >
                                <div className="card" aria-hidden="true" style={{ width: '18rem', height: '28rem' }}>
                                    <div className="placeholder-glow">
                                        <span className="placeholder col-7" style={{ height: '11.2rem', width: '100%' }}></span>
                                    </div>
                                    <div className="card-body" style={{ position: 'relative' }}>
                                        <h5 className="card-title placeholder-glow">
                                            <span className="placeholder col-6"></span>
                                            <span className="placeholder col-6"></span>

                                        </h5>
                                        <p className="card-text placeholder-glow">
                                            <span className="placeholder col-7"></span>
                                            <span className="placeholder col-4"></span>
                                            <span className="placeholder col-4"></span>
                                            <span className="placeholder col-6"></span>
                                            <span className="placeholder col-8"></span>
                                        </p>
                                        <button className="btn btn-primary disabled placeholder col-6" aria-disabled="true" style={{ position: 'absolute', bottom: '15px',backgroundColor:'#5D3C64' }} ></button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
