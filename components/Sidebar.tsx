
import React from 'react';
import { Section } from '../types';
// FIX: Corrected the import path for icons.
import { DashboardIcon, ChatIcon, DocsIcon, CodeIcon, MicIcon, DebateIcon, BriefcaseIcon, GuideIcon } from './icons/index';
import { useAppStore } from '../store';

const Sidebar: React.FC = () => {
  const { activeSection, setActiveSection } = useAppStore();

  // FIX: Changed JSX.Element to React.ReactElement to resolve namespace issue.
  const navItems: { id: Section; label: string; icon: React.ReactElement }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'study-guide', label: 'Study Guide', icon: <GuideIcon /> },
    { id: 'chatbot', label: 'AI Chatbot', icon: <ChatIcon /> },
    { id: 'documentation', label: 'Docs Analyzer', icon: <DocsIcon /> },
    { id: 'code-editor', label: 'Code Editor', icon: <CodeIcon /> },
    { id: 'conversation', label: 'Conversation', icon: <MicIcon /> },
    { id: 'debate', label: 'Debate Practice', icon: <DebateIcon /> },
    { id: 'interview', label: 'Interview Practice', icon: <BriefcaseIcon /> },
  ];

  return (
    <nav className="w-20 md:w-64 bg-primary-medium p-2 md:p-4 flex flex-col justify-between border-r border-primary-light">
      <div>
        <div className="flex items-center justify-center md:justify-start mb-10 p-2">
           <svg className="w-8 h-8 text-accent-pink" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 15V9C4 5.68629 6.68629 3 10 3H14C17.3137 3 20 5.68629 20 9V15C20 18.3137 17.3137 21 14 21H10C6.68629 21 4 18.3137 4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <h1 className="hidden md:block text-2xl font-bold ml-3 text-white">TechEnglish</h1>
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center w-full p-3 my-2 rounded-lg transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'bg-accent-yellow text-dark-text'
                    : 'hover:bg-primary-light'
                }`}
              >
                {item.icon}
                <span className="hidden md:block ml-4 font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;