import Head from 'next/head'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import LargeCard from '../Components/LargeCard';
import MediumCard from '../Components/MediumCard';
import SmallCard from '../Components/SmallCard';

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Air Bnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-4 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData && exploreData.map((item) => (
              <SmallCard image={item.img} distance={item.distance} location={item.location} key={item.img} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData && cardData.map(({ img, title }) => (
              <MediumCard key={img} image={img} title={title} />
            ))}
          </div>
        </section>

        <section>
          <LargeCard
            img="http://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Isnpired"
          />
        </section>
        <Footer />
      </main>
    </div>
  )
};

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then(
      (res) => res.json()
    );

  const cardData = await fetch("https://links.papareact.com/zp1")
    .then(
      (res) => res.json()
    );
  return {
    props: {
      exploreData,
      cardData,
    }
  }
}
