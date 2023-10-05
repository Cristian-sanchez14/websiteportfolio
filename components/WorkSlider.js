// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'E-Store',
          path: '/e-store-photo.png',
          link: 'https://cs-e-commerce.netlify.app/',
          codeURL: 'https://github.com/Cristian-sanchez14/ecommerce-store',
        },
        {
          title: 'Netflex Clone',
          path: '/2.png',
          link: 'https://netflix-reactjs-cristian.netlify.app/',
          codeURL: 'https://github.com/Cristian-sanchez14/netflix-clone-react',
        },
        {
          title: '3d Portfolio Website',
          path: '/3.png',
          link: 'https://cristiantemplatewebsit.netlify.app/',
          codeURL: 'https://github.com/Cristian-sanchez14/cristian_3dwebsite',
        },
        {
          title: '3d- Shirt Design',
          path: '/4.png',
          link: 'https://3dshirtsanhcez.netlify.app/',
          codeURL: 'https://github.com/Cristian-sanchez14/3dshirt_website',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import code icon 
import {
  RiGithubFill,
} from 'react-icons/ri';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// next link
import Link from 'next/link';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[500px]'
    > 
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-5 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                  >
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt='' herf={image.link} />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <Link href={`${image.link}`} passHref={true} target="_blank">
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              {/* title part 1 */}
                              <div className='delay-100'>LIVE</div>
                              {/* title part 2 */}
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                {image.title}
                              </div>
                              {/* icon */}
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                <BsArrowRight />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="pl-3">
                        <Link href={`${image.codeURL}`}>
                          <RiGithubFill size={25} />
                        </Link>
                      </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;