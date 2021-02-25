import Head from 'next/head'
import { StyledLayout } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/OpenSans-Regular.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/OpenSans-SemiBold.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/OpenSans-Bold.ttf'
          as='font'
          crossOrigin=''
        />

        <title>Mesofy</title>
      </Head>
      <StyledLayout>
        {children}
        <style jsx global>{`
        @font-face {
          font-family: 'Open Sans';
          src: url('/fonts/OpenSans-Regular.ttf');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'Open Sans';
          src: url('/fonts/OpenSans-SemiBold.ttf');
          font-weight: 500;
          font-style: normal;
        }
        @font-face {
          font-family: 'Open Sans';
          src: url('/fonts/OpenSans-Bold.ttf');
          font-weight: 600;
          font-style: normal;
        }
      `}
        </style>
      </StyledLayout>
    </>
  )
}

export default Layout
