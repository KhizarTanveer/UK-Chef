import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import CompanyOverview from './components/CompanyOverview';
import AboutProfile from './components/AboutProfile';
import MissionVision from './components/MissionVision';
import CoreCommitments from './components/CoreCommitments';
import PortfolioShowcase from './components/PortfolioShowcase';
import ProcessTimeline from './components/ProcessTimeline';
import QualityAssurance from './components/QualityAssurance';
import CorporateStrengths from './components/CorporateStrengths';
import PakistanPresence from './components/PakistanPresence';
import ContactSheet from './components/ContactSheet';

function App() {
  return (
    <SmoothScroll>
      <div className="noise-overlay"></div>
      <ScrollProgress />
      <div>
        <CompanyOverview />
        <AboutProfile />
        <MissionVision />
        <CoreCommitments />
        <PortfolioShowcase />
        <ProcessTimeline />
        <QualityAssurance />
        <CorporateStrengths />
        <PakistanPresence />
        <ContactSheet />
      </div>
    </SmoothScroll>
  );
}

export default App;
