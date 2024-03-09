import React from 'react';
import {Editor as ControlledEditor} from '@monaco-editor/react';


export default function Editor(props) {
    const{
        displayName,
        language,
        value,
        onChange
    } = props

function handleChange(value){
    onChange(value)
}

  return (
    <div className={`editor-container`}>
        <div className='editor-title'>
            {displayName}
        </div>
        <ControlledEditor 
        className="code-mirror-wrapper"
            theme='vs-dark'
            onChange={handleChange}
            defaultLanguage={language}
            defaultValue={value}
            options={{
                autoLayout:false,
          minimap: {
            enabled: false
          }
        }}

        />
    </div>
  )
}

