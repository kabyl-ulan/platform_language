import React from "react";

//local
import { Footer, Header, WhatsappIcon } from "../components";

type ComponentProps = {
  children: React.ReactNode;
};

class LayoutPages extends React.Component<ComponentProps> {
  render(): React.ReactNode {
    const { children } = this.props;
    return (
      <>
        <Header />
        <main className="main">{children}</main>
        <WhatsappIcon />
        <Footer />
      </>
    );
  }
}

export default LayoutPages;
