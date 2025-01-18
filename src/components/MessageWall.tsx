import { useState } from "react";
import { Message } from "./Message";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const SAMPLE_MESSAGES = [
  {
    id: 1,
    content: "You make every day brighter just by being you.",
    author: "Sarah",
    color: "bg-love-50",
  },
  {
    id: 2,
    content: "Thank you for always being there when I need you most.",
    author: "Michael",
    color: "bg-purple-50",
  },
  {
    id: 3,
    content: "Your smile lights up my world in ways words can't describe.",
    author: "Emma",
    color: "bg-blue-50",
  },
];

export const MessageWall = () => {
  const [messages] = useState(SAMPLE_MESSAGES);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-love-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {messages.map((message) => (
            <Message
              key={message.id}
              content={message.content}
              author={message.author}
              color={message.color}
            />
          ))}
        </motion.div>
      </div>
      
      <button className="fixed bottom-8 right-8 bg-love-500 text-white p-4 rounded-full shadow-lg hover:bg-love-600 transition-colors duration-300">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};