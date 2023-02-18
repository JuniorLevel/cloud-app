import { Header } from '../../components/header/Header'
import { PreviewSection } from '../../pages/home-page/preview-section/PreviewSection'
import { Layout } from '../../components/layout/Layout'

export const HomePage = () => {
	return (
		<Layout>
			<Header />
			<PreviewSection />
		</Layout>
	)
}
