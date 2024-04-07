import { store } from "@/redux/store";
import "@/styles/globals.css";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
const LayoutTheme = dynamic(() => import("../components/layout"), {
  ssr: false,
});
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LayoutTheme>
        <Component {...pageProps} />
      </LayoutTheme>
    </Provider>
  );
}
