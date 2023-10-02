import Image from 'next/image';
import Card from './component/Card';
import { luxuryIcon, sedansIcon, suvsIcon } from './data/images';

export default function Home() {
  const sedanPicture = {
    icon: sedansIcon, // Assuming sedansIcon is your image source
    alt: 'Sedans Icon',
  };

  const sedanLink = {
    href: '/', // Specify the actual href
    name: 'Learn More', // Specify the link text
  };

  const suvPicture = {
    icon: suvsIcon, // Assuming sedansIcon is your image source
    alt: 'SUV Icon',
  };

  const suvLink = {
    href: '/', // Specify the actual href
    name: 'Learn More', // Specify the link text
  };

  const luxuryPicture = {
    icon: luxuryIcon, // Assuming sedansIcon is your image source
    alt: 'Luxury Icon',
  };

  const luxuryLink = {
    href: '/', // Specify the actual href
    name: 'Learn More', // Specify the link text
  };

  return (
    <main className='flex flex-col py-4 min-h-screen items-center justify-center bg-veryLightGray'>
      <section className='grid md:grid-cols-3 my-10 w-[90%] lg:w-[70%] mx-auto '>
        <Card
          picture={sedanPicture}
          title='Sedans'
          desc='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip.'
          link={sedanLink}
          bgColor='bg-brightOrange'
          textColor='text-brightOrange'
          rounded='rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg'
        />

        <Card
          picture={suvPicture}
          title='Suvs'
          desc=' Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
          and off-road adventures.'
          link={suvLink}
          bgColor='bg-darkCyan'
          textColor='text-darkCyan'
        />

        <Card
          picture={luxuryPicture}
          title='Luxury'
          desc='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
          rental and arrive in style.'
          link={luxuryLink}
          bgColor='bg-veryDarkCyan'
          textColor='text-veryDarkCyan'
          rounded='rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-tr-lg'
        />
      </section>
    </main>
  );
}
