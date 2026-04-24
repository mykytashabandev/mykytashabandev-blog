export function getReadingTime(body: string): number {
	const words = body.trim().split(/\s+/).length;
	return Math.max(1, Math.ceil(words / 200));
}
