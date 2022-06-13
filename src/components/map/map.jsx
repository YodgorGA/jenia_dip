import React from 'react';

const Map = (props) => {
    if(props.place === 'ул. Мичурина, 4')
    {
        return (
            <div className="map_container">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.5389762054447!2d46.01039853729162!3d51.530550249667954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c7bd4c1c5299%3A0x553c8085d8bb219d!2z0J7QntCeINCj0LzQutCw0YLRg9GA!5e0!3m2!1sru!2sru!4v1654990894464!5m2!1sru!2sru" 
                width="300" 
                height="225" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

        );
    }
    else{
        return (
            <div className="map_container">
            <iframe title='map'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8973418471983!2d46.00803723518898!3d51.533442714516234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c7b74dbd303b%3A0x319c6f56cd999db6!2z0YPQuy4g0J_Rg9Cz0LDRh9GR0LLQsCDQlS4g0JgsIDgwLCDQodCw0YDQsNGC0L7Qsiwg0KHQsNGA0LDRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCA0MTAwNTY!5e0!3m2!1sru!2sru!4v1654991229157!5m2!1sru!2sru" 
            width="300" 
            height="225" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        );
    }

};

export default Map;