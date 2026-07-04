import { MANTRA_CONFIG } from './config';
import { getLesson } from './api';

/**
 * Handles back routing. Falls back to home page/dev index if no callback is supplied.
 */
export const goBack = (onBackCallback?: () => void) => {
  if (onBackCallback) {
    onBackCallback();
  } else {
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
};

/**
 * Redirects the browser directly to the Laravel dashboard workspace.
 */
export const goToDashboard = () => {
  window.location.href = MANTRA_CONFIG.dashboardUrl;
};

/**
 * Navigates popstate router to the selected task route pathway.
 */
export const goToLesson = (route: string) => {
  window.history.pushState(null, '', route);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

/**
 * Controls completion redirection actions, linking back to Laravel dashboard
 * or returning to home depending on configuration.
 */
export const redirectAfterCompletion = (lessonId: string, onBackCallback?: () => void) => {
  const lesson = getLesson(lessonId);
  const points = lesson ? lesson.rewardPoints : 0;

  if (MANTRA_CONFIG.redirectAfterCompletion) {
    const targetUrl = `${MANTRA_CONFIG.dashboardUrl}?completed=${lessonId}&points=${points}`;
    window.location.href = targetUrl;
  } else {
    // If not redirecting externally, return back locally
    goBack(onBackCallback);
  }
};
