"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
// import { Link } from 'react-scroll';
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { fontGenos } from "@/config/fonts";
import { useState } from "react";

export const Navbar = () => {


  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.open("https://www.linkedin.com/in/balvind3rsingh/", "_blank");
  };

  const [activeLink, setActiveLink] = useState<string>("Home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div
      className={` top-5 mt-5 h-full w-full flex flex-row items-center text ${fontGenos}`}
    >
      <a href="/">

        <img
          src="/Assets/images/Logo.png"
          alt="asset"
          className="w-12 h-12 mx-3 lg:mx-8 "
          
        />
      </a>

      <div className="flex genos flex-auto justify-start gap-3 lg:gap-6 items-center text-2xl lg:text-3xl">
        {/* <div onClick={() => handleLinkClick("Home")}> */}

          <a
            href="/"
            className={activeLink === "Home" ? "text-[#d1212f]" : ""}
            
          >
            GymFyt
          </a>
        {/* </div> */}

        {/* <div onClick={(e) => {
          e.preventDefault();
          handleLinkClick("Exercises");
          const element = document.getElementById("exercise");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}>

          <a
          href="#exercise"
          className={`  transition-colors duration-300 ${
            activeLink === "Exercises" ? "" : ""
          }`}
          
        >
          Exercises
          </a>
        </div> */}

        {/* <ThemeSwitch /> */}
      </div>
      <Button
        radius="lg"
        className="font-sans mr-3 lg:mr-6 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-sm"
        onClick={handleButtonClick}
        // as={Link}
        color="warning"
        // showAnchorIcon
        variant="solid"
      >
        Contact Me
      </Button>
    </div>
  );
};

// return (
//   <NextUINavbar maxWidth="xl" position="sticky">
//     <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
//       <NavbarBrand as="li" className="gap-3 max-w-fit">
//         <NextLink className="flex justify-start items-center gap-1" href="/">
//           <Logo />
//           <p className="font-bold text-inherit">ACME</p>
//         </NextLink>
//       </NavbarBrand>
//       <ul className="hidden lg:flex gap-4 justify-start ml-2">
//         {siteConfig.navItems.map((item) => (
//           <NavbarItem key={item.href}>
//             <NextLink
//               className={clsx(
//                 linkStyles({ color: "foreground" }),
//                 "data-[active=true]:text-primary data-[active=true]:font-medium",
//               )}
//               color="foreground"
//               href={item.href}
//             >
//               {item.label}
//             </NextLink>
//           </NavbarItem>
//         ))}
//       </ul>
//     </NavbarContent>

//     <NavbarContent
//       className="hidden sm:flex basis-1/5 sm:basis-full"
//       justify="end"
//     >
//       <NavbarItem className="hidden sm:flex gap-2">
//         <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
//           <TwitterIcon className="text-default-500" />
//         </Link>
//         <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
//           <DiscordIcon className="text-default-500" />
//         </Link>
//         <Link isExternal aria-label="Github" href={siteConfig.links.github}>
//           <GithubIcon className="text-default-500" />
//         </Link>
//         <ThemeSwitch />
//       </NavbarItem>
//       <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
//       <NavbarItem className="hidden md:flex">
//         <Button
//           isExternal
//           as={Link}
//           className="text-sm font-normal text-default-600 bg-default-100"
//           href={siteConfig.links.sponsor}
//           startContent={<HeartFilledIcon className="text-danger" />}
//           variant="flat"
//         >
//           Sponsor
//         </Button>
//       </NavbarItem>
//     </NavbarContent>

//     <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//       <Link isExternal aria-label="Github" href={siteConfig.links.github}>
//         <GithubIcon className="text-default-500" />
//       </Link>
//       <ThemeSwitch />
//       <NavbarMenuToggle />
//     </NavbarContent>

//     <NavbarMenu>
//       {searchInput}
//       <div className="mx-4 mt-2 flex flex-col gap-2">
//         {siteConfig.navMenuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               color={
//                 index === 2
//                   ? "primary"
//                   : index === siteConfig.navMenuItems.length - 1
//                     ? "danger"
//                     : "foreground"
//               }
//               href="#"
//               size="lg"
//             >
//               {item.label}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </div>
//     </NavbarMenu>
//   </NextUINavbar>
// );
