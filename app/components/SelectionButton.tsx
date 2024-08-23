import { ArrowUp, ArrowDown } from 'lucide-react';

const SelectionButton: React.FC<{ direction: 'more' | 'fewer', onClick: () => void }> = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-2 rounded-full ${
        direction === 'more' ? 'bg-green-500' : 'bg-red-500'
      } text-white`}
    >
      {direction === 'more' ? <ArrowUp /> : <ArrowDown />}
    </button>
  );

export default SelectionButton;