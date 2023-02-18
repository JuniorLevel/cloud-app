import { ImageBlock } from '../../../components/image-block/ImageBlock'
import { PreviewInfo } from './preview-info/PreviewInfo'
export const PreviewSection = () => {
	return (
		<section className='w-full flex mt-[156px] justify-end'>
			<PreviewInfo />
			<ImageBlock />
		</section>
	)
}
