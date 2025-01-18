import { motion } from "framer-motion";
import { Heart, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageProps {
  content: string;
  author: string;
  color?: string;
  className?: string;
}

export const Message = ({ content, author, color = "bg-white", className }: MessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={cn(
        "group relative p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl",
        color,
        className
      )}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="space-y-4">
        <p className="text-gray-800 text-lg leading-relaxed">{content}</p>
        <p className="text-gray-600 text-sm">{author}</p>
      </div>
      
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Heart className="w-4 h-4 text-love-500" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Share2 className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </motion.div>
  );
};