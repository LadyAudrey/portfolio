import Image from "next/image";
import Link from "next/link";

export default function Project(props: any) {

  const {
    proj_name,
    proj_memo,
    GHLink,
    live_link,
    logo,
    attributes,
    proj_link,
    TandT,
    role,
    timeline,
    goals,
    challenges,
  } = props;
  return (
    <>
      <div className="w-full">
        <div className="fleax flex-row justify-between align-middle">
          <h3 className="text-5xl pt-5">{proj_name}</h3>
          <div>
            <Image src={logo} height={100} width={100} alt="Project Logo" />
          </div>
        </div>
        <h3>{proj_memo}</h3>
        <div>
          <div>
            {/* switch to Link */}
            <h4>Live Link!</h4>
            <p>{proj_link}</p>
          </div>
        </div>
        <div className="project_item">
          <h4>Attributes</h4>
          <p>{attributes}</p>
        </div>
        <div className="project_item">
          <h4>Technologies and Techniques</h4>
          <p>{TandT}</p>
        </div>
        <div className="project_item">
          <h4>My Role</h4>
          <p>{role}</p>
        </div>
        <div className="project_item">
          <h4>Timeline</h4>
          <p>{timeline}</p>
        </div>
        <div>
          <h4 className="project_item">Goals and Objectives</h4>
          <p>{goals}</p>
        </div>
        <div className="project_item">
          <h4>Challenges</h4>
          <p>{challenges}</p>
        </div>
      </div>
    </>
  );
}
