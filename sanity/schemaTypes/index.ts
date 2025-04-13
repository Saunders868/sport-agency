import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { heroType } from "./heroType";
import { faqsType } from "./faqsType";
import pageType from "./pageType";
import { rallyType } from "./rallyType";
import { authorType } from "./authorType";
import { socialsType } from "./socialsType";
import { historyType } from "./historyType";
import { coachesType } from "./coachesType.ts";
import { categoryType } from "./categoryType.ts";
import { registerType } from "./registerType";
import { locationsType } from "./locationsType";
import { facilitiesType } from "./facilitiesType";
import { blockContentType } from "./blockContentType";
import textWithIllustrationType from "./textWithIllus";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    heroType,
    faqsType,
    pageType,
    rallyType,
    authorType,
    socialsType,
    historyType,
    coachesType,
    categoryType,
    registerType,
    locationsType,
    facilitiesType,
    blockContentType,
    textWithIllustrationType,
  ],
};
