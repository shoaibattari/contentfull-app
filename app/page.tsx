const getBlog = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`,
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
      <h1 className="text-5xl font-bold text-center mt-5">
        Well come to Blog page
      </h1>

      <div>
        <ul className="grid grid-cols-4 mt-3 px-16 ">
          {blog.items.map((item: any) => (
            <li
              key={item.sys.id}
              className=" text-5xl font-serif text-center text-orange-700 mt-3 bg-gray-300 rounded-2xl p-5 w-[250px] uppercase"
            >
              {item.fields.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
