import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  title: string;
  keywords: string;
  description: string;
  children: React.ReactNode;
}

const Layout = ({ title, keywords, description, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "My boiler place next app",
  description:
    "Hi there, the benefit of using this layout boilerplate is to send different head informations accross the entier app",
  keywords: "please, place, some, keywords, here",
};

export default Layout;
