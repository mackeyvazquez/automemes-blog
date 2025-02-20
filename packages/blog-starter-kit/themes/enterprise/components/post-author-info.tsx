import { twJoin } from 'tailwind-merge';

import { getBlurHash, resizeImage } from '@starter-kit/utils/image';
import CustomImage from './custom-image';

function PostAuthorInfo(props: any) {
	const { author } = props;

	return (
		<div className="flex w-full flex-1 flex-col md:flex-row">
			<div className="mb-4 flex w-full flex-1 flex-row md:mb-0 ">
				<div className="mr-4 flex flex-row md:mb-0">
					<div className="block h-10 w-10 overflow-hidden rounded-full border md:h-14 md:w-14 dark:border-slate-800">
						<CustomImage
							className="block"
							placeholder="blur"
							originalSrc={author.profilePicture}
							src={resizeImage(author.profilePicture, {
								w: 256,
								h: 256,
								c: 'thumb',
							})}
							blurDataURL={getBlurHash(
								resizeImage(author.profilePicture, {
									w: 256,
									h: 256,
									c: 'thumb',
								}),
							)}
							width={256}
							height={256}
							alt={author.name}
						/>
					</div>
				</div>
				<div
					className={twJoin(
						'flex flex-1 flex-col justify-center md:justify-start',
						!author.bio?.html ? 'md:justify-center' : '',
					)}
				>
					<div className="flex flex-row items-center md:mb-1">
						<h1 className="font-sans text-lg font-semibold text-slate-800 dark:text-slate-100">
							{author.name}
						</h1>
					</div>
					{author.bio?.html && (
						<div className="hidden pr-2 md:block">
							<div
								className="hashnode-content-style !text-base"
								dangerouslySetInnerHTML={{ __html: author.bio?.html }}
							/>
						</div>
					)}
				</div>
			</div>
			{author.bio?.html && (
				<div className="mb-4 block md:hidden">
					<div
						className="hashnode-content-style !text-base"
						dangerouslySetInnerHTML={{ __html: author.bio?.html }}
					/>
				</div>
			)}
		</div>
	);
}

export default PostAuthorInfo;
