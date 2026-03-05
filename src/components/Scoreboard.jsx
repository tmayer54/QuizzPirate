export default function Scoreboard({ currentTeam, teamAName, teamBName, scores, penalties, penaltyFlash }) {
  return (
    <div className="scoreboard">
      <div className={`team-score ${currentTeam === 'A' ? 'active' : ''} ${penaltyFlash === 'A' ? 'penalty-flash' : ''}`}>
        <div className="team-name">{teamAName}</div>
        <div className="team-points">{scores.A}</div>
        {penalties.A > 0 && <div className="team-penalty">🍺 {penalties.A}s bu</div>}
      </div>
      <div className="vs-badge">VS</div>
      <div className={`team-score ${currentTeam === 'B' ? 'active' : ''} ${penaltyFlash === 'B' ? 'penalty-flash' : ''}`}>
        <div className="team-name">{teamBName}</div>
        <div className="team-points">{scores.B}</div>
        {penalties.B > 0 && <div className="team-penalty">🍺 {penalties.B}s bu</div>}
      </div>
    </div>
  );
}
