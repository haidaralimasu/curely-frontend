import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Image,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CurelyButton as Button } from "../../lib/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Talk to an Expert", path: "/talk-to-expert" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image height="36" width="36" src={logo} alt="curely logo" />
          <p className="font-bold text-inherit">Curely</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image
            className="mr-1"
            height="36"
            width="36"
            src={logo}
            alt="curely logo"
          />
          <p className="font-bold text-inherit">Curely</p>
        </NavbarBrand>

        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className={`${
                item.path == path ? "text-green-800 font-bold" : "font-semibold"
              }`}
              color="foreground"
              to={item.path}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="font-bold text-green-800"
            as={Link}
            color="curely_green"
            to="/sign-up"
            variant="bordered"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={`${
                item.path == path
                  ? "w-full font-bold text-green-800"
                  : " w-full font-demibold"
              }`}
              to={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
