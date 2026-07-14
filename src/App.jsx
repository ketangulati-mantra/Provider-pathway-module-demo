import React, { useState, useEffect } from 'react';
import LessonTemplate from './views/LessonTemplate';
import DeveloperLessonsPage from './views/DeveloperLessonsPage';
import IntroductionLessonPage from './views/IntroductionLessonPage';
import MobileAppLessonPage from './views/MobileAppLessonPage';
import UsingMantraLessonPage from './views/UsingMantraLessonPage';
import PremiumProviderLessonPage from './views/PremiumProviderLessonPage';
import GettingClientsLessonPage from './views/GettingClientsLessonPage';
import MarketYourselfLessonPage from './views/MarketYourselfLessonPage';
import ShareLinkedinLessonPage from './views/ShareLinkedinLessonPage';
import ShowAchievementsLessonPage from './views/ShowAchievementsLessonPage';
import GettingPaidLessonPage from './views/GettingPaidLessonPage';
import TherapyInternProgramLessonPage from './views/TherapyInternProgramLessonPage';
import TherapyNotesLessonPage from './views/TherapyNotesLessonPage';
import CoupleTherapyLessonPage from './views/CoupleTherapyLessonPage';
import CreatingPathwayLessonPage from './views/CreatingPathwayLessonPage';
import CannedResponsesLessonPage from './views/CannedResponsesLessonPage';
import MantraAssessmentsLessonPage from './views/MantraAssessmentsLessonPage';
import SupportHotlineLessonPage from './views/SupportHotlineLessonPage';
import CorporateEapLessonPage from './views/CorporateEapLessonPage';
import CommunityManagementLessonPage from './views/CommunityManagementLessonPage';
import ContentCreationLessonPage from './views/ContentCreationLessonPage';
import CampusAwarenessLessonPage from './views/CampusAwarenessLessonPage';
import FundRaisingLessonPage from './views/FundRaisingLessonPage';
import RecruitInternsLessonPage from './views/RecruitInternsLessonPage';
import ReferServicesLessonPage from './views/ReferServicesLessonPage';
import ConvertingClientsLessonPage from './views/ConvertingClientsLessonPage';
import InsuranceLessonPage from './views/InsuranceLessonPage';
import EarnPointsLessonPage from './views/EarnPointsLessonPage';
import ReferProviderLessonPage from './views/ReferProviderLessonPage';
import SalesPartnerLessonPage from './views/SalesPartnerLessonPage';
import CertificateDownloadPage from './views/CertificateDownloadPage';
import TherapyProviderCertificatePage from './views/TherapyProviderCertificatePage';
import TopListenerLessonPage from './views/TopListenerLessonPage';
import ListenerCertificatePage from './views/ListenerCertificatePage';
import YogaPathwayLessonPage from './views/YogaPathwayLessonPage';
import YogaRoutineLessonPage from './views/YogaRoutineLessonPage';
import YogaMindfulnessLessonPage from './views/YogaMindfulnessLessonPage';
import YogaNudgingLessonPage from './views/YogaNudgingLessonPage';
import YogaReferServicesLessonPage from './views/YogaReferServicesLessonPage';
import YogaMarketProfileLessonPage from './views/YogaMarketProfileLessonPage';
import YogaCertificatePage from './views/YogaCertificatePage';
import {
  BookOpen,
  Award,
  Smartphone,
  ShieldCheck,
  Trophy
} from 'lucide-react';
import './App.css';
import { MANTRA_CONFIG } from './mantra';
import { activities } from './mantra/activities';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Custom router state listener
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate sorted dashboard tasks from the single source of truth
  const dashboardTasks = [...activities]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(activity => ({
      id: activity.lessonId,
      title: activity.title,
      path: activity.route,
      duration: activity.estimatedDuration,
      points: activity.rewardPoints,
      category: activity.route.includes('intern') || activity.route.includes('support') || activity.route.includes('corporate') || activity.route.includes('campus') ? 'Initiative' : 'Lesson',
      service: activity.service || 'Therapist'
    }));

  // Render view based on route path
  const renderView = () => {
    if (currentPath === '/dev') {
      return (
        <DeveloperLessonsPage
          tasks={dashboardTasks}
          onNavigate={navigate}
        />
      );
    }

    if (currentPath === '/task/introduction') {
      return (
        <IntroductionLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/mobile-app') {
      return (
        <MobileAppLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/using-mantra') {
      return (
        <UsingMantraLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/profile-verification') {
      // Redirect directly to the external provider verification portal
      window.location.href = 'https://provider.mantracare.com/verification';
      return null;
    }

    if (currentPath === '/task/premium-provider') {
      return (
        <PremiumProviderLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/getting-clients') {
      return (
        <GettingClientsLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/market-yourself') {
      return (
        <MarketYourselfLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/share-linkedin') {
      return (
        <ShareLinkedinLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/show-achievements') {
      return (
        <ShowAchievementsLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/getting-paid') {
      return (
        <GettingPaidLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/intern-program') {
      return (
        <TherapyInternProgramLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/therapy-notes') {
      return (
        <TherapyNotesLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/couple-therapy') {
      return (
        <CoupleTherapyLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/creating-pathway') {
      return (
        <CreatingPathwayLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/canned-responses') {
      return (
        <CannedResponsesLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/mantra-assessments') {
      return (
        <MantraAssessmentsLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/support-hotline') {
      return (
        <SupportHotlineLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/corporate-eap') {
      return (
        <CorporateEapLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/community-management') {
      return (
        <CommunityManagementLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/content-creation') {
      return (
        <ContentCreationLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/campus-awareness') {
      return (
        <CampusAwarenessLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/fundraising') {
      return (
        <FundRaisingLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/recruit-interns') {
      return (
        <RecruitInternsLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/refer-services') {
      return (
        <ReferServicesLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/converting-clients') {
      return (
        <ConvertingClientsLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/insurance') {
      return (
        <InsuranceLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/earn-points') {
      return (
        <EarnPointsLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/refer-provider') {
      return (
        <ReferProviderLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/sales-partner') {
      return (
        <SalesPartnerLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/download-certificate') {
      return (
        <CertificateDownloadPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/provider-certificate') {
      return (
        <TherapyProviderCertificatePage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/top-listener-recognition') {
      return (
        <TopListenerLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/listener-certificate') {
      return (
        <ListenerCertificatePage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/yoga-pathway') {
      return (
        <YogaPathwayLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/yoga-routine') {
      return (
        <YogaRoutineLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/yoga-mindfulness') {
      return (
        <YogaMindfulnessLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/yoga-nudging') {
      return (
        <YogaNudgingLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/yoga-refer-services') {
      return (
        <YogaReferServicesLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/yoga-market-profile') {
      return (
        <YogaMarketProfileLessonPage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath === '/task/yoga-certificate') {
      return (
        <YogaCertificatePage
          onBack={() => navigate('/dev')}
        />
      );
    }

    if (currentPath.startsWith('/task/')) {
      const activeLesson = activities.find(t => t.route === currentPath);

      if (activeLesson) {
        return (
          <LessonTemplate
            lesson={activeLesson}
            onBack={() => navigate('/dev')}
          />
        );
      }
    }

    // Default Bare-bones Branded Fallback for Root / and other paths
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'var(--bg-app)',
        padding: '24px',
        textAlign: 'center'
      }}>
        <div className="academy-card glass-panel text-center animate-scale-in" style={{ maxWidth: '440px', padding: '40px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <img src="/logo.svg" alt="Mantra Logo" style={{ height: '36px', display: 'block', marginBottom: '8px' }} />

          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-main)', fontSize: '1.35rem', marginBottom: '8px' }}>
              Mantra Provider Academy
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '4px' }}>
              This application powers interactive learning modules for providers.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Lessons are launched directly from the Provider Dashboard.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="academy-layout">
      <ErrorBoundary>
        {renderView()}
      </ErrorBoundary>
    </div>
  );
}

export default App;
