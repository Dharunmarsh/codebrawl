import FancyButton from "../../components/FancyButton";

const Hero = ({ displayName }) => {
  return (
    <div className="relative w-full xl:my-5 h-screen overflow-hidden">
      <div className="relative text-white emoji-text text-center mt-30 mx-auto">
        <h1 className="text-[2rem] mx-auto md:text-[2.625rem]  xl:text-6xl w-[90%] xl:tracking-wide font-bold">
          Welcome👋 to the{" "}
          <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
            CodeBrawl
          </span>
          🚀,{" "}
          <span className="bg-gradient-to-r from-gray-200 to-slate-200 bg-clip-text text-transparent">
            {displayName}
          </span>
          !
        </h1>

        <p className="text-xl mx-auto px-6 w-[90%] leading-relaxed text-center md:text-3xl font-bold mt-4">
          Grow your📈{" "}
          <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
            coding skills
          </span>
          ⌨️ by battling real rivals⚔️ in the ultimate{" "}
          <span className="bg-rose-500">
            dev arena.
          </span>
        </p>

        <div className="flex gap-10 justify-center mt-9">
          <FancyButton
            text="Get Started"
            showArrow
            variant="default"
            onClick={() => console.log("started")}
          />
          <FancyButton
            text="Leaderboard"
            variant="leaderboard"
            onClick={() => console.log("on the top")}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
