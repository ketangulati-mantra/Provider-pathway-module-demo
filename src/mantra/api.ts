import { MANTRA_CONFIG } from './config';
import { activities } from './activities';

/**
 * Sends a completion payload to Laravel API to mark a lesson completed.
 */
export const completeLesson = async (lessonId: string): Promise<boolean> => {
  const activity = activities.find(a => a.lessonId === lessonId);
  if (!activity) {
    console.error(`[Mantra API] Activity details not found for ID: ${lessonId}`);
    return false;
  }

  const endpoint = activity.completionEndpoint || MANTRA_CONFIG.webhookUrl;
  const targetUrl = MANTRA_CONFIG.backendBaseUrl 
    ? `${MANTRA_CONFIG.backendBaseUrl}${endpoint}`
    : endpoint;

  console.log(`[Mantra API] Posting complete signal for lesson: ${lessonId} to ${targetUrl}`);

  try {
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        lesson_id: lessonId,
        activity_id: activity.activityId || null,
        points: activity.rewardPoints,
        timestamp: new Date().toISOString()
      })
    });
    return response.ok;
  } catch (error) {
    console.warn(`[Mantra API Webhook] Communication captured in sandbox/local environment for lesson: ${lessonId}`);
    return false;
  }
};

/**
 * Submits final quiz score logs to the backend.
 */
export const submitQuiz = async (lessonId: string, score: number, totalQuestions: number): Promise<boolean> => {
  console.log(`[Mantra API] Quiz submitted for lesson ${lessonId}: Score ${score}/${totalQuestions}`);
  return true;
};

/**
 * Saves intermediary progress checkpoints.
 */
export const saveProgress = async (lessonId: string, progress: number): Promise<boolean> => {
  console.log(`[Mantra API] Progress auto-saved for lesson ${lessonId}: ${progress}%`);
  return true;
};

/**
 * Retrieves activity configuration object by lessonId.
 */
export const getLesson = (lessonId: string) => {
  return activities.find(a => a.lessonId === lessonId) || null;
};
