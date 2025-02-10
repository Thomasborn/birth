import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/css/present.css";

function GiftBox({ onClick }) {
  return (
    <motion.div
      className="relative w-32 h-32 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all transform"
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute w-8 h-full bg-red-600 top-0 left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute h-8 w-full bg-red-600 top-1/2 left-0 transform -translate-y-1/2"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
        🎀
      </div>
      <span className="absolute bottom-2 text-white text-sm font-bold">
        🎁 Click to Open!
      </span>
    </motion.div>
  );
}

function PresentTicket({ title, link }) {
  return (
    <motion.div
      className="w-60 h-32 bg-white border-4 border-dashed border-yellow-500 rounded-lg shadow-lg flex flex-col items-center justify-center p-2 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-3 py-1 bg-blue-500 text-white text-sm rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Open Ticket 🎟️
      </a>
    </motion.div>
  );
}

function Present() {
  const [opened, setOpened] = useState(false);
  const [wish, setWish] = useState("");

  const handleSendWhatsApp = () => {
    const phoneNumber = "6282255615257";
    const message = `Hy Thom, I want ${encodeURIComponent(wish)}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      {!opened ? (
        <GiftBox onClick={() => setOpened(true)} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <PresentTicket title="Ticket 1" link="https://pijarmahir.id/course/be-the-most-wanted-ux-researcher" />
          <PresentTicket title="Ticket 2" link="https://i.scdn.co/image/ab67616d0000b2739766f79668e76238a1c13e2c" />
          <PresentTicket title="Ticket 3" link="https://drive.google.com/drive/folders/18PNbi_uAZqawbpHZEqeXnp0RMHgk_BIf?usp=drive_link" />
        </div>
      )}

      {opened && (
        <div className="mt-4 w-full flex flex-col items-center">
          <input
            type="text"
            placeholder="Write your wish here..."
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm w-64 text-center text-sm"
          />
          <button
            onClick={handleSendWhatsApp}
            className="mt-3 px-4 py-2 bg-green-500 text-white text-sm rounded-lg shadow-md hover:bg-green-700 transition-all"
            disabled={!wish.trim()}
          >
            Send Wish to Me 💬
          </button>
        </div>
      )}
    </div>
  );
}

export default Present;
