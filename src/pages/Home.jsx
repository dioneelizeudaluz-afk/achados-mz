export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1 style={{ color: '#2563eb', fontSize: '32px' }}>
        Achados MZ
      </h1>
      <p style={{ fontSize: '18px', color: '#666' }}>
        Recupere seus documentos perdidos
      </p>
      
      <button style={{
        background: '#2563eb',
        color: 'white',
        padding: '15px 30px',
        borderRadius: '10px',
        border: 'none',
        fontSize: '16px',
        margin: '10px'
      }}>
        Perdi um Documento
      </button>
      
      <button style={{
        background: 'white',
        color: '#2563eb',
        padding: '15px 30px',
        borderRadius: '10px',
        border: '2px solid #2563eb',
        fontSize: '16px',
        margin: '10px'
      }}>
        Encontrei um Documento
      </button>
    </div>
  )
      }
