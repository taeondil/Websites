import React, { useState } from 'react';
import type { BlogPost } from '../types/blog';
import { Navigation } from '../components/common/Navigation';
import { BlogCard } from '../components/blog/BlogCard';
import { useBlogStore } from '../store/blogStore';
import { Search, Filter, Tag } from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Blog store'dan postları al
  const { posts } = useBlogStore();

  // Get unique categories and tags
  const categories = Array.from(new Set(posts.map(post => post.category)));
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  // Filter posts based on search, category, and tags
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => post.tags.includes(tag));

    return matchesSearch && matchesCategory && matchesTags;
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'exam': return 'bg-blue-500';
      case 'practice': return 'bg-emerald-500';
      case 'listening': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryName = (category: string) => {
    switch(category) {
      case 'exam': return 'Sınavlar';
      case 'practice': return 'Pratik';
      case 'listening': return 'Dinleme';
      default: return category;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Taeondil <span className="text-emerald-400">Blog</span>
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            İngilizce öğrenme yolculuğunuzda size yardımcı olacak ipuçları, stratejiler ve ilham verici içerikler.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
            <Search className="w-5 h-5 text-white/60" />
            <input
              type="text"
              placeholder="Blog yazılarında ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-white placeholder-white/60 flex-1 ml-2"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            <button
              key="all-categories"
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                !selectedCategory 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Tümü
            </button>
            {categories.map((category) => (
              <button
                key={`category-${category}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? `${getCategoryColor(category)} text-white`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {getCategoryName(category)}
              </button>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={`tag-${tag}`}
                onClick={() => handleTagToggle(tag)}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-sm transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center text-white/80 py-8">
              Aradığınız kriterlere uygun yazı bulunamadı.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}