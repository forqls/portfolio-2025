import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';


const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="!outline-none"
      overlayClassName="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center"
      portalClassName="modal-portal"
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};

export default CustomModal;
