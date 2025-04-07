'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!prompt.trim()) { setError('Please enter a prompt.'); return; }
    setIsLoading(true);
    setError(null);
    setImageUrl(null);
    setImageBase64(null);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.image_base64) setImageBase64(data.image_base64);
      else if (data.image_url) setImageUrl(data.image_url);
      else throw new Error('No image data received from API.');
    } catch (err: unknown) {
      console.error('Failed to generate image:', err);
      setError(err instanceof Error ? `Failed to generate image: ${err.message}` : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const imageSource = imageBase64 ? `data:image/png;base64,${imageBase64}` : imageUrl;

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-stone-100 font-sans overflow-hidden">
      {}
      <div className="absolute top-10 left-10 w-60 h-60 bg-orange-200 rounded-full opacity-40 blur-xl pointer-events-none"></div>
      {}
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-stone-200 opacity-50 rotate-12 rounded-lg blur-lg pointer-events-none"></div>
      {}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-orange-100 opacity-60 -rotate-45 rounded-2xl blur-md pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-2xl bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-slate-100">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-8 text-center text-slate-800 tracking-tight">
          PixelPrompt
        </h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <label htmlFor="prompt" className="block text-sm font-medium text-slate-700 mb-2">Imagine something:</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., a vibrant coral reef with bioluminescent fish"
            rows={3}
            
            className="w-full p-3 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base text-slate-900 placeholder-slate-400 transition duration-150 ease-in-out"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            
            className="mt-4 w-full bg-orange-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-60 disabled:cursor-not-allowed transition duration-150 ease-in-out"
          >
            {isLoading ? 'Generating...' : 'Generate Image'}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-300 text-red-700 rounded-lg text-center text-sm">
            <p><span className="font-medium">Error:</span> {error}</p>
          </div>
        )}

        {isLoading && (
          <div className="mt-6 text-center text-slate-600">
            <p>Generating image, please wait...</p>
            {}
            <div className="mt-4 mx-auto animate-spin rounded-full h-6 w-6 border-b-2 border-orange-600"></div>
          </div>
        )}

        {imageSource && !isLoading && (
          <div className="mt-6 border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-center text-slate-700 pt-4">Generated Image:</h2>
            <div className="relative w-full aspect-square">
              <Image src={imageSource} alt={prompt || 'Generated image'} fill style={{ objectFit: 'contain' }} priority unoptimized={!!imageBase64} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}