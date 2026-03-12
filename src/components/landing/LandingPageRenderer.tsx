import {
  DeveloperPortfolioLandingData,
  FitnessLandingData,
  FrontendDeveloperLandingData,
  HealthcareLandingData,
  LandingPageRecord,
  LuxuryTravelLandingData,
} from "@/lib/landing/types";
import LuxuryTravelLanding from "./templates/LuxuryTravelLanding";
import DeveloperPortfolioLanding from "./templates/DeveloperPortfolioLanding";
import FrontendDeveloperLanding from "./templates/FrontendDeveloperLanding";
import HealthcarePremiumLanding from "./templates/HealthcarePremiumLanding";
import FitnessPremiumLanding from "./templates/FitnessPremiumLanding";

type Props = {
  page: LandingPageRecord;
};

export default function LandingPageRenderer({ page }: Props) {
  switch (page.template) {
    case "luxury-travel":
      return (
        <LuxuryTravelLanding data={page.data as LuxuryTravelLandingData} />
      );

    case "developer-portfolio":
      return (
        <DeveloperPortfolioLanding
          data={page.data as DeveloperPortfolioLandingData}
        />
      );

    case "frontend-developer":
      return (
        <FrontendDeveloperLanding
          page={
            page as LandingPageRecord<FrontendDeveloperLandingData> & {
              template: "frontend-developer";
            }
          }
        />
      );

    case "healthcare-premium":
      return (
        <HealthcarePremiumLanding data={page.data as HealthcareLandingData} />
      );

    case "fitness-premium":
      return <FitnessPremiumLanding data={page.data as FitnessLandingData} />;

    default:
      return null;
  }
}
