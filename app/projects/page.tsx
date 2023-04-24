import Image from "next/image";
import Button from "../components/Button";
import pana from "../../public/panaverse tailwind.webp";

const getBlog = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=resumeProject`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Page() {
  const blog = await getBlog();
  return (
    <>
      {/* <h1 className="text-5xl font-bold text-center mt-5">
        Well come to Blog page
      </h1> */}

      <div>
        <ul className=" mt-3  px-5 md:px-16 ">
          {blog.items.map((item: any) => (
            <div
              className="border-2 rounded-md pb-5 m-5 mt-10 md:grid lg:grid-cols-2"
              key={item.sys.id}
            >
              <div>
                <div className="p-5 ">
                  <h2 className="text-2xl md:text-5xl font-bold text-gray-800 hover:text-orange-500    mt-2">
                    {item.fields.projectName}
                  </h2>
                  <h3 className="text-2xl md:text-3xl text-gray-400 font-serif mt-3">
                    {item.fields.projectTitle}
                  </h3>
                </div>
                <div className=" md:grid grid-cols-2">
                  <div className="mt-3">
                    <Button text={"Visit Site"} link={item.fields.siteLink} />
                  </div>
                  <div className="mt-3">
                    <Button
                      text={"View Github"}
                      link={item.fields.githubLink}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={pana}
                  width={1000}
                  height={500}
                  alt="pana"
                  // alt={ele.Alt}
                  className="rounded-md  hover:scale-105 delay-100"
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
