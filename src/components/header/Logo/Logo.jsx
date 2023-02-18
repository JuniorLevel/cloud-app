import React from 'react'
import logo from '../../../images/logo.svg'
export const Logo = () => {
	return (
		<div className='flex basis-1/3 justify-center'>
			<img className='cursor-pointer' src={logo} alt='logo-svg' />
		</div>
	)
}
