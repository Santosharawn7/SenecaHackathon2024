import React from "react";
import SocialMediaIcons from "../SocialMedia/socialMedia";

export default function SocialMediaSection() {
  return (
    <>
      <div className="page-content md:text-center">
        <h2 className="md:text-center md:text-5xl font-gotham">
          <strong>Our Social Media</strong>
        </h2>
        <p className="w-full mx-auto sm:w-10/12 lg:w-1/2">
          Follow us on our social media platforms for all the latest updates on
          the Housing 2024 Hackathon.
        </p>
        <div className="red-background mb-10 curved-border mx-auto">
          <SocialMediaIcons />
        </div>
        <h2 className="md:text-center md:text-5xl font-gotham">
          <strong>Our Location</strong>
        </h2>
        <iframe
          className="w-full h-96 rounded-3xl pb-4"
          src="https://maps.google.com/maps?q=Seneca College Newnham Campus, Finch, Seneca Hill,
                      Toronto, ON M2J 5G3&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
