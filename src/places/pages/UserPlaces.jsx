import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Roma, Italia, Coliseum",
    description: "One of the most impressive places in the world!",
    imageUrl:
      "https://www.pexels.com/photo/photo-of-coliseum-under-blue-sky-2678456/",
    address: "Piazza del Colosseo, 1, 00184 Roma RM, Italia",
    coordinates: {
      lat: 41.8902102,
      lng: 12.4922309,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Roma, Italia, Coliseum",
    description: "One of the most impressive places in the world!",
    imageUrl:
      "https://www.istockphoto.com/es/foto/colosseum-in-rome-italy-y-sol-de-la-ma%C3%B1ana-gm539115110-96048731?searchscope=image%2Cfilm",
    address: "Piazza del Colosseo, 1, 00184 Roma RM, Italia",
    location: {
      lat: 41.8902102,
      lng: 12.4922309,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
