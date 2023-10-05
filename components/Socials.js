// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.youtube.com/channel/UCdXKvZmgrU3sWxtYEOKNBVg'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/cristian-s-b03951219/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinFill />
      </Link>
      <Link href={'https://github.com/Cristian-sanchez14'} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
      <Link href={'https://twitter.com/Cristian_14715'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterFill />
      </Link>
    </div>
  );
};

export default Socials;
