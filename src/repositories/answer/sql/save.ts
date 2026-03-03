export const SAVE_ANSWER = `
INSERT INTO
  answer (question_id, answer)
VALUES ($questionId, $answer);
`
