import { Project } from "@/types/types";

const CurrentProject = ({ project }: { project: Project }) => {
  return (
    <main className="max-w-[1250px] mx-auto pt-10 px-6 md:px-0 md:pt-40 text-slate-300 flex flex-col gap-24">
      <div className="bg-slate-900 px-4 py-10 md:px-8 md:py-20 text-lg rounded-2xl border-2 border-slate-800">
        <h1 className="font-bold leading-tight tracking-tight text-slate-300 text-5xl md:text-8xl">
          {project.title}
        </h1>
        <p className="text-xl font-bold text-yellow-400">
          {project.technology}
        </p>
        <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
          {project.date}
        </p>

        <p className="mt-8">{project.introduction}</p>

        {project.sections?.map((section, index) => (
          <div key={index}>
            <h2 className="mt-8 text-3xl md:text-5xl text-white font-bold">
              {section.heading}
            </h2>
            <p className="mt-4">{section.content}</p>
            {section.list && (
              <ul className="list-disc list-inside mt-4 space-y-2">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {section.codeBlock && (
              <pre className="bg-gray-800 text-gray-300 p-4 rounded overflow-hidden text-ellipsis whitespace-nowrap">
                <code>{section.codeBlock}</code>
              </pre>
            )}
          </div>
        ))}

        {project.gettingStarted && (
          <div>
            <h2 className="mt-8 text-5xl text-white font-bold">
              Getting Started
            </h2>
            {project.gettingStarted.map((step, index) => (
              <div key={index}>
                <p className="mt-2">{step.content}</p>
                {step.codeBlock && (
                  <pre className="bg-gray-800 text-gray-300 p-4 rounded overflow-hidden text-ellipsis whitespace-nowrap">
                    <code>{step.codeBlock}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        )}

        {project.technologies && (
          <ul className="list-disc list-inside mt-4 space-y-2">
            <h3 className="mt-8 text-5xl text-white font-bold">Technologies</h3>
            {project.technologies.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default CurrentProject;
