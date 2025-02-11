import React, { useState } from 'react';
import Link from 'next/link';

const Tools = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="container">
      <h1>Tools</h1>
      <div className="tags">
        <div className="tag" onClick={() => openModal('ligolo')}>Ligolo</div>
        <div className="tag" onClick={() => openModal('proxychains')}>Proxychains</div>
      </div>
      
      {/* Modal Ligolo */}
      {activeModal === 'ligolo' && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>×</span>
            <div className="tool-content">
              <h2>Ligolo</h2>
              <p>Advanced tunneling tool for penetration testing that creates secure TUN interfaces, 
              offering a lightweight and efficient alternative to traditional SOCKS proxies.</p>
              {/* Aquí puedes agregar más contenido específico de Ligolo */}
            </div>
          </div>
        </div>
      )}

      {/* Modal Proxychains */}
      {activeModal === 'proxychains' && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>×</span>
            <div className="tool-content">
              <h2>Proxychains</h2>
              <p>A tool for routing your internet traffic through proxy servers, providing anonymity 
              and the ability to bypass network restrictions.</p>
              {/* Aquí puedes agregar más contenido específico de Proxychains */}
            </div>
          </div>
        </div>
      )}

      <div className="content">
        <Link href="/">
          <button className="back-button">← Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Tools; 