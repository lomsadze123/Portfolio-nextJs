import achievements from "@/data/blog/achievementsData";

const Achievements = () => {
  return (
    <ul className="list-disc list-inside space-y-4">
      {achievements.map((achievement, index) => (
        <li key={index}>
          <a
            href={achievement.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {achievement.title} - {achievement.platform}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Achievements;
