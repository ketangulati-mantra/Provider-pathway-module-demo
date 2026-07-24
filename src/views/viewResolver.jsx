import React from 'react';
import LessonTemplate from './LessonTemplate';
import DeveloperLessonsPage from './DeveloperLessonsPage';
import IntroductionLessonPage from './IntroductionLessonPage';
import MobileAppLessonPage from './MobileAppLessonPage';
import UsingMantraLessonPage from './UsingMantraLessonPage';
import PremiumProviderLessonPage from './PremiumProviderLessonPage';
import GettingClientsLessonPage from './GettingClientsLessonPage';
import MarketYourselfLessonPage from './MarketYourselfLessonPage';
import ShareLinkedinLessonPage from './ShareLinkedinLessonPage';
import ShowAchievementsLessonPage from './ShowAchievementsLessonPage';
import GettingPaidLessonPage from './GettingPaidLessonPage';
import TherapyInternProgramLessonPage from './TherapyInternProgramLessonPage';
import TherapyNotesLessonPage from './TherapyNotesLessonPage';
import CoupleTherapyLessonPage from './CoupleTherapyLessonPage';
import CreatingPathwayLessonPage from './CreatingPathwayLessonPage';
import CannedResponsesLessonPage from './CannedResponsesLessonPage';
import MantraAssessmentsLessonPage from './MantraAssessmentsLessonPage';
import SupportHotlineLessonPage from './SupportHotlineLessonPage';
import CorporateEapLessonPage from './CorporateEapLessonPage';
import CommunityManagementLessonPage from './CommunityManagementLessonPage';
import ContentCreationLessonPage from './ContentCreationLessonPage';
import CampusAwarenessLessonPage from './CampusAwarenessLessonPage';
import FundRaisingLessonPage from './FundRaisingLessonPage';
import RecruitInternsLessonPage from './RecruitInternsLessonPage';
import ReferServicesLessonPage from './ReferServicesLessonPage';
import ConvertingClientsLessonPage from './ConvertingClientsLessonPage';
import InsuranceLessonPage from './InsuranceLessonPage';
import EarnPointsLessonPage from './EarnPointsLessonPage';
import ReferProviderLessonPage from './ReferProviderLessonPage';
import SalesPartnerLessonPage from './SalesPartnerLessonPage';
import CertificateDownloadPage from './CertificateDownloadPage';
import TherapyProviderCertificatePage from './TherapyProviderCertificatePage';
import TopListenerLessonPage from './TopListenerLessonPage';
import ListenerCertificatePage from './ListenerCertificatePage';
import YogaPathwayLessonPage from './YogaPathwayLessonPage';
import YogaRoutineLessonPage from './YogaRoutineLessonPage';
import YogaMindfulnessLessonPage from './YogaMindfulnessLessonPage';
import YogaNudgingLessonPage from './YogaNudgingLessonPage';
import YogaReferServicesLessonPage from './YogaReferServicesLessonPage';
import YogaMarketProfileLessonPage from './YogaMarketProfileLessonPage';
import YogaCertificatePage from './YogaCertificatePage';
import ProfileVerificationLessonPage from './ProfileVerificationLessonPage';

/**
 * Route-to-Component registry.
 * Maps route paths to lesson component implementations.
 * Can specify default Component or service-specific overrides.
 */
const ROUTE_VIEW_REGISTRY = {
  '/task/introduction': { default: IntroductionLessonPage },
  '/task/mobile-app': { default: MobileAppLessonPage },
  '/task/using-mantra': { default: UsingMantraLessonPage },
  '/task/profile-verification': { default: ProfileVerificationLessonPage },
  '/task/premium-provider': { default: PremiumProviderLessonPage },
  '/task/getting-clients': { default: GettingClientsLessonPage },
  '/task/market-yourself': { default: MarketYourselfLessonPage, yoga: YogaMarketProfileLessonPage },
  '/task/share-linkedin': { default: ShareLinkedinLessonPage },
  '/task/show-achievements': { default: ShowAchievementsLessonPage },
  '/task/getting-paid': { default: GettingPaidLessonPage },
  '/task/intern-program': { default: TherapyInternProgramLessonPage },
  '/task/session-notes': { default: TherapyNotesLessonPage },
  '/task/therapy-notes': { default: TherapyNotesLessonPage },
  '/task/couple-therapy': { default: CoupleTherapyLessonPage },
  '/task/creating-pathway': { default: CreatingPathwayLessonPage, yoga: YogaPathwayLessonPage },
  '/task/canned-responses': { default: CannedResponsesLessonPage },
  '/task/mantra-assessments': { default: MantraAssessmentsLessonPage },
  '/task/support-hotline': { default: SupportHotlineLessonPage },
  '/task/corporate-eap': { default: CorporateEapLessonPage },
  '/task/community-management': { default: CommunityManagementLessonPage },
  '/task/content-creation': { default: ContentCreationLessonPage },
  '/task/campus-awareness': { default: CampusAwarenessLessonPage },
  '/task/fundraising': { default: FundRaisingLessonPage },
  '/task/recruit-interns': { default: RecruitInternsLessonPage },
  '/task/refer-services': { default: ReferServicesLessonPage, yoga: YogaReferServicesLessonPage },
  '/task/converting-clients': { default: ConvertingClientsLessonPage },
  '/task/insurance': { default: InsuranceLessonPage },
  '/task/earn-points': { default: EarnPointsLessonPage },
  '/task/refer-provider': { default: ReferProviderLessonPage },
  '/task/sales-partner': { default: SalesPartnerLessonPage },
  '/task/download-certificate': { default: CertificateDownloadPage },
  '/task/provider-certificate': { default: TherapyProviderCertificatePage },
  '/task/top-listener-recognition': { default: TopListenerLessonPage },
  '/task/listener-certificate': { default: ListenerCertificatePage },
  '/task/yoga-pathway': { default: YogaPathwayLessonPage },
  '/task/yoga-routine': { default: YogaRoutineLessonPage },
  '/task/yoga-mindfulness': { default: YogaMindfulnessLessonPage },
  '/task/yoga-nudging': { default: YogaNudgingLessonPage },
  '/task/yoga-refer-services': { default: YogaReferServicesLessonPage },
  '/task/yoga-market-profile': { default: YogaMarketProfileLessonPage },
  '/task/yoga-certificate': { default: YogaCertificatePage }
};

/**
 * Resolves and renders the React component for a given route and service.
 */
export const resolveLessonView = ({ currentPath, currentService, onBack, activities }) => {
  const routeMapping = ROUTE_VIEW_REGISTRY[currentPath];

  if (routeMapping) {
    const Component = routeMapping[currentService] || routeMapping.default;
    return <Component onBack={onBack} />;
  }

  // Generic fallback if route matches a registered activity in activities config
  if (currentPath.startsWith('/task/')) {
    const activeLesson = activities.find(t => t.route === currentPath);
    if (activeLesson) {
      return <LessonTemplate lesson={activeLesson} onBack={onBack} />;
    }
  }

  return null;
};
