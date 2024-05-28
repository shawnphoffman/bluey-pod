import 'server-only'

import { type QueryParams } from 'next-sanity'

import sanityClient from '@/sanity/sanity.client'
import { AWARDS_QUERY } from '@/sanity/sanity.queries'
import { AWARDS_QUERYResult } from '@/sanity/sanity.types'

type SanityFetchProps = {
	query: string
	params?: QueryParams
	tags?: string[]
}

async function sanityFetch<QueryResponse>({ query, params = {}, tags }: SanityFetchProps) {
	return sanityClient.fetch<QueryResponse>(query, params, {
		next: {
			tags,
		},
	})
}

export async function getAwards(): Promise<AWARDS_QUERYResult> {
	return await sanityFetch<AWARDS_QUERYResult>({
		query: AWARDS_QUERY,
		tags: ['awards'],
	})
}
