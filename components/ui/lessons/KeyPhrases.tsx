import React, { useState } from 'react';
import LessonSection from '../LessonSection';
import { VocabIcon } from '../icons/index';
import { KeyPhraseData } from '../../../types';
import PhraseCard from './PhraseCard';

interface KeyPhrasesProps {
    phrases: KeyPhraseData[];
}

const KeyPhrases: React.FC<KeyPhrasesProps> = ({ phrases }) => {
    const [playbackRate, setPlaybackRate] = useState(0.85);

    return (
        <LessonSection title="Key Phrases in a Tech Context" icon={<VocabIcon />}>
            <div className="mb-6 bg-primary-dark/30 p-4 rounded-lg border border-primary-light/30">
                <label htmlFor="playbackRate" className="block text-sm font-medium text-light-text mb-2">
                    Playback Speed: <span className="font-bold text-accent-yellow">{playbackRate.toFixed(2)}x</span>
                </label>
                <input
                    id="playbackRate"
                    type="range"
                    min="0.7"
                    max="1.0"
                    step="0.05"
                    value={playbackRate}
                    onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                    className="w-full h-2 bg-primary-light rounded-lg appearance-none cursor-pointer accent-accent-pink"
                />
            </div>
            <div className="space-y-4">
                {phrases.map((p, i) => (
                    <PhraseCard
                        key={i}
                        phrase={p.original}
                        translation={p.translation}
                        context={p.techContext}
                        playbackRate={playbackRate}
                    />
                ))}
            </div>
        </LessonSection>
    );
};

export default KeyPhrases;