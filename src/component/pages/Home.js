import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [profiles, setProfile] = useState([]);

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    const result = await axios.get("http://localhost:8080/profile");
    setProfile(result.data.reverse());
  };

  const deleteProfile = async id => {
    await axios.delete(`http://localhost:8080/profilev1/${id}`);
    loadProfiles();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Active Template Id</th>
              <th scope="col">Institution Name</th>
              <th scope="col">About Us</th>
              <th scope="col">No of Beds</th>
              <th scope="col">ICU Beds</th>
              <th scope="col">Path Lab</th>
              <th scope="col">TrumaFacility</th>
              <th scope="col">InfectiousDiseaseFacility</th>
              <th scope="col">PsychiatricFacility</th>
              <th scope="col">AmbulanceFacility</th>
              <th scope="col">WebsiteAddress</th>
              <th scope="col">Status</th>
              <th scope="col">BannerUrl</th>
              <th scope="col">Created On</th>
              <th scope="col">Update On</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{profile.activeTemplateId}</td>
                <td>{profile.institutionName}</td>
                <td>{profile.aboutUs}</td>
                <td>{profile.noOfBed}</td>
                <td>{profile.icuBed}</td>
                <td>{profile.pathLab}</td>
                <td>{profile.trumaFacility}</td>
                <td>{profile.infectiousDiseaseFacility}</td>
                <td>{profile.psychiatricFacility}</td>
                <td>{profile.ambulanceFacility}</td>
                <td>{profile.websiteAddress}</td>
                <td>{profile.status}</td>
                <td>{profile.bannerUrl}</td>
                <td>{profile.createdOn}</td>
                <td>{profile.updatedOn}</td>
                
                <td>
                  <Link class="btn btn-primary mr-2" to={`/profiles/${profile.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/profiles/edit/${profile.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteProfile(profile.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;