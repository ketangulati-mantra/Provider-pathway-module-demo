import { MANTRA_CONFIG } from './config';
import { getLesson } from './api';

/**
 * Centrally preserves all active URL query parameters (service, upa_id, uid, locale, etc.)
 * when navigating to a new path or route.
 */
export const preserveQueryParams = (targetPath: string): string => {
  if (typeof window === 'undefined' || !window.location) {
    return targetPath;
  }

  const currentSearch = window.location.search;
  if (!currentSearch) {
    return targetPath;
  }

  const [pathname, targetQuery] = targetPath.split('?');
  const currentParams = new URLSearchParams(currentSearch);

  if (targetQuery) {
    const targetParams = new URLSearchParams(targetQuery);
    targetParams.forEach((value, key) => {
      currentParams.set(key, value);
    });
  }

  const mergedSearch = currentParams.toString();
  return mergedSearch ? `${pathname}?${mergedSearch}` : pathname;
};

/**
 * Handles back routing. Falls back to home page/dev index if no callback is supplied.
 */
export const goBack = (onBackCallback?: () => void) => {
  if (onBackCallback) {
    onBackCallback();
  } else {
    window.location.replace(preserveQueryParams(MANTRA_CONFIG.dashboardUrl));
  }
};

/**
 * Redirects the browser directly to the Laravel dashboard workspace while preserving query context.
 */
export const goToDashboard = () => {
  window.location.replace(preserveQueryParams(MANTRA_CONFIG.dashboardUrl));
};

/**
 * Navigates popstate router to the selected task route pathway,
 * automatically preserving query parameters.
 */
export const goToLesson = (route: string) => {
  const fullRoute = preserveQueryParams(route);
  window.history.pushState(null, '', fullRoute);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

/**
 * Controls completion redirection actions, linking back to Laravel dashboard
 * or returning to home depending on configuration.
 */
export const redirectAfterCompletion = (lessonId: string, onBackCallback?: () => void) => {
  goToDashboard();
};
