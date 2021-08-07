import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
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
      <main className="max-w-7xl mx-auto sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item) => (
              <SmallCard image={item.img} distance={item.distance} location={item.location} key={item.img} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          {cardData.map((item) => (
            <MediumCard key={item.img} image={item.img} title={item.image} />
          ))}
        </section>
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
