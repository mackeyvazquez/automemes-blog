import { forwardRef } from 'react';

type Props = {
	label: string;
	type?: string;
	icon?: React.ReactNode;
	className?: string;
	secondaryIcon?: React.ReactNode;
	href?: string;
	onClick?: () => void;
	as?: string;
	rel?: string;
	target?: string;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
	({ label, type, icon, className, secondaryIcon, href, rel, as, target, onClick }, ref) => {
		let buttonClassName: string;

		switch (type) {
			case 'outline':
				buttonClassName =
					'text-slate-950 bg-transparent dark:border-gray-800 hover:bg-slate-100 dark:bg-transparent dark:hover:bg-gray-800 dark:text-white';
				break;

			case 'primary':
				buttonClassName =
					'text-white bg-primary-900 hover:bg-primary-900 hover:bg-opacity-90 hover:border-primary-900';
				break;

			case 'outline-dark':
				buttonClassName =
					'text-white bg-transparent hover:bg-white hover:text-black dark:bg-gray-900 dark:text-white';
				break;

			default:
				buttonClassName =
					'text-white bg-primary-900 hover:bg-primary-900 hover:bg-opacity-90 border-primary-900 dark:bg-primary-600 dark:text-white';
		}

		if (as === 'a') {
			return (
				<a
					href={href}
					rel={rel}
					target={target}
					className={`flex flex-row items-center justify-start rounded-md px-4 py-2 text-sm font-semibold transition-colors duration-200 md:px-5 md:py-3 md:text-base ${buttonClassName} ${
						secondaryIcon ? `md:justify-between` : `md:justify-center`
					}  ${className}`}
				>
					<div className="flex flex-row items-center gap-2">
						{icon && <div className="shrink-0">{icon}</div>}
						{label || null}
					</div>
					{secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
				</a>
			);
		}

		return (
			<button
				ref={ref}
				onClick={onClick}
				className={`flex flex-row items-center justify-start gap-2 rounded-md px-2 py-2 text-sm font-semibold transition-colors duration-200 md:px-5 md:py-3 md:text-base ${buttonClassName} ${
					secondaryIcon ? `md:justify-between` : `md:justify-center`
				}  ${className}`}
			>
				<div className="flex flex-row items-center gap-2">
					{icon && <div className="shrink-0">{icon}</div>}
					{label || null}
				</div>
				{secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
			</button>
		);
	},
);

Button.displayName = 'Button';
