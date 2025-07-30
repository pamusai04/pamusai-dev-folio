import { useState, useEffect } from 'react';

interface UseTypingEffectProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export const useTypingEffect = ({ 
  text, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000 
}: UseTypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const current = text;
      const currentText = current.substring(0, displayText.length);

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        return;
      }

      const updateText = isDeleting
        ? current.substring(0, displayText.length - 1)
        : current.substring(0, displayText.length + 1);

      setDisplayText(updateText);
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text, speed, deleteSpeed, pauseTime, loopIndex]);

  return displayText;
};