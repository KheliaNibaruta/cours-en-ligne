"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.bubble.css";
import { Interface } from "readline";

interface PreviewProps {
    value: string;
}

const Preview = ({
    value,
}: PreviewProps) => {
    const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);

  return (
    <div className="bg-white">
        <ReactQuill 
            theme="bubble"
            value={value}
            readOnly
        />
    </div>
  )
}

export default Preview