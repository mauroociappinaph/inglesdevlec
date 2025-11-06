
import React from 'react';

interface VocabItem {
    word: string;
    translation: string;
    example: string;
}

interface PhrasalVerbItem {
    verb: string;
    translation: string;
    example: string;
}

type Item = VocabItem | PhrasalVerbItem;

interface VocabularyTableProps {
  items: Item[];
  type: 'word' | 'verb';
}

const VocabularyTable: React.FC<VocabularyTableProps> = ({ items, type }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead className="bg-primary-dark/50">
                    <tr>
                        <th className="p-3 text-left font-semibold text-accent-yellow">{type === 'word' ? 'Word' : 'Verb'}</th>
                        <th className="p-3 text-left font-semibold text-accent-yellow">Translation</th>
                        <th className="p-3 text-left font-semibold text-accent-yellow">Tech Example</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} className="border-t border-primary-light">
                            <td className="p-3 font-mono text-accent-pink">{type === 'word' ? (item as VocabItem).word : (item as PhrasalVerbItem).verb}</td>
                            <td className="p-3">{item.translation}</td>
                            <td className="p-3 italic">"{item.example}"</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VocabularyTable;