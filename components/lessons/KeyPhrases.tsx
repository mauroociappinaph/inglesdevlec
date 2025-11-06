import React from 'react';
import LessonSection from '../LessonSection';
// FIX: Corrected the import path for icons.
import { VocabIcon } from '../ui/icons/index';
import { KeyPhraseData } from '../../types';
import PhraseCard from './PhraseCard';

interface KeyPhrasesProps {
    phrases: KeyPhraseData[];
}

const KeyPhrases: React.FC<KeyPhrasesProps> = ({ phrases }) => {
    return (
        <LessonSection title="Key Phrases in a Tech Context" icon={<VocabIcon />}>
            <div className="space-y-4">
                {phrases.map((p, i) => (
                    <PhraseCard
                        key={i}
                        phrase={p.original}
                        translation={p.translation}
                        context={p.techContext}
                    />
                ))}
            </div>
        </LessonSection>
    );
};

export default KeyPhrases;
