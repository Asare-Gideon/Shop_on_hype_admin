import React, { useState } from "react";
import { ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
  let _contentState = ContentState.createFromText("Enter text here");
  const raw = convertToRaw(_contentState);
  const [contentState, setContentState] = useState(raw);

  return (
    <div className="w-full  md:w-3/5 mb-4 md:mb-1">
      <header className="bg-[#282c34] dark:bg-slate-900 flex flex-col items-center justify-center min-h-[5vh] text-white text-xl">
        Text editor
      </header>
      <Editor
        defaultContentState={contentState}
        onContentStateChange={setContentState}
        wrapperClassName="wrapper"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
};
export default TextEditor;
