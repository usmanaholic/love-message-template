import { MessageWall } from "@/components/MessageWall";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-love-50">
      <header className="py-8 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">LoveBoard</h1>
        <p className="text-gray-600">Share your heartfelt messages with the world</p>
      </header>
      
      <main>
        <MessageWall />
      </main>
    </div>
  );
};

export default Index;