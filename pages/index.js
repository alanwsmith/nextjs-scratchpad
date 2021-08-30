import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <form
        method="post"
        action="/api/receive-file"
        encType="multipart/form-data"
      >
        <input type="file" id="testFile" name="testFile" />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}
