import React,{useState, useEffect} from "react";
import Editor from "./Editor";
import { NavBar } from "./NavBar";
//import UseLocalStorage from "../hooks/UseLocalStorage";

function App() {

  const[html,setHtml]=useState("")//UseLocalStorage('html','')
  const[css,setCss]=useState("")//UseLocalStorage('css','')
  const[js,setJs]=useState("")//UseLocalStorage('js','')
  const[srcDoc,setSrcDoc]=useState("")

  useEffect(()=>{
    const timeout=setTimeout(()=>{
        setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    },250)

    return ()=>clearTimeout(timeout)

  },[html, css, js])

  return (
    <>
      <NavBar/>
      <div className="pane top-pane">
        <Editor language="html" displayName="HTML" 
        value={html} onChange={setHtml}/>
        <Editor language="css" displayName="CSS" 
        value={css} onChange={setCss}/>
        <Editor language="javascript" displayName="JS" 
        value={js} onChange={setJs}/>
      </div>
      
      <div className="pane">
        <iframe
          srcDoc={srcDoc} 
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
