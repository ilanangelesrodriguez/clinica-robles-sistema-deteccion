import React from 'react'
import { motion } from 'framer-motion'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react"
import { UserIcon } from 'lucide-react'
import { ThemeSwitch } from './theme-switch'

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Doctores", href: "/doctores" },
  { label: "Citas", href: "/citas" },
  { label: "Contacto", href: "/contacto" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-background/70 backdrop-blur-md"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <motion.img
            src="/logo.png"
            alt="Clínica Robles Logo"
            className="h-8 w-8 mr-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <p className="font-bold text-inherit">Clínica Robles</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <motion.img
            src="/logo.png"
            alt="Clínica Robles Logo"
            className="h-8 w-8 mr-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <p className="font-bold text-inherit">Clínica Robles</p>
        </NavbarBrand>
        {navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link color="foreground" href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        
        <NavbarItem>
        <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
         
        </NavbarItem>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button
              isIconOnly
              variant="light"
              aria-label="Menú de usuario"
            >
              <UserIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Opciones de usuario">
            <DropdownItem key="profile">Mi Perfil</DropdownItem>
            <DropdownItem key="appointments">Mis Citas</DropdownItem>
            <DropdownItem key="medical_history">Historial Médico</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Cerrar Sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}