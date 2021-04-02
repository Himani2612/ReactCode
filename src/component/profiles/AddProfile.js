import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddProfile = () => {
  let history = useHistory();
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

  const {activeTemplateId, institutionName,aboutUs,noOfBed,icuBed,pathLab,trumaFacility, infectiousDiseaseFacility,psychiatricFacility,ambulanceFacility,websiteAddress,status,bannerUrl,createdOn,updatedOn} = profile;
  const onInputChange = e => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/profilev1", profile);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Profile</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Active Template Id"
              name="activeTemplateId"
              value={activeTemplateId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Institution Name"
              name="institutionName"
              value={institutionName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="About Us"
              name="aboutUs"
              value={aboutUs}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="No of Beds"
              name="noOfBed"
              value={noOfBed}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ICU Beds"
              name="icuBed"
              value={icuBed}
              onChange={e => onInputChange(e)}
            />
            <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Path Lab"
              name="pathLab"
              value={pathLab}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="TrumaFacility"
              name="trumaFacility"
              value={trumaFacility}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="InfectiousDiseaseFacility"
              name="infectiousDiseaseFacility"
              value={infectiousDiseaseFacility}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="PsychiatricFacility"
              name="psychiatricFacility"
              value={psychiatricFacility}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="AmbulanceFacility"
              name="ambulanceFacility"
              value={ambulanceFacility}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="WebsiteAddress"
              name="websiteAddress"
              value={websiteAddress}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Status"
              name="status"
              value={status}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="BannerUrl"
              name="bannerUrl"
              value={bannerUrl}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          </div>
          <button className="btn btn-primary btn-block">Add Profile</button>
        </form>
      </div>
    </div>
  );
};

export default AddProfile;