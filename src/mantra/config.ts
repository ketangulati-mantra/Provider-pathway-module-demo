/**
 * Mantra Care Platform Configuration
 * Single source of truth for configurable backend URLs, redirect behaviors, and flags.
 */
export const MANTRA_CONFIG = {
  // Base dashboard URL for Mantra Care
  dashboardUrl: 'https://provider.mantracare.org/dashboard',

  // Backend API Base URL (empty for local relative paths)
  backendBaseUrl: '',

  // Endpoint to send webhook notifications when a lesson is marked done
  webhookUrl: '/api/academy/complete',

  // Flag to control redirection back to Laravel vs returning to local homepage
  redirectAfterCompletion: false,

  // Enable/disable development log widgets and controls
  devMode: true
};
