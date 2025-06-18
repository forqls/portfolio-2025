const FixedBackground = () => {
  return (
    // z-index를 그룹으로 관리하기 위해 부모 div를 추가합니다.
    <div className="fixed inset-0 z-[-10]">
      {/* 1. 배경 이미지 레이어 */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/background.png)' }}
      />
      
      {/* 2. 그라데이션 오버레이 레이어 (이미지 위에 겹쳐짐) */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/20 from-10% to-[#E9EDF5]/80 to-90%"
      />
    </div>
  );
};

export default FixedBackground;