"use client";

import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import AdminHeader from "@/components/AdminHeader";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const NewPost = () => {
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();
    const data: PostProps = {
      title: title,
      description: description,
      tags: tags,
    };

    console.log(data);
  }

  return (
    <>
      <AdminHeader />
      <main className="h-[calc(100vh-5rem)] flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="laptop:w-3/5 mobile:w-[95%] py-5 laptop:border-l-2 mobile:border-b-2 laptop:border-b-0 border-violet-700 flex flex-col gap-8 rounded-tr-lg rounded-br-lg bg-slate-50 shadow-xl shadow-slate-300 text-slate-800 px-5"
        >
          <h1 className="text-violet-700 text-lg font-semibold w-fit mx-auto pl-1">
            Olá, Joaquim! Qual é o assunto de hoje?
          </h1>
          <input
            type="text"
            required
            placeholder="Título"
            autoComplete="off"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            className="bg-transparent py-1 px-2 w-full mx-auto border-b border-slate-800 hover:border-violet-700 hover:border-b-2 focus:outline-none focus:border-violet-700 focus:border-b-2"
          />
          <input
            type="text"
            required
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags"
            autoComplete="off"
            id="tags"
            className="bg-transparent py-1 px-2 w-full mx-auto border-b border-slate-800 hover:border-violet-700 hover:border-b-2 focus:outline-none focus:border-violet-700 focus:border-b-2"
          />
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
          />
          <button
            type="submit"
            className="border-2 text-white bg-violet-700 border-violet-700 w-full mx-auto px-2 py-1 font-medium text-base hover:border-violet-600 hover:bg-violet-600"
          >
            Publicar
          </button>
        </form>
      </main>
    </>
  );
};

export default NewPost;
