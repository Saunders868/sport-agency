import { getHomepage } from "@/sanity/queries/homepage";
import HeroContent from "./HeroContent";

const Hero = async () => {
  const data = await getHomepage();
  const heroData: HeroData = data?.hero;

  return <HeroContent content={heroData} />;
};

export default Hero;
