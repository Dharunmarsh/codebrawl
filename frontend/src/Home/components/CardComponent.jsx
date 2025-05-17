// ExampleCardUsage.jsx
import CardComponent from "./card";

const ExampleCardUsage = () => {
  return (
    <div className="flex gap-4 flex-wrap p-4">
      <CardComponent
        backgroundImage="https://source.unsplash.com/320x200/?code"
        heading="Code Warriors"
        detail="Battle-tested devs ready to brawl"
        textColor="text-yellow-300"
      />

      <CardComponent
        backgroundImage="https://source.unsplash.com/320x200/?technology"
        heading="Debug Lords"
        detail="Squashing bugs like it's 1999"
        textColor="text-cyan-200"
      />
    </div>
  );
};

export default ExampleCardUsage;
