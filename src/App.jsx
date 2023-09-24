import {
  Header,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  Testimonials,
  Newsletter,
  Footer,
} from "./sections";

const App = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default App;
