import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>Hello</Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
