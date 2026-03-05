export default function EndScreen({ teamAName, teamBName, scores, penalties, onRestart }) {
  const aWins = scores.A > scores.B;
  const bWins = scores.B > scores.A;
  const tie = scores.A === scores.B;
  const winnerName = aWins ? teamAName : bWins ? teamBName : null;

  return (
    <div className="pirate-app">
      <div className="screen">
        <div className="header">
          <span className="skull">☠</span>
          <h1 className="title">FIN DU QUIZZ</h1>
        </div>
        <div className="end-card">
          {tie ? (
            <>
              <div style={{fontSize:'3rem'}}>⚓</div>
              <p className="tie-text" style={{margin:'12px 0'}}>Égalité parfaite !</p>
              <p style={{color:'#9b7a3a', fontStyle:'italic'}}>Les deux équipages méritent le même châtiment… et la même gloire.</p>
            </>
          ) : (
            <>
              <div className="winner-crown">👑</div>
              <p className="winner-title">Capitaine victorieux</p>
              <p className="winner-name">{winnerName}</p>
              <p style={{color:'#9b7a3a', fontStyle:'italic', marginTop:'8px'}}>Les mers vous appartiennent !</p>
            </>
          )}

          <div className="final-scores">
            <div className={`final-score-box ${aWins ? 'winner' : ''}`}>
              <div className="team-name">{teamAName}</div>
              <div className="final-score-num">{scores.A}</div>
              <div style={{fontSize:'0.75rem', color:'#7a5c2a', marginTop:'2px'}}>bonnes réponses</div>
              {penalties.A > 0 && <div className="final-penalty-num">🍺 {penalties.A}s de boisson</div>}
            </div>
            <div className={`final-score-box ${bWins ? 'winner' : ''}`}>
              <div className="team-name">{teamBName}</div>
              <div className="final-score-num">{scores.B}</div>
              <div style={{fontSize:'0.75rem', color:'#7a5c2a', marginTop:'2px'}}>bonnes réponses</div>
              {penalties.B > 0 && <div className="final-penalty-num">🍺 {penalties.B}s de boisson</div>}
            </div>
          </div>

          <button className="btn btn-gold" style={{width:'100%', marginTop:'8px'}} onClick={onRestart}>
            ⚓ Rejouer — Nouvelle Traversée
          </button>
        </div>
      </div>
    </div>
  );
}
