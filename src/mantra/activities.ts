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
    title: 'Download & Review MantraPartner Mobile App',
    rewardPoints: 5,
    estimatedDuration: '1 min',
    route: '/task/mobile-app'
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
    lessonId: 'using-mantra',
    activityId: '',
    title: 'Using Mantra for Your Clients',
    rewardPoints: 10,
    estimatedDuration: '3 min',
    route: '/task/using-mantra'
  },
  {
    lessonId: 'premium-provider',
    activityId: '',
    title: 'What is a Premium Provider?',
    rewardPoints: 15,
    estimatedDuration: '5 min',
    route: '/task/premium-provider'
  }
];
