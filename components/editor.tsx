"use client";

import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";
import { Interface } from "readline";

interface EditorProps {
    onChange: (value: string) => void;
}

const Editor = () => {
  return (
    <div>Editor</div>
  )
}

export default Editor