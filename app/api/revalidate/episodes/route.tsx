import { revalidatePath, revalidateTag } from 'next/cache'

export const dynamic = 'force-dynamic'

export async function GET() {
	console.log('Revalidating episodes')
	// revalidatePath('/episodes')
	revalidateTag('episodes')
	return Response.json({ success: true })
}
