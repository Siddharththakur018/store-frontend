import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  isOpen: boolean;
  isClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, isClose, children}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex backdrop-blur-sm justify-center items-center">
      <div
        className="bg-white w-1/3 h-3/4 p-4 rounded-xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={isClose} className="flex cursor-pointer justify-end">
          <RxCross2 className="text-gray-700"/>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
