import { useAtom } from 'jotai'

import { snbAtom } from '@/stores/snb'

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='sticky top-0 z-50 flex justify-end gap-4 bg-white px-3 py-4 shadow-md shadow-zinc-100'>
      {children}
    </header>
  )
}

const HamburgerButton = () => {
  const [, setIsOpenSnb] = useAtom(snbAtom)

  const openSnb = () => {
    setIsOpenSnb(true)
  }

  return (
    <button onClick={openSnb}>
      <i className='ri-menu-line text-xl' />
    </button>
  )
}

Header.HamburgerButton = HamburgerButton

export default Header
