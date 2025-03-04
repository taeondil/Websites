import React, { useState, useEffect } from 'react';
import { GameHeader } from '../GameHeader';
import { motion } from 'framer-motion';
import { Trophy, AlertCircle, RotateCcw } from 'lucide-react';
import { GameRules } from './GameRules';

const WORDS = [
  'AMBIGUOUS', 'COHERENT', 'COMPREHENSIVE', 'CONDUCIVE', 'CONSISTENT',
  'CRUCIAL', 'ELUSIVE', 'FEASIBLE', 'INEVITABLE', 'INTRICATE',
  'OBSOLETE', 'PLAUSIBLE', 'PRAGMATIC', 'REDUNDANT', 'SUBTLE',
  'TANGIBLE', 'UBIQUITOUS', 'VERSATILE', 'VIABLE', 'COINCIDENTALLY',
  'CONSECUTIVELY', 'DELIBERATELY', 'EXCLUSIVELY', 'SPONTANEOUSLY', 'SUBSEQUENTLY',
  'SUPPOSEDLY', 'TACTFULLY', 'THOROUGHLY', 'UNANIMOUSLY', 'VIRTUALLY',
  'ABUNDANT', 'ACCUMULATE', 'ACCURATE', 'ACQUIRE', 'ADAPT', 'ADEQUATE', 'ADJACENT',
  'ADJUST', 'ADVANTAGEOUS', 'AFFECT', 'AGGREGATE', 'ALLOCATE', 'ALTER', 'ANALYZE',
  'ANTICIPATE', 'APPARENT', 'APPEND', 'APPROXIMATE', 'ARBITRARY', 'ASCERTAIN',
  'ASPECT', 'ASSEMBLE', 'ASSESS', 'ASSIGN', 'ASSIST', 'ASSOCIATE', 'ASSUME',
  'ASSURE', 'ATTAIN', 'ATTRIBUTE', 'AUTHORIZE', 'AVAILABLE', 'AVERAGE', 'BEHAVIOR',
  'BENEFICIAL', 'BIAS', 'BOND', 'BREACH', 'BRIEF', 'BULK', 'CAPABLE', 'CAPACITY',
  'CATEGORY', 'CEASE', 'CHALLENGE', 'CHANNEL', 'CHAPTER', 'CHARACTERISTIC', 'CHRONIC',
  'CIRCUMSTANCE', 'CIVIL', 'CLARIFY', 'CLASSIC', 'CLUE', 'COHESION', 'COLLAPSE',
  'COLLECTIVE', 'COLONY', 'COMMENCE', 'COMMENT', 'COMMODITY', 'COMMON', 'COMMUNICATE',
  'COMPARE', 'COMPETE', 'COMPILE', 'COMPLEMENT', 'COMPLEX', 'COMPONENT', 'COMPOUND',
  'COMPREHEND', 'COMPRISE', 'COMPUTE', 'CONCEPT', 'CONCLUDE', 'CONCURRENT', 'CONDUCT',
  'CONFER', 'CONFINE', 'CONFIRM', 'CONFLICT', 'CONFORM', 'CONSENT', 'CONSIDERABLE',
  'CONSIST', 'CONSTANT', 'CONSTITUTE', 'CONSTRUCT', 'CONSULT', 'CONSUME', 'CONTACT',
  'CONTEMPORARY', 'CONTEXT', 'CONTINUAL', 'CONTRACT', 'CONTRADICT', 'CONTRAST', 'CONTRIBUTE',
  'CONTROVERSY', 'CONVENE', 'CONVERGE', 'CONVERT', 'CONVEY', 'CONVINCE', 'COORDINATE',
  'CORRESPOND', 'CRITERIA', 'CRUCIAL', 'CUMULATIVE', 'CYCLE', 'DATA', 'DEBATE', 'DECADE',
  'DECLINE', 'DEDUCE', 'DEFINE', 'DEFINITE', 'DEMONSTRATE', 'DENOTE', 'DENY', 'DEPICT',
  'DERIVE', 'DESIGNATE', 'DESPITE', 'DETECT', 'DEVIATE', 'DEVICE', 'DEVOTE', 'DIMENSION',
  'DIMINISH', 'DISCRETE', 'DISCRIMINATE', 'DISPLAY', 'DISPOSE', 'DISPUTE', 'DISTINCT',
  'DISTORT', 'DISTRIBUTE', 'DIVERSE', 'DOCUMENT', 'DOMAIN', 'DOMINATE', 'DRAFT', 'DURATION',
  'DYNAMIC', 'ECONOMIC', 'EDIT', 'ELEMENT', 'ELIMINATE', 'EMERGE', 'EMPHASIZE', 'EMPIRICAL',
  'ENABLE', 'ENCOUNTER', 'ENHANCE', 'ENORMOUS', 'ENSURE', 'ENTITY', 'ENVIRONMENT', 'EQUATE',
  'EQUIP', 'EQUIVALENT', 'ERODE', 'ERROR', 'ESTABLISH', 'ESTIMATE', 'ETHIC', 'EVALUATE',
  'EVIDENT', 'EVOLVE', 'EXCEED', 'EXCLUDE', 'EXCLUSIVE', 'EXECUTE', 'EXERT', 'EXPAND',
  'EXPECT', 'EXPEND', 'EXPERT', 'EXPLICIT', 'EXPLOIT', 'EXPOSE', 'EXTERNAL', 'EXTRACT',
  'FACILITATE', 'FACTOR', 'FEATURE', 'FEDERAL', 'FEE', 'FINAL', 'FINANCE', 'FLEXIBLE',
  'FLUCTUATE', 'FOCUS', 'FORMAT', 'FORMULA', 'FOUND', 'FOUNDATION', 'FRAMEWORK', 'FUNCTION',
  'FUND', 'FUNDAMENTAL', 'FURTHER', 'GENERATE', 'GENERATION', 'GLOBE', 'GRADUAL', 'GRANT',
  'GRAPHIC', 'GUARANTEE', 'GUIDE', 'HENCE', 'HIERARCHY', 'HIGHLIGHT', 'HYPOTHESIS', 'IDENTICAL',
  'IDENTIFY', 'IDEOLOGY', 'IGNORE', 'ILLUSTRATE', 'IMAGE', 'IMMIGRANT', 'IMPACT', 'IMPLEMENT',
  'IMPLICATION', 'IMPLY', 'IMPOSE', 'INCIDENT', 'INCLINE', 'INCOME', 'INCOMPATIBLE', 'INCORPORATE',
  'INDICATE', 'INDIVIDUAL', 'INDUCE', 'INFER', 'INFLUENCE', 'INHIBIT', 'INITIAL', 'INITIATE',
  'INJECT', 'INNOVATE', 'INPUT', 'INSERT', 'INSIGHT', 'INSPECT', 'INSTANCE', 'INSTITUTE',
  'INSTRUCT', 'INSTRUMENT', 'INTEGRATE', 'INTEGRITY', 'INTELLECT', 'INTENSE', 'INTERACT',
  'INTERMEDIATE', 'INTERNAL', 'INTERPRET', 'INTERVAL', 'INTERVENE', 'INTIMATE', 'INTRINSIC',
  'INVEST', 'INVESTIGATE', 'INVOLVE', 'ISOLATE', 'ISSUE', 'ITEM', 'JUSTIFY', 'LABEL', 'LABOR',
  'LAYER', 'LEGAL', 'LEGISLATION', 'LEVY', 'LICENSE', 'LIKEWISE', 'LIMIT', 'LINK', 'LOCATE',
  'LOGIC', 'MAINTAIN', 'MAJOR', 'MANIPULATE', 'MANUAL', 'MARGIN', 'MECHANISM', 'MEDIA',
  'MEDIUM', 'MENTAL', 'METHOD', 'MIGRATE', 'MINIMUM', 'MINOR', 'MODIFY', 'MONITOR', 'MORAL',
  'MOTIVATE', 'MUTUAL', 'NARRATIVE', 'NEGATIVE', 'NETWORK', 'NEUTRAL', 'NORM', 'NOTION',
  'NOTWITHSTANDING', 'NUCLEAR', 'OBJECT', 'OBJECTIVE', 'OBLIGATION', 'OBTAIN', 'OBVIOUS',
  'OCCASION', 'OCCUPY', 'OCCUR', 'OFFSET', 'OMIT', 'ONGOING', 'OPPOSITE', 'OPTION', 'ORIENT',
  'ORIGIN', 'OUTPUT', 'OVERALL', 'OVERCOME', 'OVERLAP', 'OVERSEE', 'PARALLEL', 'PARAMETER',
  'PARTIAL', 'PARTICIPATE', 'PARTICULAR', 'PASSIVE', 'PERCEIVE', 'PERCENT', 'PERIOD',
  'PERSIST', 'PERSPECTIVE', 'PHASE', 'PHENOMENON', 'PHILOSOPHY', 'PHYSICAL', 'PLUS',
  'POLICY', 'PORTION', 'POSE', 'POSITIVE', 'POTENTIAL', 'PRACTICAL', 'PRECEDE', 'PRECISE',
  'PREDICT', 'PREDOMINANT', 'PREMIUM', 'PRESCRIBE', 'PRESENT', 'PRESUME', 'PREVIOUS',
  'PRIMARY', 'PRIME', 'PRINCIPAL', 'PRINCIPLE', 'PRIOR', 'PRIORITY', 'PROCEED', 'PROCESS',
  'PROFESSIONAL', 'PROHIBIT', 'PROJECT', 'PROMOTE', 'PROPORTION', 'PROSPECT', 'PROTOCOL',
  'PROVISION', 'PUBLIC', 'PUBLISH', 'PURCHASE', 'PURSUE', 'QUALIFY', 'QUOTE', 'RADICAL',
  'RANDOM', 'RANGE', 'RATIO', 'RATIONALE', 'REACT', 'RECOVER', 'RECRUIT', 'REDUCE', 'REFER',
  'REFINE', 'REFLECT', 'REGIME', 'REGION', 'REGISTER', 'REGULATE', 'REINFORCE', 'REJECT',
  'RELATE', 'RELATIVE', 'RELEVANT', 'RELIABLE', 'RELY', 'REMAIN', 'REMOVE', 'RENEW',
  'REPLACE', 'REPORT', 'REPRESENT', 'REPRODUCE', 'REQUIRE', 'RESEARCH', 'RESEMBLE',
  'RESIDENT', 'RESIST', 'RESOLVE', 'RESOURCE', 'RESPOND', 'RESTORE', 'RESTRAIN', 'RESTRICT',
  'RETAIN', 'REVEAL', 'REVENUE', 'REVERSE', 'REVISE', 'REVOLUTION', 'REVOLVE', 'RIGID',
  'ROLE', 'ROUTINE', 'SCALE', 'SCENARIO', 'SCHEDULE', 'SCHEME', 'SCOPE', 'SECTION',
  'SECTOR', 'SECURE', 'SEEK', 'SELECT', 'SEQUENCE', 'SERIES', 'SEVERE', 'SHIFT', 'SIGNAL',
  'SIGNIFICANT', 'SIMILAR', 'SIMULTANEOUS', 'SITE', 'SOLE', 'SOLVE', 'SOMEHOW', 'SOURCE',
  'SPECIFIC', 'SPECIFY', 'SPHERE', 'STABLE', 'STATUS', 'STRAIGHTFORWARD', 'STRATEGY',
  'STRESS', 'STRUCTURE', 'STYLE', 'SUBMIT', 'SUBORDINATE', 'SUBSTANTIAL', 'SUBSTITUTE',
  'SUCCEED', 'SUFFICIENT', 'SUM', 'SUMMARY', 'SUPPLEMENT', 'SUPPLY', 'SUPPORT', 'SUPPOSE',
  'SUPPRESS', 'SURVIVE', 'SYMBOL', 'SYMPTOM', 'SYNTHESIS', 'SYSTEM', 'TARGET', 'TASK',
  'TECHNIQUE', 'TEMPORARY', 'TEND', 'TERM', 'TERMINATE', 'TEXT', 'THEME', 'THEORY',
  'THEREFORE', 'THESIS', 'THREAT', 'THUS', 'TITLE', 'TOPIC', 'TRACE', 'TRADITION',
  'TRANSFER', 'TRANSFORM', 'TRANSMIT', 'TRANSPORT', 'TREND', 'TRIGGER', 'ULTIMATE',
  'UNDERGO', 'UNDERLINE', 'UNDERLYING', 'UNDERSTAND', 'UNDERTAKE', 'UNIFY', 'UNIQUE',
  'UNITE', 'UNIVERSAL', 'UNLESS', 'UNLIKE', 'UPDATE', 'UPHOLD', 'UTILIZE', 'VALID',
  'VALUE', 'VARIABLE', 'VARIATION', 'VARY', 'VERBAL', 'VERIFY', 'VERSION', 'VEST',
  'VIA', 'VIABLE', 'VIOLATE', 'VIRTUAL', 'VISIBLE', 'VISION', 'VISUAL', 'VOLUME',
  'VOLUNTARY', 'VULNERABLE', 'WHEREAS', 'WHEREBY', 'WHILE', 'WHOLE', 'WITHDRAW',
  'WITHSTAND', 'WITNESS', 'YIELD'
];

