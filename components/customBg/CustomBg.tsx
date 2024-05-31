const CustomBg = () => {
  return (
    <>
      <div className="bg-custom-radial max-h-screen absolute inset-0 -z-50"></div>
      <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('../assets/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
    </>
  );
};

export default CustomBg;
