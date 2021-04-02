import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({
    activeTemplateId:"",
    institutionName:"",
    aboutUs:"",
    noOfBed:"",
    icuBed:"",
    pathLab:"",
    trumaFacility:"",
    infectiousDiseaseFacility:"",
    psychiatricFacility:"",
    ambulanceFacility:"",
    websiteAddress:"",
    status:"",
    bannerUrl:"",
    createdOn:"",
    updatedOn:""
  });
  const { id } = useParams();
  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = async () => {
    const res = await axios.get(`http://localhost:8080/profile/${id}`);
    setProfile(res.data);
  };
  return (
    <div className="container py-4">
      
      <h1 className="display-4">Profile Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        
        
        <li className="list-group-item">Active Template Id:{profile.activeTemplateId}</li>
        <li className="list-group-item">Institution Name:{profile.institutionName}</li>   
        <li className="list-group-item">About Us{profile.aboutUs}</li>   
        <li className="list-group-item">No of Beds:{profile.noOfBed}</li>  
        <li className="list-group-item">ICU Beds:{profile.icuBed}</li> 
        <li className="list-group-item">Path Lab:{profile.pathLab}</li> 
        <li className="list-group-item">Truma Facility:{profile.trumaFacility}</li>
        <li className="list-group-item">Infectious Disease Facility:{profile.infectiousDiseaseFacility}</li> 
        <li className="list-group-item">Psychiatric Facility:{profile.psychiatricFacility}</li>
        <li className="list-group-item">Ambulance Facility:{profile.ambulanceFacility}</li>
        <li className="list-group-item">Website Address:{profile.websiteAddress}</li>
        <li className="list-group-item">Status:{profile.status}</li>
        <li className="list-group-item">BannerUrl:{profile.bannerUrl}</li>  
        <li className="list-group-item">Created On:{profile.createdOn}</li>
        <li className="list-group-item">Updated On:{profile.updatedOn}</li>
        
      
    </ul>
    </div>
  );
};

export default Profile;