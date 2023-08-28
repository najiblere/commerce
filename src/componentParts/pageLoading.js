import React from 'react'

function PageLoading() {
  return (
    <div className='w-100 vh-100 position-relative py-5'>
      <div className="d-flex text-center justify-content-center pt-100p">
      {/* <div className='position-absolute top-50 start-50'> */}
        <div className="spinner-grow" style={{width: "0rem", height: "0rem",}} role="status">
          <span className="visually-hidden">Loading...</span>
          <img alt='waya' src='/nedux.png' width={200} height={200}/>
        </div>
      </div>

      <div className='w-100 mt-5'>
        <div className='text-center'>
        </div>
      </div>
    </div>
  )
}

export default PageLoading