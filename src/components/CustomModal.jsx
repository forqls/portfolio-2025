import React from 'react';
import ReactModal from 'react-modal';

const CloseIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.15908 8.15949C9.10459 7.21405 10.3773 6.66819 11.714 6.63483C13.0507 6.60146 14.3491 7.08313 15.3406 7.98021L15.5292 8.15949L18.4768 11.1082C19.4368 12.0699 19.9833 13.3685 19.9996 14.7272C20.016 16.086 19.501 17.3974 18.5644 18.3819C17.6279 19.3664 16.3438 19.9462 14.986 19.9977C13.6281 20.0492 12.3038 19.5683 11.2954 18.6575L11.1078 18.4783L8.89599 16.2665C8.70906 16.0789 8.60053 15.8272 8.59244 15.5625C8.58436 15.2979 8.67733 15.04 8.85247 14.8414C9.02762 14.6428 9.2718 14.5182 9.53542 14.4931C9.79904 14.468 10.0623 14.5442 10.2718 14.7062L10.3698 14.7927L12.5816 17.0044C13.1549 17.5811 13.9304 17.9118 14.7434 17.9262C15.5565 17.9407 16.3432 17.6378 16.9367 17.0819C17.5302 16.526 17.8838 15.7607 17.9224 14.9484C17.9611 14.1362 17.6818 13.3408 17.1437 12.731L17.003 12.582L14.0554 9.63434C13.765 9.34393 13.4203 9.11355 13.0409 8.95638C12.6615 8.7992 12.2548 8.71831 11.8441 8.71831C11.4335 8.71831 11.0268 8.7992 10.6474 8.95638C10.268 9.11355 9.92327 9.34393 9.6329 9.63434C9.43732 9.82978 9.17211 9.93952 8.89562 9.93943C8.61913 9.93933 8.354 9.8294 8.15856 9.63382C7.96312 9.43824 7.85338 9.17304 7.85348 8.89655C7.85357 8.62005 7.9635 8.35493 8.15908 8.15949ZM1.52586 1.52629C2.47137 0.58085 3.74409 0.0349933 5.08077 0.00162481C6.41746 -0.0317437 7.71583 0.449929 8.70733 1.34701L8.89599 1.52629L11.1067 3.73909C11.2937 3.92666 11.4022 4.17835 11.4103 4.44304C11.4183 4.70773 11.3254 4.96558 11.1502 5.16421C10.9751 5.36283 10.7309 5.48735 10.4673 5.51246C10.2037 5.53757 9.94037 5.4614 9.73088 5.29941L9.6329 5.2129L7.42217 3.00218C6.84783 2.43159 6.07457 2.10599 5.26506 2.0939C4.45555 2.0818 3.6729 2.38415 3.08177 2.93734C2.49064 3.49053 2.13711 4.25142 2.09556 5.05995C2.05401 5.86848 2.32767 6.66162 2.85897 7.27249L2.99968 7.42258L5.94836 10.3712C6.53474 10.9575 7.32994 11.2868 8.15908 11.2868C8.98823 11.2868 9.78343 10.9575 10.3698 10.3712C10.4666 10.2744 10.5815 10.1976 10.7079 10.1451C10.8344 10.0927 10.97 10.0657 11.1069 10.0656C11.2438 10.0656 11.3793 10.0925 11.5059 10.1449C11.6324 10.1972 11.7473 10.274 11.8441 10.3707C11.941 10.4675 12.0178 10.5824 12.0703 10.7089C12.1227 10.8353 12.1497 10.9709 12.1498 11.1078C12.1498 11.2447 12.1229 11.3803 12.0705 11.5068C12.0182 11.6333 11.9414 11.7482 11.8447 11.8451C10.8992 12.7905 9.62644 13.3364 8.28976 13.3697C6.95307 13.4031 5.6547 12.9214 4.6632 12.0243L4.4735 11.8451L1.52586 8.89639C0.548853 7.91909 0 6.59376 0 5.21186C0 3.82996 0.548853 2.50359 1.52586 1.52629Z" fill="black"/>
</svg>
);


