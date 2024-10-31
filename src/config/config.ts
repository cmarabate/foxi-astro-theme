// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'My Favorite Movies Ranked',
	siteDescription:
		'A list of all my favorite movies in order from best to worst. You can filter for multiple different genres as well as their original language and if they have been dubbed in English or not.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'My Favorite Movies Ranked Logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
