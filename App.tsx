import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/features/Dashboard';
import Chatbot from './components/features/Chatbot';
import DocumentationAnalyzer from './components/features/DocumentationAnalyzer';
import CodeEditor from './components/features/CodeEditor';
import ConversationPractice from './components/features/ConversationPractice';
import DebatePractice from './components/features/DebatePractice';
import InterviewPractice from './components/features/InterviewPractice';
import StudyGuideHub from './components/features/StudyGuideSection';
import GlobalChatbot from './components/layout/GlobalChatbot';
import { useAppStore } from './store';
import { HamburgerIcon } from './components/ui/icons/HamburgerIcon';

const App: React.FC = () => {
  const { 
    activeSection, 
    isSidebarCollapsed, 
    isMobileSidebarOpen, 
    setMobileSidebarOpen 
  } = useAppStore();


  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'study-guide':
        return <StudyGuideHub />;
      case 'chatbot':
        return <Chatbot />;
      case 'documentation':
        return <DocumentationAnalyzer />;
      case 'code-editor':
        return <CodeEditor />;
      case 'conversation':
        return <ConversationPractice />;
      case 'debate':
        return <DebatePractice />;
      case 'interview':
        return <InterviewPractice />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen bg-primary-dark text-light-text font-sans">
      {/* Mobile Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden" 
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <Sidebar />
      
      <div className={`flex flex-col h-full transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'md:pl-20' : 'md:pl-64'}`}>
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-primary-medium shadow-md sticky top-0 z-20">
          <button 
            onClick={() => setMobileSidebarOpen(true)} 
            className="p-2 rounded-md hover:bg-primary-light"
            aria-label="Open sidebar"
          >
            <HamburgerIcon />
          </button>
           <div className="flex items-center">
             <svg className="w-8 h-8 text-accent-pink" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 15V9C4 5.68629 6.68629 3 10 3H14C17.3137 3 20 5.68629 20 9V15C20 18.3137 17.3137 21 14 21H10C6.68629 21 4 18.3137 4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h1 className="text-xl font-bold ml-2 text-white">TechEnglish</h1>
          </div>
          <div className="w-10"></div> {/* Spacer to balance the hamburger icon */}
        </header>
        
        <main className="flex-1 p-6 sm:p-8 md:p-10 overflow-y-auto">
          {renderSection()}
        </main>
      </div>

      <GlobalChatbot />
    </div>
  );
};

export default App;