const CustomModal = ({ isOpen, onClose, selectedProject }) => {
  if (!selectedProject) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="!outline-none"
      overlayClassName="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center"
      portalClassName="modal-portal"
      ariaHideApp={false}
    >
      <div className="relative w-[80vw] h-[90vh] flex items-start">
        <div
          className="w-full h-full invisible-scrollbar overflow-y-auto rounded-2xl shadow-xl bg-white"
          style={{ maxHeight: '90vh', position: 'relative' }}
          onClick={(e) => e.stopPropagation()}
        >
          {selectedProject && (
              <div>
                {/* --- 모달 상단 --- */}
                <div className="w-full text-center text-white pt-20 px-12 pb-12" style={{backgroundImage: `linear-gradient(to bottom right, ${selectedProject.gradient?.from || '#4A5568'}, ${selectedProject.gradient?.to || '#2D3748'})`}}>
                    <div className="inline-block w-full max-w-lg h-auto rounded-lg shadow-lg mb-11"> <img src={selectedProject.thumbnail} alt={`${selectedProject.title} 썸네일`} className="w-full h-full object-cover rounded-md" /></div>
                    <h2 className="text-[1.625rem] font-bold mb-6 text-white">{selectedProject.title}</h2>
                    <p className="text-base text-white mb-6">{selectedProject.description}</p>
                    <p className="text-sm font-medium text-white mb-6"><span>{selectedProject.period}</span><span className="ml-2.5">[{selectedProject.headcount}]</span></p>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {selectedProject.tags.map((tag, index) => ( <span key={index} className="px-3 py-1 bg-[#E9EDF5]/60 text-brand-dark rounded-full text-xs font-medium backdrop-blur-sm">{tag}</span> ))}
                    </div>
                </div>
                {/* --- 모달 하단 --- */}
                <div className="space-y-12 text-left p-12 md:p-16 lg:p-20">
                  {/* 주요 역할 섹션 */}
                  {selectedProject.myRole && selectedProject.myRole.length > 0 && (
                    <div>
                      <h3 className="text-[1.625rem] font-bold text-brand-dark mb-5 pb-2">주요 역할 (My Role)</h3>
                      {selectedProject.myRole.map((role, index) => (
                        <div key={index} className="mb-5">
                          <h4 className="text-lg font-bold text-brand-dark bg-[#EFEFEF] rounded-b-[14px] rounded-tr-[14px] py-[0.425rem] px-[1.2rem] mb-[5px] inline-block">{role.subtitle}</h4>
                          <ul className="list-disc list-inside space-y-1 text-base text-brand-dark pl-2.5">
                            {role.details?.map((detail, detailIndex) => ( <li key={detailIndex}>{detail}</li> ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 기술 스택 섹션 */}
                  {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                    <div>
                      <h3 className="text-[1.625rem] font-bold text-brand-dark mb-5 pb-2">기술 스택 (Tech Stack)</h3>
                      {selectedProject.techStack.map((stack, index) => (
                        <div key={index} className="mb-5">
                          <h4 className="text-lg font-bold text-brand-dark bg-[#EFEFEF] rounded-b-[14px] rounded-tr-[14px] py-[0.225rem] px-[1.2rem] mb-[5px] inline-block">{stack.category}</h4>
                          <p className="text-base text-brand-dark pl-2.5">{stack.tools}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* 핵심 기능 섹션 */}
                  {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                    <div>
                      <h3 className="text-[1.625rem] font-bold text-brand-dark mb-5 pb-2">핵심 기능</h3>
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <div key={index} className="mb-5">
                          <h4 className="text-lg font-bold text-brand-dark bg-[#EFEFEF] rounded-b-[14px] rounded-tr-[14px] py-[0.225rem] px-[1.2rem] mb-4 inline-block">{feature.subtitle}</h4>
                          <p className="text-base text-brand-dark pl-2.5 mb-3"><strong className="font-semibold">구현 내용:</strong> {feature.description}</p>
                          <p className="text-base text-brand-dark pl-2.5 mb-2 font-semibold">기술적 의사결정 및 과정:</p>
                          <ul className="list-disc list-inside space-y-1 text-base text-brand-dark pl-2.5">
                            {feature.process?.map((item, itemIndex) => ( <li key={itemIndex}>{item}</li> ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 문제 해결 경험 섹션 */}
                  {selectedProject.problemSolving && selectedProject.problemSolving.length > 0 && (
                    <div>
                      <h3 className="text-[1.625rem] font-bold text-brand-dark mb-5 pb-2">문제 해결 경험</h3>
                      {selectedProject.problemSolving.map((item, index) => (
                        <div key={index} className="mb-5">
                          <h4 className="text-lg font-bold text-brand-dark bg-[#EFEFEF] rounded-b-[14px] rounded-tr-[14px] py-[0.225rem] px-[1.2rem] mb-4 inline-block">{item.subtitle}</h4>
                          <p className="text-base text-brand-dark pl-2.5 mb-3"><strong className="font-semibold">문제 상황:</strong> {Array.isArray(item.problem) ? item.problem.join(' ') : item.problem}</p>
                          <div>
                            <p className="text-base text-brand-dark pl-2.5 mb-2 font-semibold">해결 과정:</p>
                            <ol className="list-lower-alpha list-inside space-y-1 text-base text-brand-dark pl-2.5 mb-3">
                              {item.solution?.map((step, stepIndex) => ( <li key={stepIndex}>{step}</li> ))}
                            </ol>
                          </div>
                          <p className="text-base text-brand-dark pl-2.5"><strong className="font-semibold">배운 점:</strong> {item.learned}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 더 자세한 개발 과정 섹션 */}
                  {(selectedProject.requirementsUrl || selectedProject.erdUrl || selectedProject.presentationUrl) && (
                    <div>
                      <h3 className="text-[1.625rem] font-bold text-brand-dark mb-5 pb-2">더 자세한 개발 과정이 궁금하다면?</h3>
                      <div className="flex flex-col items-start gap-2 pl-2.5">
                        
                        {selectedProject.requirementsUrl && (
                          <a href={selectedProject.requirementsUrl} target="_blank" rel="noopener noreferrer" className="text-base text-blue-600 hover:underline">
                            [요구사항 정의서 보기]
                          </a>
                        )}
                        {selectedProject.erdUrl && (
                          <a href={selectedProject.erdUrl} target="_blank" rel="noopener noreferrer" className="text-base text-blue-600 hover:underline">
                            [ERD 설계도 보기]
                          </a>
                        )}
                        {selectedProject.presentationUrl && (
                          <a href={selectedProject.presentationUrl} target="_blank" rel="noopener noreferrer" className="text-base text-blue-600 hover:underline">
                            [초기 기획 PPT 보기 (Gamma)]
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
        </div>

        {/* 버튼 그룹도 유지해줘유 */}
        <div className="absolute top-6 -right-20 flex flex-col items-center gap-4">
          <button onClick={onClose} className="text-brand-dark hover:opacity-70 transition-opacity mb-6">
            <CloseIcon />
          </button>

          {selectedProject.githubUrl && (
            <a
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-brand-dark hover:opacity-70 transition-opacity"
            >
              <div className="w-[3.125rem] h-[3.125rem] bg-white/60 rounded-full flex items-center justify-center backdrop-blur-[20px]">
                <GithubIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium">GitHub</span>
            </a>
          )}

          {selectedProject.deployUrl && (
            <a
              href={selectedProject.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-brand-dark hover:opacity-70 transition-opacity"
            >
              <div className="w-[3.125rem] h-[3.125rem] bg-white/60 rounded-full flex items-center justify-center backdrop-blur-[20px]">
                <ExternalLinkIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium">배포 링크</span>
            </a>
          )}
        </div>
      </div>
    </ReactModal>
  );
};

export default CustomModal;
