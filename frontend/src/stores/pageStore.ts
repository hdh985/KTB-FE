import { create } from 'zustand';

// Zustand 상태 타입 정의
interface PageState {
  currentPage: string; // 현재 페이지 경로
  setPage: (page: string) => void; // 페이지 변경 함수
}

// Zustand 스토어 생성
const usePageStore = create<PageState>((set) => ({
  currentPage: '/landing', // 기본값: 랜딩 페이지 경로
  setPage: (page) => set({ currentPage: page }), // 상태 업데이트 함수
}));

export default usePageStore;