import React, { useState, useEffect } from 'react';
import LessonTemplate from './views/LessonTemplate';
import DeveloperLessonsPage from './views/DeveloperLessonsPage';
import { 
  BookOpen, 
  Award, 
  Smartphone,
  ShieldCheck,
  Trophy
} from 'lucide-react';
import './App.css';

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

  // Lessons Data configurations
  const tasks = [
    {
      id: 'introduction',
      title: 'Introduction to Mantra Platform',
      path: '/task/introduction',
      format: 'video',
      duration: '4 min',
      points: 5,
      video: {
        title: 'Introduction to Mantra Platform - Holistic Wellness Portal',
        duration: '4:12 minutes',
        poster: '/intro-thumbnail.png',
        src: 'https://vimeo.com/1149587565?fl=pl&fe=cm'
      },
      infoCards: [
        {
          title: 'Holistic Client Platform',
          description: 'Mantra Care connects licensed practitioners with clients seeking mental health, nutrition, physical fitness, and coaching services.',
          icon: BookOpen
        },
        {
          title: 'Earn Scoring Points',
          description: 'Completing lessons, checking tasks, and passing quizzes boosts your provider score to unlock Premium ranking referrals.',
          icon: Award
        }
      ],
      quiz: {
        questions: [
          {
            question: 'What is the mission of Mantra Care?',
            options: [
              { text: 'To provide medical treatment only', isCorrect: false },
              { text: 'To impact individuals and organizations to thrive personal and professional growth', isCorrect: true },
              { text: 'To focus solely on corporate profits', isCorrect: false },
              { text: 'To deliver fitness training programs', isCorrect: false }
            ]
          },
          {
            question: 'For what purposes can the Mantra app be used?',
            options: [
              { text: 'Only for scheduling therapy sessions', isCorrect: false },
              { text: 'To connect with clients, manage payments, and use the app\'s features', isCorrect: true },
              { text: 'Exclusively for meditation practices', isCorrect: false },
              { text: 'To track physical workouts only', isCorrect: false }
            ]
          }
        ]
      }
    },
    {
      id: 'mobile-app',
      title: 'Download & Review MantraPartner Mobile App',
      path: '/task/mobile-app',
      format: 'todo',
      duration: '1 min',
      points: 5,
      checklist: [
        { id: 'app_download', label: 'Download MantraPartner App from iOS App Store or Google Play', helpText: 'Search "MantraPartner" on your mobile device.' },
        { id: 'app_login', label: 'Log in with your existing Laravel Provider credentials', helpText: 'Use the credentials registered on your clinic setup.' },
        { id: 'app_notification', label: 'Enable push notifications for client booking alerts', helpText: 'Crucial for responding within the 2-hour rating SLA.' }
      ],
      quiz: {
        question: 'Which application should wellness providers download to manage clients on the go?',
        options: [
          { text: 'Standard Mantra Care Client App', isCorrect: false, feedback: 'Incorrect. The Client app is designed for clients, not providers.' },
          { text: 'MantraPartner Mobile App', isCorrect: true, feedback: 'Correct! MantraPartner is the custom-built workspace for providers.' },
          { text: 'Vite Developer Console App', isCorrect: false, feedback: 'Incorrect. That is a development tool, not the platform app.' }
        ]
      }
    },
    {
      id: 'using-mantra',
      title: 'Using Mantra for Your Clients',
      path: '/task/using-mantra',
      format: 'video',
      duration: '4 min',
      points: 5,
      video: {
        title: 'Using Mantra for Your Clients - Guide for Onboarding & Scheduling',
        duration: '3:50 minutes',
        poster: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
      },
      accordionGuides: [
        {
          title: 'Accepting Client Appointments',
          content: 'When a client books a slot, you will receive a push notification. You have 2 hours to accept or reschedule the booking. Confirming promptly boosts your dashboard availability score.'
        },
        {
          title: 'Managing Client Progress Records',
          content: 'After each session, you can log notes, set weekly action checklists, and assign homework goals for clients. Clients view these goals directly on their mobile client application.'
        }
      ],
      quiz: {
        question: 'Where can you find your client-facing profile link inside the MantraPartner app?',
        options: [
          { text: 'Sessions overview section', isCorrect: false, feedback: 'Incorrect. The Sessions tab only displays upcoming appointments.' },
          { text: 'Availability configuration calendar', isCorrect: false, feedback: 'Incorrect. The calendar manages time blocks.' },
          { text: 'Profile & Settings section', isCorrect: true, feedback: 'Correct! Your custom marketing URL link is copied from the Profile settings.' },
          { text: 'Laravel billing summary tab', isCorrect: false, feedback: 'Incorrect. The billing tab only tracks financial payouts.' }
        ]
      }
    },
    {
      id: 'profile-verification',
      title: 'Complete Profile Verification',
      path: '/task/profile-verification',
      format: 'todo',
      duration: '10 min',
      points: 5,
      timelineSteps: [
        { title: 'Personal Information', description: 'Fill out your bio, years of practice, and therapy specializations.' },
        { title: 'Credential Verification', description: 'Upload credentials and scans of your medical or coaching licenses.' },
        { title: 'Calendar Syncing', description: 'Define default weekly availability intervals for client bookings.' }
      ],
      checklist: [
        { id: 'verif_info', label: 'Complete all description fields in profile settings', helpText: 'Make sure your clinical biography is warm and informative.' },
        { id: 'verif_doc', label: 'Upload practitioner credentials and licensing scans', helpText: 'PDF or JPEG format, maximum 5MB file sizes.' },
        { id: 'verif_cal', label: 'Add at least 15 hours of weekly booking availability', helpText: 'Helps matching engines locate you during client requests.' }
      ],
      quiz: {
        question: 'What is the standard turnaround time for Mantra teams to review submitted licenses?',
        options: [
          { text: 'Instant computer auto-approval', isCorrect: false, feedback: 'Incorrect. To ensure patient safety, credentials are hand-checked by compliance managers.' },
          { text: '1 to 2 business days', isCorrect: true, feedback: 'Correct! Reviews are completed within 24-48 business hours.' },
          { text: 'Over two calendar weeks', isCorrect: false, feedback: 'Incorrect. Mantra team processes files quickly to get you online.' }
        ]
      }
    },
    {
      id: 'premium-provider',
      title: 'What is a Premium Provider?',
      path: '/task/premium-provider',
      format: 'todo',
      duration: '0 min',
      points: 5,
      timelineSteps: [
        { title: 'Listed Tier', description: 'Profile is searchable, but you must acquire your own bookings.' },
        { title: 'Verified Badge Tier', description: 'Builds patient trust with checked credentials icon.' },
        { title: 'Premium Referral Tier', description: 'Mantra automatically matches corporate and individual clients to you.' }
      ],
      infoCards: [
        {
          title: 'Exclusive B2B Referrals',
          description: 'Premium status unlock matches corporate wellness clients directly to you, boosting monthly earnings.',
          icon: Trophy
        },
        {
          title: 'Score Milestone (500+)',
          description: 'Reach 500 points on the provider score by completing lessons and checking portal checklist tasks.',
          icon: Award
        }
      ],
      scenario: {
        prompt: 'You receive a new corporate client referral request, but your availability this week is completely booked. How do you handle this to preserve your score rating?',
        options: [
          { 
            id: 's1', 
            text: 'Ignore the notification. It will automatically re-route to another provider if unreplied.', 
            feedback: 'Incorrect! Leaving requests unreplied is an SLA violation and severely drops your ranking.' 
          },
          { 
            id: 's2', 
            text: 'Decline the booking, citing busy schedule, without messaging the client.', 
            feedback: 'Suboptimal. Declining without contacting lowers conversion and makes a poor client impression.' 
          },
          { 
            id: 's3', 
            text: 'Message the client welcoming them, explain your slot constraint, and offer 3 alternative times next week.', 
            feedback: 'Excellent! Active communication keeps the booking reservation open and secures the referral.' 
          }
        ]
      },
      quiz: {
        question: 'What is the required engagement score milestone to qualify for Premium provider tier status?',
        options: [
          { text: '100 Engagement points', isCorrect: false, feedback: 'Incorrect. 100 points is the basic milestone.' },
          { text: '500 Engagement points', isCorrect: true, feedback: 'Correct! Earning 500 points unlocks the premium referral engine.' },
          { text: '1000 Engagement points', isCorrect: false, feedback: 'Incorrect. 1000 is a future ambassador tier.' }
        ]
      }
    }
  ];

  // Render view based on route path
  const renderView = () => {
    if (currentPath === '/dev') {
      return (
        <DeveloperLessonsPage 
          tasks={tasks}
          onNavigate={navigate}
        />
      );
    }

    if (currentPath.startsWith('/task/')) {
      const activeLesson = tasks.find(t => t.path === currentPath);
      
      if (activeLesson) {
        return (
          <LessonTemplate 
            lesson={activeLesson} 
            onBack={() => navigate('/')}
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
      {renderView()}
    </div>
  );
}

export default App;
