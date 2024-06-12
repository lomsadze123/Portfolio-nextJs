export interface AchievementsTypes {
  title: string;
  job: string;
  time: string;
  review: string;
  place: string;
}

const Achievements = ({
  title,
  job,
  time,
  place,
  review,
}: AchievementsTypes) => {
  return (
    <div className="max-w-[1250px] mx-auto mt-24 font-bold leading-tight tracking-tight text-slate-300 text-3xl md:text-4xl">
      <h3 className="text-6xl md:text-8xl">{title}</h3>
      <div className="pl-8 md:pl-12 mt-16">
        <h4>{job}</h4>
        <h5 className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
          {time} <span className="text-3xl font-extralight">/</span> {place}
        </h5>
        <p className="text-lg max-w-[585px] leading-8 tracking-normal font-normal mt-4">
          {review}
        </p>
      </div>
    </div>
  );
};

export default Achievements;
