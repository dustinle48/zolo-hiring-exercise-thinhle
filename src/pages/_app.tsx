import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";
import type { AppProps } from "next/app";
import MainLayout from "../components/layout/MainLayout";

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MantineProvider>
  );
}
