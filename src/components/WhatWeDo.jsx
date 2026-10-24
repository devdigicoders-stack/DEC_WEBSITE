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
    title: 'Offices – Corporate & Workplaces',
    subtitle: 'Amazon, Boeing, BlackRock, Snoonu HQ',
    image: '/image copy 13.png',
    icon: FaRegBuilding,
    link: '/sector/offices',
  },
  {
    id: 'retail',
    title: 'Retail – Luxury & Commercial',
    subtitle: 'DIOR, Armani Casa, Place Vendome, DFC',
    image: '/images/sectors/retail.jpg',
    icon: FaBagShopping,
    link: '/sector/retail',
  },
  {
    id: 'hospitality',
    title: 'Hospitality – Hotels & Resorts',
    subtitle: 'Retaj Hotel, Sealine Center, Marasi Resort',
    image: '/image copy 6.png',
    icon: FaHotel,
    link: '/sector/hospitality',
  },
  {
    id: 'fnb',
    title: 'F&B – Food & Beverage',
    subtitle: 'Pickl, L’ETO, Juno, Fine Dining Cafes',
    image: '/images/sectors/fnb.jpg',
    icon: FaUtensils,
    link: '/sector/fnb',
  },
  {
    id: 'residential',
    title: 'Residential – High-End Residential',
    subtitle: 'Huzoom Lusail Private Villas & Riyadh Estates',
    image: '/images/sectors/residential.jpg',
    icon: FaHouseChimney,
    link: '/sector/residential',
  },
  {
    id: 'industrial',
    title: 'Industrial – Manufacturing & Logistics',
    subtitle: 'DOPET Factories, Workshops & Manateq Plants',
    image: '/image copy 7.png',
    icon: FaIndustry,
    link: '/sector/industrial',
  },
  {
    id: 'medical',
    title: 'Medical – Healthcare & Pharma',
    subtitle: 'Benha University Surgical Wing, Pharma Labs',
    image: '/image copy 7.png',
    icon: FaRegBuilding,
    link: '/sector/medical',
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
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-3">
              <FaRegBuilding className="text-sm shrink-0" />
              <span>CORE MARKET SECTORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#151515]">
              What We Do
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

                {/* Ambient Dark Gradient Overlays for Readability (Darker at Bottom) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent group-hover:from-black/95 group-hover:via-black/55 transition-colors duration-500" />

                {/* Content Overlay Positioned at Darker Bottom Area */}
                <div className="relative z-10 w-full h-full p-6 sm:p-8 flex flex-col items-center justify-end text-center pb-8 sm:pb-10">
                  
                  {/* Sector Icon */}
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-3.5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#B08D57] group-hover:border-[#B08D57] shadow-lg">
                    <Icon className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                  </div>

                  {/* Sector Title (Project Type) */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md group-hover:text-[#F5F0E7] transition-colors">
                    {sector.title}
                  </h3>

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
