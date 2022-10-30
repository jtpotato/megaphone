// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import store from "../components/Store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <Provider store={store}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp;
