import React from "react";
import ThemeProvider from "~/components/theme-provider";
import Container from "./container";
import Header from "./header";

const QuoteLayout: React.FC = () => {
  return (
    <ThemeProvider>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
};

export default QuoteLayout;
