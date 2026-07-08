import { MANTRA_CONFIG } from './config';
import { getLesson } from './api';

/**
 * Handles back routing. Falls back to home page/dev index if no callback is supplied.
 */
export const goBack = (onBackCallback?: () => void) => {
  if (onBackCallback) {
    onBackCallback();
  } else {
    window.location.href = MANTRA_CONFIG.dashboardUrl;
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
  goToDashboard();
};
