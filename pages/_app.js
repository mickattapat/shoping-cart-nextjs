import Layout from "../components/Layout"
import store from "../store/store"
import { Provider } from "react-redux"
import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
