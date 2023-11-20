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
        <div className="flex flex-row justify-between align-middle">
          <h3 className="flex flex-col text-5xl p-5 gap-5">
            <em>{proj_name}</em>
            <h3>{proj_memo}</h3>
          </h3>
          <div>
            <Image src={logo} height={200} width={200} alt="Project Logo" />
          </div>
        </div>
        <div>
          <div>
            {live_link ? (
              <h4>{<Link href={live_link}>Live Link!</Link>}</h4>
            ) : null}
            {GHLink ? <h4>{<Link href={GHLink}>Github Repo</Link>}</h4> : null}
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
