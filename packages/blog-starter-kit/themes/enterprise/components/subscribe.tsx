import * as Popover from '@radix-ui/react-popover';
import { Button } from './button';
import { NewsletterPlusSVG } from './icons';
import { SubscribeForm } from './subscribe-form';

export const Subscribe = () => {
	return (
		<div className="fixed bottom-10 right-10 z-50">
			<Popover.Root>
				<Popover.Trigger asChild>
					<Button
						label="Subscribe"
						type="outline"
						icon={<NewsletterPlusSVG className="h-5 w-5 fill-current" />}
						className="dark:!bg-primary-200 hover:dark:!bg-primary-200/90 dark:!text-gray-900"
					/>
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content
						className="w-[350px] rounded-xl border bg-white p-5 shadow-xl md:w-[500px] dark:border-gray-800 dark:bg-gray-900"
						align="end"
						sideOffset={5}
					>
						<h3 className="mb-2 text-center text-base font-semibold text-slate-200">
							Get daily viral meme templates and access a library of strategies driving meme-powered
							growth for businesses!{' '}
						</h3>
						<SubscribeForm />
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</div>
	);
};
