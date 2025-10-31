// ========================================
// 파일 1: fonts.js
// Polotno 커뮤니티 기반 핵심 한글 폰트 10개
// ========================================

// Polotno용 한글 폰트 데이터 (핵심 10개)
export const koreanFonts = [
  {
    fontFamily: 'Pretendard',
    fonts: [
      { url: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@latest/dist/web/static/woff2/Pretendard-Regular.woff2', weight: 400 },
      { url: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@latest/dist/web/static/woff2/Pretendard-Bold.woff2', weight: 700 }
    ]
  },
  {
    fontFamily: 'Noto Sans KR',
    fonts: [
      { url: 'https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5CgmOsn7uwpYi.woff2', weight: 400 },
      { url: 'https://fonts.gstatic.com/s/notosanskr/v36/PbykFmXiEBPT4ITbgNA5Cgm-4jvNrQ7j5g.woff2', weight: 700 }
    ]
  },
  {
    fontFamily: 'Nanum Gothic',
    fonts: [
      { url: 'https://fonts.gstatic.com/s/nanumgothic/v24/PN_3Rfi-oW3hYwmKDpxS7F_D_9Q.woff2', weight: 400 },
      { url: 'https://fonts.gstatic.com/s/nanumgothic/v24/PN_oRfi-oW3hYwmKDpxS7F_LQv37zl8.woff2', weight: 700 }
    ]
  },
  {
    fontFamily: 'Nanum Myeongjo',
    fonts: [
      { url: 'https://fonts.gstatic.com/s/nanummyeongjo/v23/9Btx3DZF0dXLMZlywRbVRNhxy1LreHQ.woff2', weight: 400 },
      { url: 'https://fonts.gstatic.com/s/nanummyeongjo/v23/9Bty3DZF0dXLMZlywRbVRNhxy2pXV1A0pAo.woff2', weight: 700 }
    ]
  },
  {
    fontFamily: 'Noto Serif KR',
    fonts: [
      { url: 'https://fonts.gstatic.com/s/notoserifkr/v21/3JnmSDn90Gmq2mr3blnHaTZXTihC8O1ZNH1ahck.woff2', weight: 400 },
      { url: 'https://fonts.gstatic.com/s/notoserifkr/v21/3JnmSDn90Gmq2mr3blnHaTZXTihC8O11NH1ahck.woff2', weight: 700 }
    ]
  },
  {
    fontFamily: 'Nanum Gothic Coding',
    fonts: [
      { url: 'https://fonts.gstatic.com/s/nanumgothiccoding/v22/8QIVdjzHisX_8vv59_xMxtPFW4IXROjPg4gy.woff2', weight: 400 },
      { url: 'https://fonts.gstatic.com/s/nanumgothiccoding/v22/8QIYdjzHisX_8vv59_xMxtPFW4IXROpW93cxXA.woff2', weight: 700 }
    ]
  },
  {
    fontFamily: 'IBM Plex Sans KR',
    fonts: [
      { url: 'https://fonts.gstatic.com/s/ibmplexsanskr/v10/vEFM2-VJISZe3O_rc3ZVYh4aTwNOyra_X5zCqmDr.woff2', weight: 400 },
      { url: 'https://fonts.gstatic.com/s/ibmplexsanskr/v10/vEFM2-VJISZe3O_rc3ZVYh4aTwNOyra_f5_Cqmvc.woff2', weight: 700 }
    ]
  },
  {
    fontFamily: 'Gothic A1',
    fonts: [
      { url: 'https://fonts.gstatic.com/s/gothica1/v14/CSR74z5ZnPydRjlCCwlCCMcqYtd2vfwk.woff2', weight: 400 },
      { url: 'https://fonts.gstatic.com/s/gothica1/v14/CSR44z5ZnPydRjlCCwlCpOYKSPl6tOU9Eg.woff2', weight: 700 }
    ]
  },
  {
    fontFamily: 'Nanum Pen Script',
    fonts: [
      { url: 'https://fonts.gstatic.com/s/nanumpenscript/v22/daaDSSYiLGqEal3MvdA_FOL_3FkN2z7-aMFCcTU.woff2', weight: 400 }
    ]
  },
  {
    fontFamily: 'Nanum Brush Script',
    fonts: [
      { url: 'https://fonts.gstatic.com/s/nanumbrushscript/v22/wXK2E2wfpokopxzthSqPbcR5_gVaxazyjqBr1lO97Q.woff2', weight: 400 }
    ]
  }
];

// Polotno Store에 폰트 등록하는 함수
export const registerKoreanFonts = (store) => {
  koreanFonts.forEach(font => {
    try {
      store.addFont({
        fontFamily: font.fontFamily,
        fonts: font.fonts
      });
    } catch (error) {
      console.warn(`폰트 등록 실패: ${font.fontFamily}`, error);
    }
  });
  
  console.log(`총 ${koreanFonts.length}개의 한글 폰트가 등록되었습니다.`);
};

export default koreanFonts;
