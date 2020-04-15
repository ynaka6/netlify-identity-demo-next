import { ToastProvider } from 'react-toast-notifications';
import '~/assets/styles/index.css'

function MyApp({ Component, pageProps }) {
  return(
    <ToastProvider
      autoDismiss
      autoDismissTimeout={5000}
      placement="bottom-center"
    >
      <Component {...pageProps} />
    </ToastProvider>
  )
}

export default MyApp
