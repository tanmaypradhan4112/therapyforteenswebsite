import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {
	DiscordIcon,
	InstagramIcon,
	WhatsappIcon
} from "@/components/icons";


export const Navbar = () => {
	return (
		<NextUINavbar className="py-2 shadow-md" maxWidth="xl" position="sticky">
			{/* MENU */}
			<NavbarContent className=" basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<img width="20%" src="/img/TFTlogo.png" alt="" />
						<p className="font-bold text-gray-500 text-2xl">Therapy for Teens</p>
					</NextLink>
				</NavbarBrand>

				<ul className="hidden lg:flex gap-4	ml-8">
					{siteConfig.navItems.map((item) => (
						<NavbarItem isActive key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-foreground data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			{/* Social Media Icon */}
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full items-center"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
						<InstagramIcon className="text-default-500" />
					</Link>

					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>

					<Link isExternal href={siteConfig.links.whatsapp} aria-label="Whatsapp">
						<WhatsappIcon className="text-default-500" />
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				{/* <ThemeSwitch /> */}
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
