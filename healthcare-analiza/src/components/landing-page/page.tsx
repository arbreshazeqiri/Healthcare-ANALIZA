import Hook from "./hook";
import Features from "./features";
import Services from "./services";
import CEO from "./ceo";
import Staff from "./staff";
const LandingPage = () => {
  return (
    <div
      className="h-full"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #E4FEFF 0%, #f5f6f7 100%)",
      }}
    >
      <Hook />
      <Features />
      <Services />
      <CEO />
      <Staff />
    </div>
  );
};

export default LandingPage;
