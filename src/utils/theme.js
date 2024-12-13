import {extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    msn: {
      50: "#121B28",
      100: "#707070",
      200: "#062154",
      300: "#3182CE",
    },
  },
  fonts: {
    heading: "Montserrat, poppins",
    body: "poppins, sans-serif",
  },
});

export default theme;
