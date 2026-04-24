import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const fontRegular = readFileSync(join(process.cwd(), 'src/assets/fonts/atkinson-regular.woff'));
const fontBold = readFileSync(join(process.cwd(), 'src/assets/fonts/atkinson-bold.woff'));

export async function generateOgImage(
	title: string,
	subtitle: string,
): Promise<Uint8Array> {
	const fontSize = title.length > 50 ? 44 : title.length > 30 ? 54 : 64;

	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: '#000000',
					padding: '80px',
					justifyContent: 'space-between',
				},
				children: [
					{
						type: 'span',
						props: {
							style: { fontSize: 18, color: '#555555', letterSpacing: '0.08em' },
							children: 'MYKYTASHABAN.DEV',
						},
					},
					{
						type: 'div',
						props: {
							style: {
								fontSize,
								fontWeight: 700,
								color: '#ededed',
								lineHeight: 1.1,
								letterSpacing: '-0.02em',
								maxWidth: 950,
							},
							children: title,
						},
					},
					{
						type: 'span',
						props: {
							style: { fontSize: 22, color: '#888888' },
							children: subtitle,
						},
					},
				],
			},
		},
		{
			width: 1200,
			height: 630,
			fonts: [
				{ name: 'Atkinson', data: fontRegular, weight: 400, style: 'normal' },
				{ name: 'Atkinson', data: fontBold, weight: 700, style: 'normal' },
			],
		},
	);

	const resvg = new Resvg(svg);
	return resvg.render().asPng();
}
