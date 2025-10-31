import React from 'react';
import ReactDOM from 'react-dom/client';

import '@blueprintjs/core/lib/css/blueprint.css';

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Workspace } from 'polotno/canvas/workspace';
import { SidePanel } from 'polotno/side-panel';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { PagesTimeline } from 'polotno/pages-timeline';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { createStore } from 'polotno/model/store';
// 기본 
import { DEFAULT_SECTIONS, SectionTab } from 'polotno/side-panel';
import { TemplatesSection } from './templates-panel';

// import './fonts';

// 한국어 폰트 등록
import { registerKoreanFonts } from './fonts';

// 섹션 이름 한글 매핑
const koreanSectionNames = {
  text: '텍스트',
  elements: '요소',
  images: '이미지',
  background: '배경',
  backgrounds: '배경',
  layers: '레이어',
  filters: '필터',
  size: '크기',
  photos: '사진들',
  templates: '템플릿들',
  'custom-templates': 'IR 문서',
  upload: '업로드',
};

// DEFAULT_SECTIONS를 한글화
const koreanSections = DEFAULT_SECTIONS.map((section) => {
  const koreanName = koreanSectionNames[section.name] || section.name;
  const OriginalTab = section.Tab;
  
  return {
    ...section,
    Tab: (props) => {
      if (OriginalTab) {
        // 원본 Tab 컴포넌트를 렌더링하고 name prop에 한글 이름 전달
        // 원본 Tab이 SectionTab을 사용한다면 name prop이 적용됨
        return <OriginalTab {...props} name={koreanName} />;
      }
      // 원본 Tab이 없는 경우 SectionTab을 직접 사용
      return <SectionTab name={koreanName} {...props} />;
    },
  };
});

const store = createStore({
  // this is a demo key just for that project
  // (!) please don't use it in your projects
  // to create your own API key please go here: https://polotno.com/cabinet
  //key: 'nFA5H9elEytDyPyvKL7T',
  key: 'H52XUsPKHLwXCKWREQeX',
  
  
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
});
// 한국어 폰트
registerKoreanFonts(store);


store.addPage();

const sections = [TemplatesSection, ...koreanSections];

export const App = () => {
  return (
    <PolotnoContainer>
      <SidePanelWrap>
        <SidePanel
          store={store}
          sections={sections}
          defaultSection="custom-templates"
        />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <ZoomButtons store={store} />
        <PagesTimeline store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
