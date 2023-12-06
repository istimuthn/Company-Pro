"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const OurTeams = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=9&inc=name,email,phone,location,picture"
        );
        const usersWithRoles = response.data.results.map((user, index) => {
          let role = "Tour Guide";
          if (index % 3 === 1) {
            role = "Web Development";
          } else if (index % 3 === 2) {
            role = "Admin";
          }
          return { ...user, role };
        });

        setUsers(usersWithRoles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Connect with Our Team
        </h2>
        <p className="text-center mb-4">
          our exceptional team of dedicated professionals. Comprising diverse
          talents and unique perspectives, <br />
          our team is the driving force behind our success. Get to know the
          individuals who bring passion, <br /> expertise, and innovation to
          every aspect of our organization:
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {users.slice(0, 3).map((user, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center mb-4"
            >
              <img
                src={user.picture.medium}
                alt={`${user.name.first} ${user.name.last}`}
                className="object-fill w-24 h-24 rounded-full mb-4"
              />
              <p className="text-lg font-semibold">{`${user.name.first} ${user.name.last}`}</p>
              <p className="text-center text-gray-600 mb-4">{user.phone}</p>
              <p className="text-center text-gray-600 mb-2">{user.email}</p>
              <p className="text-sm text-gray-500">{`${user.location.city}, ${user.location.country}`}</p>
              <p className="text-sm text-gray-500 mt-2">{`Role: ${user.role}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
