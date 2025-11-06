
import React from 'react';
import { Section } from '../../types';
import { 
  DashboardIcon, ChatIcon, DocsIcon, CodeIcon, MicIcon, DebateIcon, BriefcaseIcon, GuideIcon,
  ChevronDoubleLeftIcon,
  XIcon
} from '../ui/icons/index';
import { useAppStore } from '../../store';

const Sidebar: React.FC = () => {
  const { 
    activeSection, 
    setActiveSection, 
    isSidebarCollapsed, 
    toggleSidebarCollapsed,
    isMobileSidebarOpen,
    setMobileSidebarOpen
  } = useAppStore();

  const isExpanded = !isSidebarCollapsed;

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

  const sidebarClasses = `
    bg-primary-medium flex flex-col justify-between border-r border-primary-light
    transition-all duration-300 ease-in-out
    fixed top-0 left-0 h-full z-40 
    transform ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0
    w-64 ${isSidebarCollapsed ? 'md:w-20' : ''}
  `;

  return (
    <nav className={sidebarClasses}>
      <div>
        {/* Header */}
        <div className={`flex items-center mb-10 p-4 transition-all duration-300 ${isExpanded ? 'justify-between' : 'justify-center'}`}>
          <div className={`flex items-center overflow-hidden`}>
            <svg className="w-8 h-8 text-accent-pink flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 15V9C4 5.68629 6.68629 3 10 3H14C17.3137 3 20 5.68629 20 9V15C20 18.3137 17.3137 21 14 21H10C6.68629 21 4 18.3137 4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h1 className={`text-2xl font-bold ml-3 text-white whitespace-nowrap transition-opacity ${isSidebarCollapsed ? 'md:hidden' : ''}`}>TechEnglish</h1>
          </div>
          <button onClick={() => setMobileSidebarOpen(false)} className="md:hidden p-1 text-light-text hover:text-white" aria-label="Close sidebar">
            <XIcon />
          </button>
        </div>

        {/* Nav Items */}
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id} className="px-2 md:px-4">
              <button
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileSidebarOpen(false); // Close on selection
                }}
                className={`flex items-center w-full p-3 my-1 rounded-lg transition-colors duration-200 ${!isSidebarCollapsed ? '' : 'md:justify-center'} ${
                  activeSection === item.id
                    ? 'bg-accent-yellow text-dark-text'
                    : 'hover:bg-primary-light text-light-text'
                }`}
                title={item.label}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <span className={`ml-4 font-medium whitespace-nowrap ${isSidebarCollapsed ? 'md:hidden' : ''}`}>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Collapse Toggle */}
      <div className="hidden md:block p-4 border-t border-primary-light">
         <button
            onClick={toggleSidebarCollapsed}
            className={`flex items-center w-full p-3 rounded-lg hover:bg-primary-light transition-colors duration-200 text-light-text ${!isSidebarCollapsed ? '' : 'justify-center'}`}
            title={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
         >
            <ChevronDoubleLeftIcon className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? '' : 'rotate-180'}`} />
            <span className={`ml-4 font-medium whitespace-nowrap ${isSidebarCollapsed ? 'hidden' : ''}`}>Collapse</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
