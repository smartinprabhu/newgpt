import React from 'react';

interface AgentCardProps {
  title: string;
  subtitles: string[];
  link?: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ title, subtitles, link }) => {
  const cardContent = (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <ul>
        {subtitles.map((subtitle, index) => (
          <li key={index} className="text-gray-600">{subtitle}</li>
        ))}
      </ul>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default AgentCard;