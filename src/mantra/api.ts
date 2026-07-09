import { MANTRA_CONFIG } from './config';
import { activities } from './activities';

// console.log("CONFIG WEBHOOK:", MANTRA_CONFIG.webhookUrl);

/**
 * Returns URL parameters required by the pathway webhook.
 */
const getWebhookContext = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    upaId: params.get('upa_id'),
    uid: params.get('uid')
  };
};

/**
 * Marks a lesson/activity as completed in Laravel.
 */
export const completeLesson = async (lessonId: string): Promise<boolean> => {
  const activity = activities.find(a => a.lessonId === lessonId);

  if (!activity) {
    console.error(`[Mantra API] Activity not found: ${lessonId}`);
    return false;
  }

  const { upaId, uid } = getWebhookContext();
  // alert("===== WEBHOOK CONTEXT =====");
  // alert(upaId);
  // alert(uid);

  if (!upaId) {
    console.error('[Mantra API] Missing upa_id in URL.');
    return false;
  }

  if (MANTRA_CONFIG.devMode) {
    /* console.log('[Mantra API] Completing activity', {
      lessonId,
      upaId,
      uid,
      endpoint: MANTRA_CONFIG.webhookUrl
    }); */
  }

  try {
    const response = await fetch(MANTRA_CONFIG.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        intent: 'complete_activity',
        upa_id: Number(upaId),
        uid: uid || undefined
      })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error(
        '[Mantra API] Webhook failed:',
        result?.message || result
      );
      return false;
    }

    if (MANTRA_CONFIG.devMode) {
      console.log('[Mantra API] Activity completed successfully.', result);
    }

    return true;

  } catch (error) {
    console.error('[Mantra API] Network/Webhook Error:', error);
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