const MAX_TRIES = 6;

export default function HangmanGame() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(randomWord);
    setGuessedLetters(new Set());
    setWrongGuesses(0);
    setGameStatus('playing');
  };

  const guessLetter = (letter: string) => {
    if (gameStatus !== 'playing') return;

    const newGuessedLetters = new Set(guessedLetters);
    newGuessedLetters.add(letter);
    setGuessedLetters(newGuessedLetters);

    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      if (newWrongGuesses >= MAX_TRIES) {
        setGameStatus('lost');
      }
    } else {
      // Check if word is complete
      const isComplete = word.split('').every(l => newGuessedLetters.has(l));
      if (isComplete) {
        setGameStatus('won');
      }
    }
  };

  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className="w-12 h-12 border-b-2 border-white/50 flex items-center justify-center mx-1"
      >
        <span className="text-2xl font-bold text-white">
          {guessedLetters.has(letter) ? letter : '_'}
        </span>
      </motion.div>
    ));
  };

  const renderHangman = () => {
    const parts = [
      <circle key="head" cx="50" cy="25" r="10" className="stroke-white fill-none" />,
      <line key="body" x1="50" y1="35" x2="50" y2="70" className="stroke-white" />,
      <line key="leftArm" x1="50" y1="50" x2="20" y2="40" className="stroke-white" />,
      <line key="rightArm" x1="50" y1="50" x2="80" y2="40" className="stroke-white" />,
      <line key="leftLeg" x1="50" y1="70" x2="20" y2="90" className="stroke-white" />,
      <line key="rightLeg" x1="50" y1="70" x2="80" y2="90" className="stroke-white" />
    ];

    return (
      <svg width="100" height="100" className="stroke-2">
        {/* Base structure - always visible */}
        <line x1="10" y1="95" x2="90" y2="95" className="stroke-white" />
        <line x1="30" y1="95" x2="30" y2="5" className="stroke-white" />
        <line x1="30" y1="5" x2="50" y2="5" className="stroke-white" />
        <line x1="50" y1="5" x2="50" y2="15" className="stroke-white" />
        
        {/* Body parts - shown based on wrong guesses */}
        {parts.slice(0, wrongGuesses)}
      </svg>
    );
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
      <GameHeader onShowRules={() => setShowRules(true)} />

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Adam Asmaca</h2>
          <p className="text-white/60">Kelimeyi tahmin etmek için harflere tıklayın</p>
          <div className="text-emerald-400 font-medium mt-2">
            Kalan Hak: {MAX_TRIES - wrongGuesses}
          </div>
        </div>

        <div className="flex justify-center scale-150 mb-12">
          {renderHangman()}
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center">
            {renderWord()}
          </div>
        </div>

        {gameStatus === 'playing' ? (
          <div className="grid grid-cols-9 gap-2 max-w-2xl mx-auto">
            {alphabet.map((letter) => (
              <motion.button
                key={letter}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => guessLetter(letter)}
                disabled={guessedLetters.has(letter)}
                className={`w-10 h-10 rounded-lg font-bold transition-all duration-300 ${
                  guessedLetters.has(letter)
                    ? word.includes(letter)
                      ? 'bg-emerald-500 text-white'
                      : 'bg-red-500/50 text-white/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {letter}
              </motion.button>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            {gameStatus === 'won' ? (
              <>
                <div className="inline-block p-4 bg-emerald-500/20 rounded-full">
                  <Trophy className="w-12 h-12 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Tebrikler!</h3>
                <p className="text-emerald-400">Kelimeyi doğru tahmin ettiniz</p>
              </>
            ) : (
              <>
                <div className="inline-block p-4 bg-red-500/20 rounded-full">
                  <AlertCircle className="w-12 h-12 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Oyun Bitti!</h3>
                <p className="text-red-400">Doğru kelime: {word}</p>
              </>
            )}

            <button
              onClick={startNewGame}
              className="px-8 py-3 bg-indigo-500 text-white rounded-xl font-medium 
                       hover:bg-indigo-600 transition-all duration-300 flex items-center 
                       space-x-2 mx-auto"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Tekrar Oyna</span>
            </button>
          </motion.div>
        )}
      </div>
      <GameRules isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  );
}