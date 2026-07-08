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
}

export const activities: Activity[] = [
  {
    lessonId: 'introduction',
    activityId: '', // Filled in during backend integration
    title: 'Introduction to Mantra Platform',
    rewardPoints: 5,
    estimatedDuration: '4 min',
    route: '/task/introduction'
  },
  {
    lessonId: 'mobile-app',
    activityId: '',
    title: 'Download & Review MantraPartner App',
    rewardPoints: 5,
    estimatedDuration: '1 min',
    route: '/task/mobile-app'
  },
  {
    lessonId: 'using-mantra',
    activityId: '',
    title: 'Using Mantra for Your Clients',
    rewardPoints: 10,
    estimatedDuration: '3 min',
    route: '/task/using-mantra'
  },
  {
    lessonId: 'getting-clients',
    activityId: '',
    title: 'Getting Clients from Mantra',
    rewardPoints: 5,
    estimatedDuration: '4 min',
    route: '/task/getting-clients'
  },
  {
    lessonId: 'profile-verification',
    activityId: '',
    title: 'Complete Profile Verification',
    rewardPoints: 10,
    estimatedDuration: '2 min',
    route: '/task/profile-verification'
  },
  {
    lessonId: 'premium-provider',
    activityId: '',
    title: 'What is a Premium Provider?',
    rewardPoints: 15,
    estimatedDuration: '5 min',
    route: '/task/premium-provider'
  },
  {
    lessonId: 'market-yourself',
    activityId: '',
    title: 'Market Yourself & Grow Faster',
    rewardPoints: 5,
    estimatedDuration: '5 min',
    route: '/task/market-yourself'
  },
  {
    lessonId: 'share-linkedin',
    activityId: '',
    title: 'Share on LinkedIn & Earn Points',
    rewardPoints: 5,
    estimatedDuration: '5 min',
    route: '/task/share-linkedin'
  },
  {
    lessonId: 'show-achievements',
    activityId: '',
    title: 'Show Your Achievements & Earn Rewards!',
    rewardPoints: 5,
    estimatedDuration: '5 min',
    route: '/task/show-achievements'
  },
  {
    lessonId: 'getting-paid',
    activityId: '',
    title: 'Getting Paid on MantraCare',
    rewardPoints: 5,
    estimatedDuration: '4 min',
    route: '/task/getting-paid'
  },
  {
    lessonId: 'intern-program',
    activityId: '',
    title: 'Mantra Foundation Therapy Intern Program',
    rewardPoints: 5,
    estimatedDuration: '3 min',
    route: '/task/intern-program'
  },
  {
    lessonId: 'therapy-notes',
    activityId: '',
    title: 'Therapy Notes',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/therapy-notes'
  },
  {
    lessonId: 'couple-therapy',
    activityId: '',
    title: 'Couple Therapy on the Mantra App',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/couple-therapy'
  },
  {
    lessonId: 'creating-pathway',
    activityId: '',
    title: 'Creating a Pathway for Your Client',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/creating-pathway'
  },
  {
    lessonId: 'canned-responses',
    activityId: '',
    title: 'Mantra Auto-Responses (Canned Responses)',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/canned-responses'
  },
  {
    lessonId: 'mantra-assessments',
    activityId: '',
    title: 'Sharing Mantra Assessments',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/mantra-assessments'
  },
  {
    lessonId: 'support-hotline',
    activityId: '',
    title: 'Support Our Mental Health Hotline',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/support-hotline'
  },
  {
    lessonId: 'corporate-eap',
    activityId: '',
    title: 'Corporate EAP Program Support',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/task/corporate-eap'
  },
  {
    lessonId: 'community-management',
    activityId: '',
    title: 'Community Management - 10 Credits',
    rewardPoints: 10,
    estimatedDuration: '5 min',
    route: '/task/community-management'
  },
  {
    lessonId: 'content-creation',
    activityId: '',
    title: 'Content Creation for Mental Health - 20 Credits',
    rewardPoints: 20,
    estimatedDuration: '8 min',
    route: '/task/content-creation'
  },
  {
    lessonId: 'campus-awareness',
    activityId: '',
    title: 'Campus Mental Health Awareness',
    rewardPoints: 50,
    estimatedDuration: '10 min',
    route: '/task/campus-awareness'
  },
  {
    lessonId: 'fundraising',
    activityId: '',
    title: 'Fund Raising for Mantra Foundation',
    rewardPoints: 50,
    estimatedDuration: '5 min',
    route: '/task/fundraising'
  },
  {
    lessonId: 'recruit-interns',
    activityId: '',
    title: 'Help Recruit New Therapy Interns & Listeners',
    rewardPoints: 50,
    estimatedDuration: '5 min',
    route: '/task/recruit-interns'
  },
  {
    lessonId: 'refer-services',
    activityId: '',
    title: 'Refer Other Services & Earn',
    rewardPoints: 10,
    estimatedDuration: '2 min',
    route: '/task/refer-services'
  },
  {
    lessonId: 'converting-clients',
    activityId: '',
    title: 'Converting Trial Clients',
    rewardPoints: 10,
    estimatedDuration: '2 min',
    route: '/task/converting-clients'
  },
  {
    lessonId: 'insurance',
    activityId: '',
    title: 'Insurance for Therapy (US, UK & Canada)',
    rewardPoints: 10,
    estimatedDuration: '3 min',
    route: '/task/insurance'
  },
  {
    lessonId: 'earn-points',
    activityId: '',
    title: 'Earn Points for Every Session',
    rewardPoints: 5,
    estimatedDuration: '3 min',
    route: '/task/earn-points'
  },
  {
    lessonId: 'refer-provider',
    activityId: '',
    title: 'Refer a Provider & Earn Rewards',
    rewardPoints: 20,
    estimatedDuration: '3 min',
    route: '/task/refer-provider'
  },
  {
    lessonId: 'sales-partner',
    activityId: '',
    title: 'Becoming a Mantra Sales Partner',
    rewardPoints: 50,
    estimatedDuration: '5 min',
    route: '/task/sales-partner'
  },
  {
    lessonId: 'download-certificate',
    activityId: '',
    title: 'Download your therapy intern provider pathway certificate',
    rewardPoints: 0,
    estimatedDuration: '1 min',
    route: '/task/download-certificate'
  },
  {
    lessonId: 'provider-certificate',
    activityId: '',
    title: 'Download your Therapy Provider Pathway Certificate',
    rewardPoints: 0,
    estimatedDuration: '1 min',
    route: '/task/provider-certificate'
  }
];

