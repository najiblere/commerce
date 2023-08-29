import React from 'react'

function NewsCard({
  img,
  title,
  text,
  url,
}) {
  return (
    <div className='w-100 h-100'>
      {
        img ? <img alt='com' src={img} className="w-100 h-150p img-fluid" /> : ""
      }
      <div className='text-secondary p-2'>
        <p className='fs-6 lh-base text-break' dangerouslySetInnerHTML={{__html: title}} />
        <span className='text-break' dangerouslySetInnerHTML={{__html: text}} />
      </div>
    </div>
  )
}

export default NewsCard