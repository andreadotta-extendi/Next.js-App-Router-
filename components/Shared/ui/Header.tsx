"use client";
import {
  ExpandMoreRounded,
  LogoutRounded,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

type HeaderProps = {
  isLogged?: boolean;
};

const Header: React.FC<HeaderProps> = ({ isLogged }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>("");
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { pathname } = window.location;
      setCurrentPath(pathname);
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileClose = () => {
    setMobileMenuOpen(false);
  };

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const links = [
    { href: "/catalog", label: "Catalogo" },
    { href: "/prezzi", label: "Prezzi" },
    { href: "/insegnanti", label: "Insegnanti" },
    { href: "/percorsi", label: "Percorsi" },
    { href: "/aiuto", label: "Aiuto" },
  ];

  const userAvatar = {
    src: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=3265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mario",
  };

  return (
    <>
      <div className="hidden md:block">
        <header className="flex justify-between items-center px-8 py-6 gap-x-4 w-full bg-paper z-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4b7ead5bbd68b16be08f000a11d8756e4f91099498b58d4c478b1b6ba608ac8?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438"
            alt="Vibly"
            className="w-[152px]"
          />
          <div className="flex gap-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                underline="none"
                color={currentPath === link.href ? "primary" : "contrastText"}
                variant="button-l"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            {isLogged ? (
              <div className="flex items-center gap-x-4">
                <Typography variant="body-400">{userAvatar.name}</Typography>
                <Avatar
                  sizes="large"
                  alt={userAvatar.name}
                  src={userAvatar.src}
                  sx={{ border: "1px solid #FF6043" }}
                />
                <div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <ExpandMoreRounded className="text-white" />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              </div>
            ) : (
              <div className="flex gap-x-4">
                <Button size="small" variant="outlined" color="primary">
                  <Typography variant="button-m">Accedi</Typography>
                </Button>
                <Button size="small" variant="contained" color="primary">
                  <Typography variant="button-m">Iscriviti</Typography>
                </Button>
              </div>
            )}
          </div>
        </header>
      </div>
      <div className="md:hidden">
        <AppBar position="fixed" className="h-[60px]">
          <Toolbar className="flex justify-between items-center">
            <img
              loading="lazy"
              src="assets/logo.png"
              alt="Vibly"
              className="h-[35px] w-auto"
            />
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={handleMobileClick}
            >
              <MenuIcon className="text-text-primary" />
            </IconButton>
            {mobileMenuOpen && (
              <Paper
                square={true}
                className="fixed top-[60px] left-0 w-full h-full"
              >
                <div className="flex flex-col h-full pb-[60px] px-2">
                  <MenuList className="w-full pt-6 space-y-2 flex-grow overflow-auto">
                    {links.map((link) => (
                      <MenuItem>
                        <Link
                          key={link.href}
                          underline="none"
                          color={
                            currentPath === link.href
                              ? "primary"
                              : "contrastText"
                          }
                          variant="button-l"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuList>
                  {isLogged ? (
                    <div className="px-4 py-6 flex flex-col gap-4">
                      <Button variant="outlined" color="primary" size="medium">
                        <Typography variant="button-m">Login</Typography>
                      </Button>
                      <Button variant="contained" color="primary" size="medium">
                        <Typography variant="button-m">Sign Up</Typography>
                      </Button>
                    </div>
                  ) : (
                    <div className="px-4 py-6">
                      <div className="rounded-lg bg-background flex gap-4 pl-4 pr-2 py-2 justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar
                            sizes="large"
                            alt={userAvatar.name}
                            src={userAvatar.src}
                            sx={{ height: "40px" }}
                          />
                          <Typography variant="body-400">
                            {userAvatar.name}
                          </Typography>
                        </div>
                        <IconButton edge="start" aria-label="menu" size="large">
                          <LogoutRounded
                            sx={{ height: "18px", width: "18px" }}
                          />
                        </IconButton>
                      </div>
                    </div>
                  )}
                </div>
              </Paper>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
