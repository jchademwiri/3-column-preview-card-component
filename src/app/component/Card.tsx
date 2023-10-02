import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type TCard = {
  picture: {
    icon: StaticImageData;
    alt: string;
  };
  title: string;
  desc: string;
  link: {
    href: string;
    name: string;
  };
  bgColor: string;
  textColor: string;
  rounded?: string;
};

const Card = ({
  picture,
  title,
  desc,
  link,
  bgColor,
  textColor,
  rounded,
}: TCard) => {
  return (
    <div
      className={`px-6 min-h-[400px] py-10 justify-between flex flex-col text-transparentWhite ${bgColor} ${rounded}`}
    >
      <Image src={picture.icon} alt={picture.alt} />
      <h2 className='uppercase font-bold text-2xl'>{title}</h2>
      <p className=' '>{desc}</p>
      <Link
        href={link.href}
        className={`bg-veryLightGray h-10 border hover:bg-transparent px-5 font-medium py-2 hover:text-transparentWhite w-fit text-center rounded-full ${textColor}`}
      >
        {link.name}
      </Link>
    </div>
  );
};
export default Card;
