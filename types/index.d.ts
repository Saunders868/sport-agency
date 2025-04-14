declare type HeroData = {
  heading?: string;
  tagline?: string;
  heroImage?: string;
  heroVideo?: string;
  cta?: string;
  subTitle?: string;
};

declare type NewsLetterData = {
  cta: string;
  heading: string;
  tagline: string;
};

declare type Coach = {
  cta: string;
  excerpt: string;
  heading: string;
  tagline: string;
  image: string;
};

declare type CoachData = {
  heading: string;
  tagline: string;
  coaches: Coach[];
};

declare type LocationT = {
  heading: string;
  image: string;
  tagline: string;
};

declare type LocationData = {
  heading: string;
  cta: string;
  tagline: string;
  locations: LocationT[];
};

declare type FAQ = {
  question: string;
  answer: string;
};

declare type FAQData = {
  heading: string;
  cta: string;
  tagline: string;
  faqs: FAQ[];
};

declare type RallyData = {
  cta: string;
  heading: string;
  image: string;
};

declare interface HomepageData {
  hero: HeroData;
  newsletter: NewsLetterData;
  coach: CoachData;
  location: LocationData;
  faq: FAQData;
  rally: RallyData;
}

declare interface History {
  excerpt: string;
  heading: string;
}

declare interface AboutPageData {
  title: string;
  slug: string;
  hero: HeroData;
  history: {
    heading: string;
    tagline: string;
    history: History[];
  };
}

declare interface Facility {
  image: string;
  tagline: string;
  heading: string;
}

declare interface FitnessPageData {
  hero: HeroData;
  title: string;
  slug: string;
  sectionHighlight: { heading: string; tagline: string };
  facilities: {
    heading: string;
    ourFacilities: Facility[];
  };
}

declare interface ContactPageData {
  title: string;
  slug: string;
  hero: HeroData;
  social: {
    heading: string;
    socials: { heading: string; cta: string }[];
  };
}
