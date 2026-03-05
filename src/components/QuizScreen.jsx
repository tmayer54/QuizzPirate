import Scoreboard from './Scoreboard';

export default function QuizScreen({
  question,
  current,
  total,
  currentTeam,
  currentTeamName,
  teamAName,
  teamBName,
  scores,
  penalties,
  penaltyFlash,
  correctFlash,
  showHint,
  showAnswer,
  onToggleHint,
  onRevealAnswer,
  onCorrect,
  onWrong,
  onSkip,
}) {
  const progress = (current / total) * 100;

  return (
    <div className="pirate-app">
      <div className="screen">
        <div className="header">
          <h1 className="title" style={{fontSize:'clamp(1.2rem, 4vw, 1.9rem)'}}>QUIZZ PIRATE</h1>
        </div>

        <Scoreboard
          currentTeam={currentTeam}
          teamAName={teamAName}
          teamBName={teamBName}
          scores={scores}
          penalties={penalties}
          penaltyFlash={penaltyFlash}
        />

        {/* Progress */}
        <div className="progress-row">
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{width: `${progress}%`}} />
          </div>
          <span className="progress-label">Q{current+1} / {total}</span>
        </div>

        {/* Question Card */}
        {question && (
          <div className={`question-card ${correctFlash ? 'correct-flash' : ''}`}>
            <div className="turn-badge">
              ⚓ Tour de {currentTeamName}
            </div>
            <div className="question-number">Question {current + 1}</div>
            <p className="question-text">{question.q}</p>

            {showHint && (
              <div className="hint-box">
                💡 Indice : {question.hint}
              </div>
            )}

            {showAnswer && (
              <div className="answer-reveal">
                <div className="answer-label">Réponse</div>
                <div className="answer-text">{question.a}</div>
              </div>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="btn-row" style={{marginBottom:'12px'}}>
          {!showAnswer ? (
            <>
              <button className="btn btn-ghost" onClick={onToggleHint}>
                {showHint ? '🙈 Cacher l\'indice' : '💡 Indice'}
              </button>
              <button className="btn btn-gold" onClick={onRevealAnswer}>
                👁 Révéler la réponse
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-green" onClick={onCorrect}>
                ✅ Bonne réponse !
              </button>
              <button className="btn btn-red" onClick={onWrong}>
                ❌ Raté — {currentTeamName} boit !
              </button>
            </>
          )}
        </div>

        {/* Skip */}
        <div className="btn-row">
          <button className="btn btn-ghost" style={{flex:1, fontSize:'0.8rem'}} onClick={onSkip}>
            ⏭ Passer la question
          </button>
        </div>
      </div>
    </div>
  );
}
