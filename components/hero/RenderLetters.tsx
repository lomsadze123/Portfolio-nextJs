const RenderLetters = ({
  name,
  keyword,
}: {
  name: string;
  keyword: string;
}) => {
  if (!name) return [];
  return name.split("").map((letter, index) => (
    <span
      key={`${keyword}-${index}`}
      className={`name-animation name-animation-${keyword} inline-block opacity-0`}
    >
      {letter}
    </span>
  ));
};

export default RenderLetters;
