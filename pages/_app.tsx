import type { AppProps } from 'next/app'
import ApplicationKernel from '../src/ApplicationKernel';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApplicationKernel>
      <Component {...pageProps} />
    </ApplicationKernel>
  );
}

export default MyApp
