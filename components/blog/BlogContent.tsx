import blogContent from "@/data/blogData";

const BlogContent = () => {
  return (
    <div className="space-y-12">
      {blogContent.map((section, index) => (
        <div key={index}>
          <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
          <p className="text-lg mb-4">{section.description}</p>
          <ul className="list-disc list-inside space-y-2">
            {section.resources.map((resource, idx) => (
              <li key={idx}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
