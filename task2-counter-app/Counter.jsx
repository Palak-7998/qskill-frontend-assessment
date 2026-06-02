import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      maxWidth: '300px',
      margin: '40px auto',
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif'
    },
    display: {
      fontSize: '64px',
      fontWeight: 'bold',
      margin: '20px 0',
      color: count > 0 ? '#10b981' : count < 0 ? '#ef4444' : '#374151',
      transition: 'color 0.2s ease'
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    button: {
      padding: '10px 16px',
      fontSize: '14px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'transform 0.1s ease, opacity 0.2s'
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={{ color: '#4b5563', margin: 0 }}>React Counter App</h3>
      <div style={styles.display}>{count}</div>
      <div style={styles.buttonGroup}>
        <button 
          style={{ ...styles.button, backgroundColor: '#ef4444', color: '#fff' }} 
          onClick={decrement}
        >
          Decrement
        </button>
        <button 
          style={{ ...styles.button, backgroundColor: '#6b7280', color: '#fff' }} 
          onClick={reset}
        >
          Reset
        </button>
        <button 
          style={{ ...styles.button, backgroundColor: '#10b981', color: '#fff' }} 
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
}