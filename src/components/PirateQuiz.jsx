import { useState, useEffect } from 'react';
import questions from '../data/questions';
import IntroScreen from './IntroScreen';
import QuizScreen from './QuizScreen';
import EndScreen from './EndScreen';
import '../styles/pirate.css';

const TEAM_A = "Équipage A";
const TEAM_B = "Équipage B";

export default function PirateQuiz() {
  const [screen, setScreen] = useState("intro");
  const [teamAName, setTeamAName] = useState(TEAM_A);
  const [teamBName, setTeamBName] = useState(TEAM_B);
  const [current, setCurrent] = useState(0);
  const [currentTeam, setCurrentTeam] = useState("A");
  const [scores, setScores] = useState({ A: 0, B: 0 });
  const [penalties, setPenalties] = useState({ A: 0, B: 0 });
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [penaltyFlash, setPenaltyFlash] = useState(null);
  const [correctFlash, setCorrectFlash] = useState(false);
  const [shuffled, setShuffled] = useState([]);

  useEffect(() => {
    setShuffled([...questions].sort(() => Math.random() - 0.5));
  }, []);

  const currentTeamName = currentTeam === "A" ? teamAName : teamBName;

  const next = () => {
    setShowAnswer(false);
    setShowHint(false);
    if (current + 1 >= shuffled.length) {
      setScreen("end");
      return;
    }
    setCurrent(c => c + 1);
    setCurrentTeam(t => t === "A" ? "B" : "A");
  };

  const handleCorrect = () => {
    setCorrectFlash(true);
    setTimeout(() => setCorrectFlash(false), 700);
    setScores(s => ({ ...s, [currentTeam]: s[currentTeam] + 1 }));
    setTimeout(next, 600);
  };

  const handleWrong = () => {
    setPenaltyFlash(currentTeam);
    setTimeout(() => setPenaltyFlash(null), 900);
    setPenalties(p => ({ ...p, [currentTeam]: p[currentTeam] + 1 }));
    setTimeout(next, 800);
  };

  const restart = () => {
    setShuffled([...questions].sort(() => Math.random() - 0.5));
    setCurrent(0);
    setCurrentTeam("A");
    setScores({ A: 0, B: 0 });
    setPenalties({ A: 0, B: 0 });
    setShowAnswer(false);
    setShowHint(false);
    setScreen("quiz");
  };

  if (screen === "intro") {
    return (
      <IntroScreen
        teamAName={teamAName}
        teamBName={teamBName}
        onTeamAChange={v => setTeamAName(v || TEAM_A)}
        onTeamBChange={v => setTeamBName(v || TEAM_B)}
        onStart={() => setScreen("quiz")}
      />
    );
  }

  if (screen === "end") {
    return (
      <EndScreen
        teamAName={teamAName}
        teamBName={teamBName}
        scores={scores}
        penalties={penalties}
        onRestart={restart}
      />
    );
  }

  return (
    <QuizScreen
      question={shuffled[current]}
      current={current}
      total={shuffled.length}
      currentTeam={currentTeam}
      currentTeamName={currentTeamName}
      teamAName={teamAName}
      teamBName={teamBName}
      scores={scores}
      penalties={penalties}
      penaltyFlash={penaltyFlash}
      correctFlash={correctFlash}
      showHint={showHint}
      showAnswer={showAnswer}
      onToggleHint={() => setShowHint(h => !h)}
      onRevealAnswer={() => setShowAnswer(true)}
      onCorrect={handleCorrect}
      onWrong={handleWrong}
      onSkip={next}
    />
  );
}
