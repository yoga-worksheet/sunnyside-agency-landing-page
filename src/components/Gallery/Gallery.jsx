import React from 'react'
import galleryData from '../../constants/gallery';

const Gallery = () => {
  const SCREEN_WIDTH = window.innerWidth;
  const isMobile = SCREEN_WIDTH < 640;

  return (
    <div className='grid grid-cols-2 md:grid-cols-4'>
      {galleryData.map((gallery, index) => (
        <div key={index} className="w-full">
          <img className='block' src={isMobile ? gallery.mobile_image : gallery.desktop_image} alt={gallery.name} />
        </div>
      ))}
    </div>
  )
}

export default Gallery