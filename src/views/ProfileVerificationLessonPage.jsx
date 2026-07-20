import React, { useState } from 'react';
import { useLessonCompletion } from '../hooks/useLessonCompletion';
import {
  Header,
  CompletionScreen,
  Button
} from '../components';
import SubmissionForm from '../components/forms/SubmissionForm';
import { CheckCircle2, Clock, Award, ExternalLink } from 'lucide-react';

const LESSON_ID = 'profile-verification';
const LESSON_TITLE = 'Complete Profile Verification';
const REWARD_POINTS = 10;

const STEPS = [
  {
    step: 'Step 1',
    title: 'Open Profile Verification',
    content: 'Click the "Open Profile Verification" button above to access your profile verification page.'
  },
  {
    step: 'Step 2',
    title: 'Complete Your Profile',
    content: 'Fill in all the required profile information, including your personal details, qualifications, bio, and profile photo.'
  },
  {
    step: 'Step 3',
    title: 'Submit for Verification',
    content: 'Submit your profile for verification. Our verification team will review your profile and verify your details.'
  },
  {
    step: 'Step 4',
    title: 'Upload Screenshot',
    content: 'After submitting your profile for verification, return to this page and upload a screenshot of your Profile page as proof of submission.'
  }
];

export default function ProfileVerificationLessonPage({ onBack }) {
  const { 
    lessonProgress, 
    showCelebrate, 
    handleCloseCelebration, 
    handleActionComplete 
  } = useLessonCompletion(LESSON_ID, onBack, {
    hasVideo: false,
    hasQuiz: false,
    hasAction: true
  });

  const handleSubmissionSuccess = () => {
    handleActionComplete();
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f8fafc' }}
      className="animate-fade-in"
    >
      <Header title={LESSON_TITLE} progress={lessonProgress} points={REWARD_POINTS} />

      <main className="academy-main-container" style={{
        flex: 1,
        padding: '28px 24px 60px',
        maxWidth: '860px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #eef0f3',
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
        }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--text-main)', margin: '0 0 8px' }}>
            Why Profile Verification Matters
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0 0 16px', lineHeight: '1.5', maxWidth: '700px' }}>
            A verified profile builds immense trust with clients. Verified providers are significantly more likely to receive bookings and higher client engagement. Completing this step is essential for finalizing your provider onboarding with MantraCare.
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)', margin: '24px 0 8px' }}>
            What Gets Verified
          </h2>
          <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0 0 24px', paddingLeft: '20px', lineHeight: '1.6' }}>
            <li>Your professional profile photo</li>
            <li>Your clinical qualifications and licenses</li>
            <li>Your work experience and specializations</li>
            <li>Your introductory bio</li>
          </ul>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span className="overview-meta-badge"><Clock size={12} /><span>2 min task</span></span>
            <span className="overview-meta-badge points"><Award size={12} /><span>+{REWARD_POINTS} Points</span></span>
          </div>
        </div>

        {/* ── CTA Section ────────────────────────────────────────── */}
        <div style={{
          background: 'var(--bg-app)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          border: '2px dashed #d1d5db'
        }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', margin: '0 0 12px' }}>
            Ready to get verified?
          </h2>
          <Button 
            variant="primary" 
            onClick={() => window.open('https://provider.mantracare.com/verification', '_blank')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '1rem' }}
          >
            Open Profile Verification
            <ExternalLink size={18} />
          </Button>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '12px', margin: '12px 0 0' }}>
            This will open the verification portal in a new tab. Return here once completed.
          </p>
        </div>

        {/* ── 2x2 Steps Grid ────────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {STEPS.map((step, idx) => (
            <div key={idx} style={{ background: '#fff', padding: '20px', borderRadius: '16px', border: '1px solid #eef0f3', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: '#6b7280', background: '#f3f4f6', padding: '3px 8px', borderRadius: '4px', marginBottom: '8px', display: 'inline-block' }}>{step.step}</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, margin: '0 0 12px' }}>{step.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0', lineHeight: '1.5' }}>{step.content}</p>
            </div>
          ))}
        </div>

        {/* ── Form Section ────────────────────────────────────────── */}
        <SubmissionForm 
          title="Submit Your Verified Profile Screenshot"
          onSuccess={handleSubmissionSuccess}
        />

      </main>

      {showCelebrate && (
        <CompletionScreen
          points={REWARD_POINTS}
          title="Profile Verification Submitted!"
          subtitle="Thank you for submitting your proof. You've earned points for completing this activity."
          onClose={handleCloseCelebration}
        />
      )}
    </div>
  );
}
