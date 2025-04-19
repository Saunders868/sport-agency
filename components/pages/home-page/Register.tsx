import NewsLetter from "@/components/elements/newsletter";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";

const Register = ({ data }: { data: NewsLetterData }) => {
  return (
    <Section className="w-screen relative z-20 bg-black">
      <Container className="flex md:flow-root flex-col justify-between md:items-center">
        <h2 className="text-white xl:w-2/4 font-coolvetica text-section uppercase">
          {data.heading || "let's experience Tennis together"}
        </h2>
        <div className="flex flex-col gap-3">
          <p className="text-white/60">{data.tagline || "Stay up to date"}</p>
          <NewsLetter />
        </div>
      </Container>
    </Section>
  );
};

export default Register;
