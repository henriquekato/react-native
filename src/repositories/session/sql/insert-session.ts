export const INSERT_SESSION = `
INSERT INTO session (id, played_at)
VALUES ($id, $playedAt);
`