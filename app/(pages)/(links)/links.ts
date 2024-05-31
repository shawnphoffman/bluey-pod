export const spotifyId = '01RC12mzSlrKmYYe2pjxgM'
export const spotifyUrl = `https://open.spotify.com/show/${spotifyId}`
export const applePodcastId = '1648081856'
export const applePodcastUrl = `https://podcasts.apple.com/us/podcast/id${applePodcastId}`
export const appleRatingUrl = `${applePodcastUrl}?see-all=reviews`
export const rssFeedUrl = 'https://anchor.fm/s/bdcbfb70/podcast/rss'

type LinkItem = {
	title: string
	href: string
	icon: string
	background: string
	color?: string
}

const items: LinkItem[] = [
	{
		title: 'Twitter',
		href: 'https://twitter.com/theblueypodcast',
		icon: 'fa-brands fa-x-twitter',
		background: 'bg-twitter',
	},
	{
		title: 'Spotify',
		href: 'https://podcasters.spotify.com/pod/show/bluey-podcast',
		icon: 'fa-brands fa-spotify',
		background: 'bg-spotify',
	},
	{
		title: 'Apple Podcasts',
		href: applePodcastUrl,
		icon: 'fa-solid fa-podcast',
		background: 'bg-applepodcasts',
	},
	{
		title: 'TikTok',
		href: 'https://www.tiktok.com/@theblueypodcast',
		icon: 'fa-brands fa-tiktok',
		background: 'bg-tiktok',
	},
	{
		title: 'Instagram',
		href: 'https://www.instagram.com/theblueypodcast',
		icon: 'fa-brands fa-instagram',
		background: 'bg-instagram',
	},
	{
		title: 'Emails',
		href: 'mailto:blueypodcast@gmail.com',
		icon: 'fa-solid fa-at',
		background: 'bg-email',
	},
	{
		title: 'PodBean',
		href: 'https://www.podbean.com/podcast-detail/dydni-285607/Dinner-with-the-Heelers-Podcast',
		icon: 'fa-solid fa-coffee-beans',
		background: 'bg-podbean',
	},
	{
		title: 'Facebook',
		href: 'https://www.facebook.com/profile.php?id=100086726259418',
		icon: 'fa-brands fa-facebook',
		background: 'bg-facebook',
	},
	{
		title: 'Overcast',
		href: `https://overcast.fm/itunes${applePodcastId}/dinner-with-the-heelers`,
		icon: 'fak fa-overcast fa-lg',
		background: 'bg-overcast',
	},
	{
		title: 'RSS',
		href: 'https://anchor.fm/s/bdcbfb70/podcast/rss',
		icon: 'fa-solid fa-square-rss',
		background: 'bg-rss',
	},
	{
		title: 'Goodpods',
		href: 'https://goodpods.com/podcasts/dinner-with-the-heelers-277737',
		icon: 'fak fa-goodpods',
		background: 'bg-goodpods',
		color: 'text-black',
	},
	{
		title: 'Amazon Music',
		href: 'https://music.amazon.com/podcasts/6c9ee5c6-eb09-4424-a34a-334d967b2c67/dinner-with-the-heelers',
		icon: 'fa-brands fa-amazon',
		background: 'bg-amazonmusic',
	},
	{
		title: 'iHeart',
		href: 'https://www.iheart.com/podcast/269-dinner-with-the-heelers-102741776/',
		icon: 'fak fa-iheart',
		background: 'bg-iheart',
	},
	{
		title: 'Pocket Casts',
		href: 'https://pca.st/vpuwalsl',
		icon: 'fak fa-pocket-casts',
		background: 'bg-pocketcasts',
	},
	{
		title: 'Castbox',
		href: 'https://castbox.fm/channel/Dinner-with-the-Heelers-id5156314',
		icon: 'fak fa-castbox',
		background: 'bg-castbox',
	},
	{
		title: 'Family Portraits',
		href: 'https://www.instagram.com/blueyfamilyportraits/',
		icon: 'fa-solid fa-palette',
		background: 'bg-offText',
	},
] as const

export default items
