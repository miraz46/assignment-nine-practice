// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// React Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Hero = () => {
    
    return (
        <div>
            <Swiper className='h-[60vh]'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src="https://i.ibb.co.com/c6YrXyg/austin-ramsey-Ah-M0y-Bu-W1-I-unsplash.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/SQK1kzm/daniil-silantev-MWGa-Ml-ETWg-Q-unsplash.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/TYbTfvc/marek-piwnicki-IOn-Wk-Cab-L6-Q-unsplash.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/Ybg3kLF/silas-schneider-O2a1ms-Jpd-Lo-unsplash.jpg" alt="" /></SwiperSlide>
                ...
            </Swiper>



            <div style={{ height: '500px', width: '80%' , margin: 'auto', marginTop: '50px'}}>
                {/* MapContainer is the main wrapper */}
                <MapContainer
                    center={[23.8041, 90.4152]} // Initial center of the map
                    zoom={13} // Zoom level
                    style={{ height: '100%', width: '100%' }}
                >
                    {/* TileLayer provides map tiles */}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {/* Marker and Popup */}
                    <Marker position={[23.8041, 90.4152]}>
                        <Popup>
                            A simple popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Hero;