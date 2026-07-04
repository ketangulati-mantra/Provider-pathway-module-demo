import React from 'react';

export default function DeveloperLessonsPage({ tasks, onNavigate }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      background: 'var(--bg-app)', 
      padding: '36px 20px'
    }} className="animate-fade-in">
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '10px' }}>
          <span style={{ fontSize: '1.5rem' }}>🛠️</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>
            Developer Dashboard (Testing Only)
          </h1>
        </div>
        
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          This page is hidden from providers and is used only to test lesson layouts during development.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className="academy-card" 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                flexWrap: 'wrap', 
                gap: '16px',
                background: '#fff'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {task.title}
                </h3>
                <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <span>Duration: {task.duration}</span>
                  <span>•</span>
                  <span style={{ color: 'var(--color-accent-orange)', fontWeight: 600 }}>Points: {task.points}</span>
                </div>
              </div>
              <button 
                onClick={() => onNavigate(task.path)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--gradient-primary)',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                Open Lesson
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
