import React from 'react';
import { ContentCard } from './ContentCard';
import { ContentItem } from '../../types/content';

interface ContentListProps {
  items: ContentItem[];
  type: 'reading' | 'listening';
}

export function ContentList({ items, type }: ContentListProps) {
  const filteredItems = items.filter(item => item.type === type);
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <ContentCard key={item.id} item={item} />
      ))}
    </div>
  );
}