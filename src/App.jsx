import React, { useState, useEffect } from 'react';

import Editor from './components/Editor';
import './App.css'

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
      `)
    }, 250);

    // To avoid recreating timeout if html, css or js changes before 250ms, we clear the old timeout and create a new one
    return () => clearTimeout(timeout)
  }, [html, css, javascript])

  return (
    <div>  
      <div className='pane top-pane bg-black'>
        <Editor 
          language="xml" 
          displayName="HTML" 
          value={html}
          onChange={setHtml}
        />
        <Editor 
          language="css" 
          displayName="CSS" 
          value={css}
          onChange={setCss}
        />
        <Editor 
          language="javascript" 
          displayName="JS" 
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          width='100%'
          height='100%'
          style={{border: 0}}
        />
      </div>
    </div>
  )
}

export default App
