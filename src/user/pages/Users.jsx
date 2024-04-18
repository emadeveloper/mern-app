import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Emmanuel Martinez",
      places: 3,
      image:
        "https://media.istockphoto.com/id/1059344876/es/foto/vacaciones-turismo-relax-en-hotel-de-playa-cerca-de-lujo-piscina.jpg?s=1024x1024&w=is&k=20&c=NZzbaCJOxD5DiTAlgcNjNUxfFRxoRTn1AW_xkKulAnM=",
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
