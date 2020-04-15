import Link from 'next/link';
import { useToasts } from 'react-toast-notifications';
import Logo from '~/assets/img/logo.svg'
import Button from '~/components/button.js'
import Footer from './footer.js'

const DefaultLayout = props => {
  const { addToast } = useToasts()
  return (
    <div className="flex flex-col">
      <div className="wrap-parent min-h-screen flex flex-col">
        <div className="flex flex-grow">
          <div className="w-full overflow-hidden py-4">
            <div className="max-w-3xl mx-auto p-2">
              <div className="flex flex-col items-center lg:flex-row">
                <Logo className="w-20 h-20 lg:mr-10" />
                <div className="mt-4 lg:mt-0">
                  <h2
                    className="text-center text-xl text-gray-700 lg:text-left lg:text-2xl"
                  >
                    Netlify identity × Next.js
                  </h2>
                  <h1
                    className="text-center text-3xl text-gray-800 lg:text-left lg:text-6xl"
                  >
                    Auth widget demo
                  </h1>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Button className="mr-2 lg:w-1/2 lg:ml-10" onClick={() => addToast('login', { appearance: 'success' })}>
                  Login
                </Button>
                <Button className="lg:w-1/2 lg:mr-10" onClick={() => addToast('Signup', { appearance: 'success' })}>
                  Sign up
                </Button>
              </div>
              <div className="flex justify-center mt-10">
                <Link href="/">
                  <a className="link mr-2">Home</a>
                </Link>
                <Link href="/secured">
                  <a className="link">Secure page</a>
                </Link>
              </div>
            </div>
            {props.children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout;