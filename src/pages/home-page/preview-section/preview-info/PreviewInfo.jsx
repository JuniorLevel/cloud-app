import { SubTitle } from '../../../../components/sub-title/SubTitle'
import { Title } from '../../../../components/title/Title'
import { Button } from '../../../../components/ui/Button'
export const PreviewInfo = () => {
	return (
		<div className='w-[35%] mt-[33px]'>
			<Title>{`Personal\n and Business`}</Title>
			<SubTitle />
			<span className='block w-full h-[2px] bg-title-color mb-[40px]'></span>
			<h3 className='font-[Roboto] font-medium text-[26px] leading-[156%] mb-[13px] uppercase text-title-color'>
				STORE AND MANAGE ALL YOUR Files!
			</h3>
			<p className='mb-[25px]'>
				Upload multiple files at once and keep them forever on this site. If
				you're using FireFox or Chrome, you can simply drag & drop your files to
				begin uploading
			</p>
			<Button
				text='Try SkyBox Now'
				styles={
					'font-[Comfortaa] text-[24px] text-white font-bold w-[308px] h-[79px] rounded-[62px] hover:shadow-3xl  bg-gradient-to-r from-[#5AC4FF] to-[#B250FF] hover:opacity-[0.9]'
				}
			/>
		</div>
	)
}
