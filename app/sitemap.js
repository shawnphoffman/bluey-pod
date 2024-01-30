const root = 'https://theblueypodcast.com'

export default function sitemap() {
	return [
		{
			url: `${root}`,
			lastModified: new Date(),
		},
		{
			url: `${root}/listen-now`,
			lastModified: new Date(),
		},
		{
			url: `${root}/activities`,
			lastModified: new Date(),
		},
		{
			url: `${root}/episodes`,
			lastModified: new Date(),
		},
	]
}
