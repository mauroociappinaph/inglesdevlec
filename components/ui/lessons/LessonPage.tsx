import React from 'react';
import { LessonData } from '../../../types';
import LessonLayout from './LessonLayout';
import Introduction from './Introduction';
import LessonSection from '../LessonSection';
import { GrammarIcon, VocabIcon } from '../icons/index';
import { GrammarCard, QuickCheck } from './GrammarComponents';
import KeyPhrases from './KeyPhrases';
import VocabularyTable from './VocabularyTable';
import ReadingPractice from './ReadingPractice';
import ListeningPractice from './ListeningPractice';
import SpeakingPractice from './SpeakingPractice';
import WritingPractice from './WritingPractice';
import SummaryReview from './SummaryReview';

interface LessonPageProps {
  lesson: LessonData;
  onBack: () => void;
}

const LessonPage: React.FC<LessonPageProps> = ({ lesson, onBack }) => {
  return (
    <LessonLayout
      onBack={onBack}
      title={lesson.title}
      description={lesson.description}
    >
      <Introduction 
        text={lesson.introduction.text}
        objectives={lesson.introduction.objectives}
      />

      <LessonSection title="Grammar Focus" icon={<GrammarIcon />}>
        <div className="space-y-6">
          {lesson.grammar.map((card, i) => (
            <GrammarCard key={i} title={card.title}>
              {card.content.map((p, j) => <div key={j} dangerouslySetInnerHTML={{ __html: p }} />)}
              {card.quickCheck && <QuickCheck {...card.quickCheck} />}
            </GrammarCard>
          ))}
        </div>
      </LessonSection>

      {lesson.keyPhrases && <KeyPhrases phrases={lesson.keyPhrases} />}

      {lesson.keyWords && (
        <LessonSection title="Key Words" icon={<VocabIcon />}>
          <VocabularyTable items={lesson.keyWords} type="word" />
        </LessonSection>
      )}

      {lesson.phrasalVerbs && (
        <LessonSection title="Phrasal Verbs" icon={<VocabIcon />}>
          <VocabularyTable items={lesson.phrasalVerbs} type="verb" />
        </LessonSection>
      )}

      {lesson.reading && (
        <ReadingPractice
          title={lesson.reading.title}
          text={<div dangerouslySetInnerHTML={{ __html: lesson.reading.text }} />}
          questions={lesson.reading.questions}
        />
      )}

      {lesson.listening && (
        <LessonSection title={lesson.listening.title} icon={<VocabIcon />}>
            <ListeningPractice
                dialogueTurns={lesson.listening.dialogueTurns}
                correctAnswers={lesson.listening.correctAnswers}
                dialogue={<div dangerouslySetInnerHTML={{ __html: lesson.listening.dialogue }} />}
            />
        </LessonSection>
      )}

      {lesson.speaking && <SpeakingPractice scenario={lesson.speaking.scenario} />}

      {lesson.writing && (
        <WritingPractice
            title={lesson.writing.title}
            scenario={<div dangerouslySetInnerHTML={{ __html: lesson.writing.scenario }} />}
            guidance={
                typeof lesson.writing.guidance === 'string' ? <div dangerouslySetInnerHTML={{ __html: lesson.writing.guidance }} /> :
                lesson.writing.guidance ? <>
                    <h4 className="font-semibold text-white mt-4">{lesson.writing.guidance.title}</h4>
                    <ol className="list-decimal list-inside mt-2 text-sm">
                       {lesson.writing.guidance.points.map((p, i) => <li key={i}>{p}</li>)}
                    </ol>
                </> : null
            }
        />
      )}

      {lesson.summary && <SummaryReview points={lesson.summary.points} />}

    </LessonLayout>
  );
};

export default LessonPage;