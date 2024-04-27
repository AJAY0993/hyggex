import Breadcrumb from "./components/Breadcrumb";
import Container from "./components/Container";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Container>
        <Header />
        <Breadcrumb />
        <Heading />
        <Main />
        <Footer />
        <Faq />
      </Container>
    </>
  );
}
