import { Data, SocialMedia, StockData } from "./mock-data";

export interface SocialMediaCount {
  name?: string;
  data?: Data[];
}

const socialMediaCountGenerator = (
  nameOfStock: string,
  socialMediaType: string,
  data: StockData[]
): SocialMediaCount[] | undefined => {
  const filteredStock: StockData | undefined = data.find(
    (data: StockData) => data.name === nameOfStock
  );
  const filterSocialMedia = filteredStock?.socialMedia.find(
    (socialMedia: SocialMedia) => socialMedia.name === socialMediaType
  )?.count;
  return filterSocialMedia ?  [{ name: filteredStock?.name, data: filterSocialMedia }] : undefined
};

export { socialMediaCountGenerator };
