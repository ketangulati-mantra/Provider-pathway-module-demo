/**
 * Registered Lesson Activities Config
 * Single source of truth for all lesson pathways, point systems, routes, and identifiers.
 */
export interface Activity {
  lessonId: string;
  activityId: string;
  title: string;
  rewardPoints: number;
  estimatedDuration: string;
  route: string;
  completionEndpoint?: string;
  redirectAfterCompletion?: boolean;
  service?: string;
}

export const activities: Activity[] = [
  {
    lessonId: 'introduction',
    activityId: '', // Filled in during backend integration
    service: 'Therapist',
    title: 'Introduction to Mantra Platform',
    rewardPoints: 5,
    estimatedDuration: '4 min',
    route: '/task/introduction'
  },
  {
    lessonId: 'mobile-app',
    activityId: '',
    service: 'Therapist',
    title: 'Download & Review MantraPartner App',
    rewardPoints: 5,
    estimatedDuration: '1 min',
    route: '/task/mobile-app'
  },
  {
    lessonId: 'using-mantra',
    activityId: '',
    service: 'Therapist',
    title: 'Using Mantra for Your Clients',
    rewardPoints: 10,
    estimatedDuration: '3 min',
    route: '/task/using-mantra'
  },
  {
    lessonId: 'getting-clients',
    activityId: '',
    service: 'Therapist',
    title: 'Getting Clients from Mantra',
    rewardPoints: 5,
    estimatedDuration: '4 min',
    route: '/task/getting-clients'
  },
  {
    lessonId: 'profile-verification',
    activityId: '',
    service: 'Therapist',
    title: 'Complete Profile Verification',
    rewardPoints: 10,
    estimatedDuration: '2 min',
    route: '/task/profile-verification'
  },
  {
    lessonId: 'premium-provider',
    activityId: '',
    service: 'Therapist',
    title: 'What is a Premium Provider?',
    rewardPoints: 15,
    estimatedDuration: '5 min',
    route: '/task/premium-provider'
  },
  {
    lessonId: 'market-yourself',
    activityId: '',
    service: 'Therapist',
    title: 'Market Yourself & Grow Faster',
    rewardPoints: 5,
    estimatedDuration: '5 min',
    route: '/task/market-yourself'
  },
  {
    lessonId: 'share-linkedin',
    activityId: '',
    service: 'Therapist',
    title: 'Share on LinkedIn & Earn Points',
    rewardPoints: 5,
    estimatedDuration: '5 min',
    route: '/task/share-linkedin'
  },
  {
    lessonId: 'show-achievements',
    activityId: '',
    service: 'Therapist',
    title: 'Show Your Achievements & Earn Rewards!',
    rewardPoints: 5,
    estimatedDuration: '5 min',
    route: '/task/show-achievements'
  },
  {
    lessonId: 'getting-paid',
    activityId: '',
    service: 'Therapist',
    title: 'Getting Paid on MantraCare',
    rewardPoints: 5,
    estimatedDuration: '4 min',
    route: '/task/getting-paid'
  },
  {
    lessonId: 'intern-program',
    activityId: '',
    service: 'Therapist',
    title: 'Mantra Foundation Therapy Intern Program',
    rewardPoints: 5,
    estimatedDuration: '3 min',
    route: '/task/intern-program'
  },
  {
    lessonId: 'therapy-notes',
    activityId: '',
    service: 'Therapist',
    title: 'Therapy Notes',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/therapy-notes'
  },
  {
    lessonId: 'couple-therapy',
    activityId: '',
    service: 'Therapist',
    title: 'Couple Therapy on the Mantra App',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/couple-therapy'
  },
  {
    lessonId: 'creating-pathway',
    activityId: '',
    service: 'Therapist',
    title: 'Creating a Pathway for Your Client',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/creating-pathway'
  },
  {
    lessonId: 'canned-responses',
    activityId: '',
    service: 'Therapist',
    title: 'Mantra Auto-Responses (Canned Responses)',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/canned-responses'
  },
  {
    lessonId: 'mantra-assessments',
    activityId: '',
    service: 'Therapist',
    title: 'Sharing Mantra Assessments',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/mantra-assessments'
  },
  {
    lessonId: 'support-hotline',
    activityId: '',
    service: 'Therapist',
    title: 'Support Our Mental Health Hotline',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/support-hotline'
  },
  {
    lessonId: 'corporate-eap',
    activityId: '',
    service: 'Therapist',
    title: 'Corporate EAP Program Support',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/corporate-eap'
  },
  {
    lessonId: 'community-management',
    activityId: '',
    service: 'Therapist',
    title: 'Community Management - 10 Credits',
    rewardPoints: 10,
    estimatedDuration: '5 min',
    route: '/task/community-management'
  },
  {
    lessonId: 'content-creation',
    activityId: '',
    service: 'Therapist',
    title: 'Content Creation for Mental Health - 20 Credits',
    rewardPoints: 20,
    estimatedDuration: '8 min',
    route: '/task/content-creation'
  },
  {
    lessonId: 'campus-awareness',
    activityId: '',
    service: 'Therapist',
    title: 'Campus Mental Health Awareness',
    rewardPoints: 50,
    estimatedDuration: '10 min',
    route: '/task/campus-awareness'
  },
  {
    lessonId: 'fundraising',
    activityId: '',
    service: 'Therapist',
    title: 'Fund Raising for Mantra Foundation',
    rewardPoints: 50,
    estimatedDuration: '5 min',
    route: '/task/fundraising'
  },
  {
    lessonId: 'recruit-interns',
    activityId: '',
    service: 'Therapist',
    title: 'Help Recruit New Therapy Interns & Listeners',
    rewardPoints: 50,
    estimatedDuration: '5 min',
    route: '/task/recruit-interns'
  },
  {
    lessonId: 'refer-services',
    activityId: '',
    service: 'Therapist',
    title: 'Refer Other Services & Earn',
    rewardPoints: 10,
    estimatedDuration: '2 min',
    route: '/task/refer-services'
  },
  {
    lessonId: 'converting-clients',
    activityId: '',
    service: 'Therapist',
    title: 'Converting Trial Clients',
    rewardPoints: 10,
    estimatedDuration: '2 min',
    route: '/task/converting-clients'
  },
  {
    lessonId: 'insurance',
    activityId: '',
    service: 'Therapist',
    title: 'Insurance for Therapy (US, UK & Canada)',
    rewardPoints: 10,
    estimatedDuration: '3 min',
    route: '/task/insurance'
  },
  {
    lessonId: 'earn-points',
    activityId: '',
    service: 'Therapist',
    title: 'Earn Points for Every Session',
    rewardPoints: 5,
    estimatedDuration: '3 min',
    route: '/task/earn-points'
  },
  {
    lessonId: 'refer-provider',
    activityId: '',
    service: 'Therapist',
    title: 'Refer a Provider & Earn Rewards',
    rewardPoints: 20,
    estimatedDuration: '3 min',
    route: '/task/refer-provider'
  },
  {
    lessonId: 'sales-partner',
    activityId: '',
    service: 'Therapist',
    title: 'Becoming a Mantra Sales Partner',
    rewardPoints: 50,
    estimatedDuration: '5 min',
    route: '/task/sales-partner'
  },
  {
    lessonId: 'download-certificate',
    activityId: '',
    service: 'Therapist',
    title: 'Download your therapy intern provider pathway certificate',
    rewardPoints: 0,
    estimatedDuration: '1 min',
    route: '/task/download-certificate'
  },
  {
    lessonId: 'provider-certificate',
    activityId: '',
    service: 'Therapist',
    title: 'Download your Therapy Provider Pathway Certificate',
    rewardPoints: 0,
    estimatedDuration: '1 min',
    route: '/task/provider-certificate'
  },
  {
    lessonId: 'top-listener-recognition',
    activityId: '',
    service: 'Listener',
    title: 'Top Listener of the Month & Recognition',
    rewardPoints: 10,
    estimatedDuration: '5 min',
    route: '/task/top-listener-recognition'
  },
  {
    lessonId: 'listener-certificate',
    activityId: '',
    service: 'Listener',
    title: 'Download Your Listener Provider Pathway Certificate',
    rewardPoints: 0,
    estimatedDuration: '1 min',
    route: '/task/listener-certificate'
  },
  {
    lessonId: 'yoga-pathway',
    activityId: '',
    service: 'Yoga',
    title: 'Creating a Yoga Pathway for Your Client',
    rewardPoints: 5,
    estimatedDuration: '2-3 min',
    route: '/task/yoga-pathway'
  },
  {
    lessonId: 'yoga-routine',
    activityId: '',
    service: 'Yoga',
    title: 'Create a Personalized Yoga Routine for Different Client Needs',
    rewardPoints: 5,
    estimatedDuration: '3-5 min',
    route: '/task/yoga-routine'
  },
  {
    lessonId: 'yoga-mindfulness',
    activityId: '',
    service: 'Yoga',
    title: 'Sharing In-Session Mindfulness or Breathing Exercises to Boost Engagement',
    rewardPoints: 5,
    estimatedDuration: '2-3 min',
    route: '/task/yoga-mindfulness'
  },
  {
    lessonId: 'yoga-nudging',
    activityId: '',
    service: 'Yoga',
    title: 'Nudging Clients to Practice Daily',
    rewardPoints: 5,
    estimatedDuration: '2-3 min',
    route: '/task/yoga-nudging'
  },
  {
    lessonId: 'yoga-refer-services',
    activityId: '',
    service: 'Yoga',
    title: 'Refer Other Services like Fit, Diet, Physio etc.',
    rewardPoints: 5,
    estimatedDuration: '2-3 min',
    route: '/task/yoga-refer-services'
  },
  {
    lessonId: 'yoga-market-profile',
    activityId: '',
    service: 'Yoga',
    title: 'Market Your Profile – Yoga Experts',
    rewardPoints: 5,
    estimatedDuration: '5 min',
    route: '/task/yoga-market-profile'
  },
  {
    lessonId: 'yoga-certificate',
    activityId: '',
    service: 'Yoga',
    title: 'Download Your Yoga Provider Pathway Certificate',
    rewardPoints: 20,
    estimatedDuration: '2 min',
    route: '/task/yoga-certificate'
  }
];
