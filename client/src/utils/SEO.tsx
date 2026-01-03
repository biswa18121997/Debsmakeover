import { Helmet } from 'react-helmet-async';

interface SeoProps {
	title: string;
	description: string;
	canonical?: string;
	ogImage?: string;
}

export const SEO = ({ title, description, canonical, ogImage }: SeoProps) => {
	const siteName = "YourBrandName";
	const fullTitle = `${title} | ${siteName}`;

	return (
		<Helmet>
			{/* Standard Metadata */}
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			{canonical && <link rel="canonical" href={canonical} />}

			{/* Open Graph (Facebook/LinkedIn) */}
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			{ogImage && <meta property="og:image" content={ogImage} />}

			{/* Twitter Cards */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
		</Helmet>
	);
};
