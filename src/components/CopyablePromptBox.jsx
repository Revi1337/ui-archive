import { useState } from 'react';

const CopyablePromptBox = ({ text, language }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.9rem', color: '#cbd5e1', display: 'flex', gap: '12px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, overflow: 'hidden' }}>
        <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>{language}</span>
        <code style={{ wordBreak: 'break-word', fontFamily: language === 'Korean' ? 'sans-serif' : 'monospace', lineHeight: 1.4 }}>{text}</code>
      </div>
      <button
        onClick={handleCopy}
        style={{ padding: '6px 12px', background: copied ? '#10b981' : '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', whiteSpace: 'nowrap', fontSize: '0.8rem', fontWeight: 'bold', transition: 'background 0.2s', width: '80px', display: 'flex', justifyContent: 'center' }}
      >
        {copied ? '✓ Copied' : 'Copy'}
      </button>
    </div>
  );
};

export default CopyablePromptBox;
