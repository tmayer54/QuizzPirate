import questions from '../data/questions';

const MAX_PER_TEAM = Math.floor(questions.length / 2);

export default function IntroScreen({ teamAName, teamBName, questionsPerTeam, onTeamAChange, onTeamBChange, onQuestionsPerTeamChange, onStart }) {
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

          <div className="input-group" style={{marginTop: '16px'}}>
            <label className="input-label">🎯 Questions par équipage ({questionsPerTeam} × 2 = {questionsPerTeam * 2} questions au total)</label>
            <input
              type="range"
              className="input-range"
              min={1}
              max={MAX_PER_TEAM}
              value={questionsPerTeam}
              onChange={e => onQuestionsPerTeamChange(Number(e.target.value))}
            />
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.75rem', color:'#7a5c2a', marginTop:'4px'}}>
              <span>1</span>
              <span>{MAX_PER_TEAM}</span>
            </div>
          </div>

          <hr className="intro-rule" />

          <div className="rule-item"><span className="rule-icon">⚔️</span><span>Les équipages répondent en <strong>alternance</strong> — un ping, un pong.</span></div>
          <div className="rule-item"><span className="rule-icon">🍺</span><span>Mauvaise réponse = <strong>1 seconde de boisson</strong> pour l'équipage fautif.</span></div>
          <div className="rule-item"><span className="rule-icon">💡</span><span>L'animateur peut révéler un <strong>indice</strong> si l'équipage cale.</span></div>
          <div className="rule-item"><span className="rule-icon">🏆</span><span>Le score est la <strong>gloire</strong>, les pénalités sont le <strong>destin</strong>.</span></div>
          <div className="rule-item"><span className="rule-icon">⚓</span><span>{questionsPerTeam * 2} questions brassées aléatoirement — que les meilleurs survivent !</span></div>

          <hr className="intro-rule" />

          <button className="btn btn-gold" style={{width:'100%', fontSize:'1.1rem', padding:'16px'}} onClick={onStart}>
            ⚓ Lever l'Ancre — Commencer le Quizz !
          </button>
        </div>
      </div>
    </div>
  );
}
