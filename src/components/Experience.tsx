import React from "react";
import Collab from "../assets/collab.jpg";
import TopImg from "../assets/topimage.png";

const Experience = () => {
  return (
    <div className="p-10">
      <div className="font-bold text-4xl mx-2 p-3 text-center">
        <h1>Work Experience</h1>
      </div>
      <div>
        {/* 1st card */}
        <div className=" my-5 card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
          <div className="w-full flex-1 ">
            <img src={Collab} alt="collab lab" className="pb-3" />
          </div>
          <div className=" flex-1">
            <div>
              <h2 className="card-title text-2xl">The Collab Lab</h2>
              <small>Frontend Developer Intern</small>
            </div>

            <ul className="list-disc">
              <li>Built user interfaces using React js and Tailwind CSS.</li>
              <li>Managed authentication and business logic using Firebase.</li>
              <li>Used agile methodologies in weekly sprints.</li>
              <li>
                Used git to manage workflows, created issues, PRs and did code
                reviews for fellow devs.
              </li>
            </ul>
          </div>
        </div>
        {/* {2nd card} */}
        <div className=" my-5 card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
          <div className="w-full flex-1">
            <img src={TopImg} alt="top image" className="w-[80%] pb-3" />
          </div>
          <div className=" flex-1">
            <div>
              <h2 className="card-title text-2xl">Top Image Africa</h2>
              <small>Lead Safaricom Brand Ambassador</small>
            </div>

            <ul className="list-disc">
              <li>
                Partner Education on products like Fuliza, Lipa na Mpesa, Pochi
                la Biashara etc.
              </li>
              <li>
                Led the Bumala cluster team that was responsible for rolling out
                Lipa mdogo mdogo devices that customers could acquire on credit.{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="my-5 card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
          <div className="w-full ">
            <img className="w-[80%]" src={TopImg} alt="top image" />
          </div>
          <div className="card-body">
            <div>
              <h2 className="card-title text-2xl">Top Image Africa</h2>
              <small>Lead Safaricom Brand Ambassador</small>
            </div>

            <ul className="list-disc">
              <li>
                Partner Education on products like Fuliza, Lipa na Mpesa, Pochi
                la Biashara etc.
              </li>
              <li>
                Led the Bumala cluster team that was responsible for rolling out
                Lipa mdogo mdogo devices that customers could acquire on credit.{" "}
              </li>
            </ul>
          </div>
        </div> */}
        {/* 2nd card */}
      </div>
    </div>
  );
};

export default Experience;
