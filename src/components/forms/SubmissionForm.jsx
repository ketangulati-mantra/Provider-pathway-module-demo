import React, { useState, useRef } from 'react';
import { Upload, X, FileImage, ShieldCheck } from 'lucide-react';
import { useToast } from '../index';
import { isValidEmail } from '../../mantra/validation';
import { Button } from '../index';

export default function SubmissionForm({ 
  onSuccess, 
  title = "Submit Your Proof",
  successTitle = "Submission received successfully.",
  successMessage = "Our team will review your proof shortly.",
  buttonText = "Submit",
  successButtonText = "Mark Lesson as Complete"
}) {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const fileInputRef = useRef(null);

  const validateEmail = () => {
    if (!email) return true;
    if (!isValidEmail(email)) {
      showToast('Please enter a valid email address.', 'warning');
      return false;
    }
    return true;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value.replace(/\s/g, ''));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (selectedFile) => {
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
    if (validTypes.includes(selectedFile.type) && selectedFile.size <= 20 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      showToast("Please upload a valid PNG, JPG, or PDF file under 20MB.", "warning");
    }
  };

  const clearFile = (e) => {
    e.stopPropagation();
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail()) return;
    if (!file) {
      showToast('Please upload a screenshot.', 'warning');
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showToast(successTitle, 'success');
    }, 1200);
  };

  return (
    <div style={{
      background: '#ffffff', borderRadius: '16px', padding: '32px',
      border: '1px solid #eef0f3', boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
    }}>
      {!isSuccess ? (
        <>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', margin: '0 0 24px' }}>{title}</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="academy-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Full Name</label>
                <input type="text" required placeholder="Full Name" style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email</label>
                <input type="email" required value={email} onChange={handleEmailChange} onBlur={validateEmail} placeholder="Email Address" style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Screenshot Upload</label>
              <div 
                onClick={triggerFileSelect}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                style={{ 
                  border: isDragging ? '2px dashed var(--color-primary)' : '2px dashed #d1d5db',
                  borderRadius: '12px',
                  background: isDragging ? '#f0f9ff' : '#f9fafb',
                  padding: '32px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  gap: '12px'
                }}
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileSelect} 
                  accept=".png,.jpg,.jpeg,.pdf" 
                  style={{ display: 'none' }} 
                />
                
                {!file ? (
                  <>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                      <Upload size={20} color="var(--color-primary)" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ margin: '0 0 4px', fontSize: '0.95rem', fontWeight: 600 }}>Drag & drop your screenshot</p>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>or <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Browse Files</span></p>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#9ca3af', marginTop: '4px' }}>PNG, JPG, JPEG, PDF up to 20MB</p>
                  </>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '400px', background: '#fff', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }} onClick={(e) => e.stopPropagation()}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
                      <FileImage size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {file.name}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                      <span onClick={triggerFileSelect} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', cursor: 'pointer', padding: '4px 8px' }}>Replace</span>
                      <button type="button" onClick={clearFile} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', color: '#9ca3af' }}>
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Button variant="primary" type="submit" disabled={isSubmitting} style={{ padding: '14px', marginTop: '8px' }}>
              {isSubmitting ? 'Submitting...' : buttonText}
            </Button>
          </form>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#d1fae5', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldCheck size={32} color="#059669" />
          </div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>{successTitle}</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>{successMessage}</p>
          <Button className="academy-btn-full" variant="primary" onClick={onSuccess}>
            {successButtonText}
          </Button>
        </div>
      )}
    </div>
  );
}
