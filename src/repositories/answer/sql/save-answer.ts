export const SAVE_ANSWER = `
INSERT INTO
  answer (session_id, question_id, value)
VALUES
  ($sessionId, $questionId, $value);
`