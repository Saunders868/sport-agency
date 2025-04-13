import FitnessContent from "@/component/pages/fitness-page/FitnessContent";
import { getFitnessPage } from "@/sanity/queries";

const Page = async () => {
  const data: FitnessPageData = await getFitnessPage();
  console.log(data);

  return <FitnessContent data={data} />;
};

export default Page;
