import { buildAwardsQuery, buildBannerQuery } from '@shawnphoffman/pod-sites-shared/sanity'

const podId = '386d4bf9-2128-40ae-bdae-22e23696f5bb'

export const BANNER_QUERY = buildBannerQuery(podId)
export const AWARDS_QUERY = buildAwardsQuery(podId, process.env.VERCEL_ENV)
