import Header from '@/components/shared/Header'
import SNB from '@/components/shared/SNB'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='mx-auto max-w-3xl'>
      {/* <Header>
        <Header.HamburgerButton />
      </Header> */}
      <SNB />
      {children}
    </section>
  )
}

export default Layout
