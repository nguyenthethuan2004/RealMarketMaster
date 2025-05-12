import { FaComments, FaPhoneAlt } from "react-icons/fa";

export function SupportButtons() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-3 z-50">
      <button 
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600" 
        title="Chat"
        onClick={() => console.log("Chat button clicked")}
      >
        <FaComments size={20} />
      </button>
      <a 
        href="tel:0971411122" 
        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-700" 
        title="Gọi ngay"
      >
        <FaPhoneAlt size={18} />
      </a>
    </div>
  );
}
