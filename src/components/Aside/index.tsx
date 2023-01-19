import React, { useState } from 'react'

import logoImg from '../../assets/logo.svg'

import Toggle from '../Toggle'

import { useAuth } from '../../hooks/auth'
import { useTheme } from '../../hooks/theme'

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from 'react-icons/md'

import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  ToggleMenu,
  ToggleThemeFooter,
} from './styles'

const Aside: React.FC = () => {
  const { signOut } = useAuth()
  const { toggleTheme, theme } = useTheme()

  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const [darkTheme, setDarkTheme] = useState(() => (theme.title === 'dark' ? true : false))

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }

  return (
    <>
      <Container menuIsOpen={toggleMenu}>
        <Header>
          <ToggleMenu onClick={handleToggleMenu}>
            {toggleMenu ? <MdClose /> : <MdMenu />}
          </ToggleMenu>

          <LogoImg src={logoImg} alt="Logo My Wallet" />
          <Title>Minha Carteira</Title>
        </Header>

        <MenuContainer>
          <MenuItemLink href="/">
            <MdDashboard />
            Dashboard
          </MenuItemLink>

          <MenuItemLink href="/list/entries">
            <MdArrowUpward />
            Entradas
          </MenuItemLink>

          <MenuItemLink href="/list/output">
            <MdArrowDownward />
            Saídas
          </MenuItemLink>

          <MenuItemButton onClick={signOut}>
            <MdExitToApp />
            Sair
          </MenuItemButton>
        </MenuContainer>

        <ToggleThemeFooter menuIsOpen={toggleMenu}>
          <Toggle
            labelLeft="Light"
            labelRight="Dark"
            checked={darkTheme}
            onChange={handleChangeTheme}
          />
        </ToggleThemeFooter>
      </Container>
    </>
  )
}

export default Aside
