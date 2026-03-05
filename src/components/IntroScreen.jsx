import questions from '../data/questions';

export default function IntroScreen({ teamAName, teamBName, onTeamAChange, onTeamBChange, onStart }) {
  return (
    <div className="pirate-app">
      <div className="screen">
        <div className="header">
          <span className="skull">☠</span>
          <h1 className="title">QUIZZ PIRATE</h1>
          <p className="subtitle">Affrontement en eaux troubles — Ping Pong des Mers</p>
        </div>

        <div className="intro-card">
          <div className="inputs-row">
            <div className="input-group">
              <label className="input-label">⚓ Nom de l'Équipage A</label>
              <input
                className="input-field"
                value={teamAName}
                onChange={e => onTeamAChange(e.target.value)}
                placeholder="Équipage A"
              />
            </div>
            <div className="input-group">
              <label className="input-label">🏴‍☠️ Nom de l'Équipage B</label>
              <input
                className="input-field"
                value={teamBName}
                onChange={e => onTeamBChange(e.target.value)}
                placeholder="Équipage B"
              />
            </div>
          </div>

          <hr className="intro-rule" />

          <div className="rule-item"><span className="rule-icon">⚔️</span><span>Les équipages répondent en <strong>alternance</strong> — un ping, un pong.</span></div>
          <div className="rule-item"><span className="rule-icon">🍺</span><span>Mauvaise réponse = <strong>1 seconde de boisson</strong> pour l'équipage fautif.</span></div>
          <div className="rule-item"><span className="rule-icon">💡</span><span>L'animateur peut révéler un <strong>indice</strong> si l'équipage cale.</span></div>
          <div className="rule-item"><span className="rule-icon">🏆</span><span>Le score est la <strong>gloire</strong>, les pénalités sont le <strong>destin</strong>.</span></div>
          <div className="rule-item"><span className="rule-icon">⚓</span><span>{questions.length} questions brassées aléatoirement — que les meilleurs survivent !</span></div>

          <hr className="intro-rule" />

          <button className="btn btn-gold" style={{width:'100%', fontSize:'1.1rem', padding:'16px'}} onClick={onStart}>
            ⚓ Lever l'Ancre — Commencer le Quizz !
          </button>
        </div>
      </div>
    </div>
  );
}
