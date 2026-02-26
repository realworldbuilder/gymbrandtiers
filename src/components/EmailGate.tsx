'use client';

import { useState, useEffect } from 'react';

interface EmailGateProps {
  className?: string;
}

export function EmailGate({ className = '' }: EmailGateProps) {
  const [email, setEmail] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already submitted
    const submitted = localStorage.getItem('gymsignal-email-submitted');
    if (submitted === 'true') {
      setHasSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      // Submit to Formspree (placeholder endpoint)
      await fetch('https://formspree.io/f/xyzplaceholder', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Mark as submitted
      localStorage.setItem('gymsignal-email-submitted', 'true');
      setHasSubmitted(true);
      setShowCode(true);
    } catch (error) {
      console.error('Failed to submit email:', error);
      // Show code anyway for demo purposes
      setShowCode(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShowCode = () => {
    setShowCode(true);
  };

  if (showCode || hasSubmitted) {
    return (
      <div className={`border border-border bg-surface/50 p-6 ${className}`}>
        <div className="text-center">
          <h3 className="font-mono text-lg text-text-primary mb-4">
            🔓 Early Access Code
          </h3>
          
          <div className="bg-background border border-border p-4 mb-6">
            <div className="font-mono text-3xl font-bold text-white tracking-wider">
              OGM2M
            </div>
            <div className="font-mono text-xs text-text-muted mt-1">
              Use this code in the app
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-sm text-text-secondary">
              Get the apps:
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-sm transition-colors"
              >
                📱 GymSignal TestFlight
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-mono text-sm transition-colors"
              >
                🧠 Mind2Muscle TestFlight
              </a>
            </div>
            
            <div className="font-mono text-xs text-text-muted mt-4">
              Thanks for joining! Check your email for updates.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`border border-border bg-surface/50 p-6 ${className}`}>
      <div className="text-center">
        <h3 className="font-mono text-lg text-text-primary mb-2">
          🔓 Get Early Access to GymSignal + Mind2Muscle
        </h3>
        <div className="font-mono text-sm text-text-muted mb-6">
          Join the beta and get exclusive access to both apps
        </div>

        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mb-4">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-3 py-2 bg-background border border-border text-text-primary font-mono text-sm placeholder-text-muted focus:outline-none focus:border-text-muted"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-white text-black font-mono text-sm hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? '...' : 'Get Access'}
            </button>
          </div>
        </form>

        <button
          onClick={handleShowCode}
          className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors underline"
        >
          Already have a code?
        </button>
      </div>
    </div>
  );
}