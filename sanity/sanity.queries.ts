import { groq } from 'next-sanity'

// const podName = 'Dinner with the Heelers'
const podId = '386d4bf9-2128-40ae-bdae-22e23696f5bb'

// =======================
// AWARD QUERIES
// =======================
// const awardFields = `
// 	...,
// 	"category": category->{title, image},
// `
export const AWARDS_QUERY =
	process.env.VERCEL_ENV === 'production'
		? groq`*[_type == "award" && category._ref == "${podId}" && active==true]`
		: groq`*[_type == "award" && category._ref == "${podId}"]`
