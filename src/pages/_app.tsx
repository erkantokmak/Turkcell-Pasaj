import "@/styles/globals.css";
import { dehydrate, HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";

import { GlobalStyles } from "@/styles/Global";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@smastrom/react-rating/style.css'
import { SessionProvider } from "next-auth/react";
import Breadcumb from "@/components/Header/Breadcumb";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderIndex from "@/components/Header";
import FooterIndex from "@/components/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ToastContainer />
          <GlobalStyles />
          <HeaderIndex />
          <Breadcumb />
          <Component {...pageProps} />
          <FooterIndex />
        </HydrationBoundary>
      </QueryClientProvider >
    </SessionProvider>
  );
}
