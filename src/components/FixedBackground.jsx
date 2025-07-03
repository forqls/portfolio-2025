// src/components/FixedBackground.jsx

const FixedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-10]">
      {/* 1. 배경 이미지 레이어 (변경 없음) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/background.png)' }}
      />
      
      {/* ▼▼▼▼▼ 2. 그라데이션 오버레이 레이어: from-1%로 수정 ▼▼▼▼▼ */}
      <div 
      className="fixed inset-0 z-[-10] bg-[#E9EDF5]"
    />
    </div>
  );
};

export default FixedBackground;