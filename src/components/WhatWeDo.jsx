import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { 
  FaRegBuilding, 
  FaBagShopping, 
  FaHotel, 
  FaUtensils, 
  FaHouseChimney, 
  FaIndustry 
} from 'react-icons/fa6'

const sectors = [
  {
    id: 'offices',
    title: 'Corporate & Workplaces',
    subtitle: 'Amazon, Boeing, BlackRock, Snoonu HQ',
    image: '/images/sectors/offices.jpg',
    icon: FaRegBuilding,
    link: '/sector/offices',
  },
  {
    id: 'retail',
    title: 'Retail & Luxury Commercial',
    subtitle: 'DIOR, Armani Casa, Place Vendome, DFC',
    image: '/images/sectors/retail.jpg',
    icon: FaBagShopping,
    link: '/sector/retail',
  },
  {
    id: 'hospitality',
    title: 'Hotels & Hospitality',
    subtitle: 'Retaj Hotel, Sealine Center, Marasi Resort',
    image: '/images/sectors/hospitality.jpg',
    icon: FaHotel,
    link: '/sector/hospitality',
  },
  {
    id: 'fnb',
    title: 'Food & Beverage (F&B)',
    subtitle: 'Pickl, L’ETO, Juno, Fine Dining Cafes',
    image: '/images/sectors/fnb.jpg',
    icon: FaUtensils,
    link: '/sector/fnb',
  },
  {
    id: 'residential',
    title: 'High-End Residential',
    subtitle: 'Huzoom Lusail Private Villas & Riyadh Estates',
    image: '/images/sectors/residential.jpg',
    icon: FaHouseChimney,
    link: '/sector/residential',
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing',
    subtitle: 'DOPET Factories, Workshops & Pharma Plants',
    image: '/images/sectors/industrial.jpg',
    icon: FaIndustry,
    link: '/sector/industrial',
  },
]

function WhatWeDo() {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="bg-white text-[#151515] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10 overflow-hidden font-sans">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Header Bar with Title & Carousel Arrows */}
        <div className="flex items-center justify-between mb-7 sm:mb-9">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#151515]">
              What we do
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#151515] text-white hover:bg-[#B08D57] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#151515] text-white hover:bg-[#B08D57] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-14 lg:px-14 xl:-mx-20 xl:px-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sectors.map((sector) => {
            const Icon = sector.icon
            return (
              <Link
                key={sector.id}
                to={sector.link}
                className="group relative flex-shrink-0 w-[270px] sm:w-[310px] md:w-[330px] h-[400px] sm:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block"
              >
                {/* Background Architectural Image */}
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Ambient Dark Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 group-hover:from-black/90 group-hover:via-black/45 transition-colors duration-500" />

                {/* Content Overlay Centered */}
                <div className="relative z-10 w-full h-full p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                  
                  {/* Sector Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#B08D57] group-hover:border-[#B08D57]">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Sector Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md group-hover:text-[#F5F0E7] transition-colors">
                    {sector.title}
                  </h3>

                  {/* Supporting subtitle */}
                  <p className="text-xs sm:text-sm text-white/70 mt-2 font-normal line-clamp-2 max-w-[240px]">
                    {sector.subtitle}
                  </p>

                </div>

                {/* Subtle Gold Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B08D57] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default WhatWeDo
