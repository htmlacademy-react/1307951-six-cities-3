import { useRef, useEffect } from 'react';
import { useMap } from '../../hooks/use-map';
import leaflet, { LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT, MapCityType, OfferType } from '../const';

type MapType = {
  city: MapCityType;
  offers: OfferType[];
  activeOfferId?: string | null;
  onMarkerHover?: (activeOffer: OfferType | undefined) => void ;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


const Map = ({ city, offers, activeOfferId, onMarkerHover }: MapType): JSX.Element => {

  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap({ mapRef, city });

  const handleMouseOver = (e: LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;

    const activeOffer = offers.find((offer) =>
      lat === offer.city.location.latitude &&
      lng === offer.city.location.longitude);

    activeOfferId = activeOffer?.id;
    onMarkerHover?.(activeOffer);
  };

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: activeOfferId === offer.id ? activeCustomIcon : defaultCustomIcon,
          })
          .addTo(map).on('mouseover', handleMouseOver);

      });
    }
  }, [activeOfferId]);

  return (
    <section
      className='cities__map map'
      ref={mapRef}
    />
  );
};

export { Map };
