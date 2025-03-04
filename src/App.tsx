import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from './pages/TestPage';
import ReadingListeningPage from './pages/ReadingListeningPage';
import { ReadingPage } from './pages/content/ReadingPage';
import { ListeningPage } from './pages/content/ListeningPage';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import WordsPage from './pages/WordsPage';
import WordlyGame from './components/games/wordly/WordlyGame';
import ScrambleGame from './components/games/scramble/ScrambleGame';
import HangmanGame from './components/games/hangman/HangmanGame';
import SocialMediaPage from './pages/SocialMediaPage';
import CountdownPage from './pages/CountdownPage';
import ExamDetailsPage from './pages/ExamDetailsPage';
import PodcastPage from './pages/PodcastPage';
import GrammarPage from './pages/GrammarPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import { Footer } from './components/common/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/words" element={<WordsPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/countdown" element={<CountdownPage />} />
          <Route path="/countdown/:id" element={<ExamDetailsPage />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/grammar" element={<GrammarPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/game/wordly" element={
            <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-8">
              <div className="container mx-auto px-6">
                <WordlyGame />
              </div>
            </div>
          } />
          <Route path="/game/scramble" element={
            <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-8">
              <div className="container mx-auto px-6">
                <ScrambleGame />
              </div>
            </div>
          } />
          <Route path="/game/hangman" element={
            <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-8">
              <div className="container mx-auto px-6">
                <HangmanGame />
              </div>
            </div>
          } />
          
          <Route path="/reading-listening" element={<ReadingListeningPage />} />
          <Route path="/reading/:id" element={<ReadingPage />} />
          <Route path="/listening/:id" element={<ListeningPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}