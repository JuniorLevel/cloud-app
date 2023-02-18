import React from 'react'
import img from '../../images/home-page/preview-img.png'
export const ImageBlock = () => {
	return (
		<div className='flex w-[55%]'>
			<img src={img} alt='preview-img' />
		</div>
	)
}
