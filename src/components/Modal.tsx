

interface ModalProps {
  isOpen: boolean;
  isClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, isClose }) => {
  if (!isOpen) return null; 

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={isClose} 
    >
      <div 
        className="bg-white w-96 h-64 p-6 rounded shadow-lg"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p>This is your modal content.</p>
      </div>
    </div>
  )
}

export default Modal
