"use client";

import React from "react"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Button, Avatar, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu} from "@nextui-org/react"
import { FaSearch } from "react-icons/fa";

export function TopNavbar() {
  return (
    <Navbar position="static" className="bg-gray-900" maxWidth="full">
      <NavbarContent justify="start">
        <NavbarBrand className="text-3xl">
          <p>🐲<b className="outline-white">Hoardr</b></p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="w-full">
        <NavbarItem className="w-5/12">
          <Input classNames={{
              base: "max-w-full h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full",
            }}
            startContent={<FaSearch />}
            placeholder="Search..."
            size="md"
            type="search"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
            as="button"
            className="transition-transform"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" size="md" />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p>Signed in as</p>
              <p>KittyCat@meowmeow.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="hoard">My Hoard</DropdownItem>
            <DropdownItem key="logout">Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
};