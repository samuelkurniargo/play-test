import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  getVideoById,
  getAllProducts,
  getAllComments,
  createComment,
} from "../services/VideosService";

function Detailpage() {
  const [video, setVideo] = useState([]);
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getVideoById(id).then((video) => {
      setVideo(video);
    });
  }, [id]);

  useEffect(() => {
    getAllProducts(id).then((products) => {
      setProducts(products);
    });
  }, [id]);

  useEffect(() => {
    getAllComments(id).then((comments) => {
      setComments(comments);
    });
  }, [id]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    createComment(data).then((response) => {
      e.target.reset();
      console.log(response);
    });
  };

  return (
    <div className="container mx-auto">
      <div className="header">
        <div className="navbar bg-base-100 mt-8 mb-16">
          <div className="flex-none">
            <a className="btn" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{video.title}</h1>
          </div>
          <div className="flex-none me-4">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div className="flex-none gap-2">
            <div className="power-merchant">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34l-57.3 114.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40h.7l45.7 251.4c5.5 30.4 32 52.6 63 52.6h277.2c30.9 0 57.4-22.1 63-52.6L535.3 176h.7c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-semibold">Nama toko</h1>
            <button className="btn btn-sm border-white px-1">Follow</button>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="grid grid-cols-4 gap-4">
          <div className="products flex flex-col gap-2 overflow-auto">
            {products.map((product) => {
              return (
                <a href={product.link} key={product._id}>
                  <div className="card card-side w-auto bg-white shadow-xl">
                    <figure className="flex-none p-2">
                      <img
                        src="https://picsum.photos/200"
                        alt={product.title}
                        // className="rounded-xl max-w-none"
                        className="rounded-t-lg h-96 md:h-auto md:w-28 md:rounded-lg"
                      />
                    </figure>
                    <div className="card-body items-start text-start p-2 gap-1">
                      <p className="card-title text-base leading-5">
                        {product.title}
                      </p>
                      <p className="font-bold">Rp {product.price}</p>
                      <p>4.9 | Terjual 16,1 rb</p>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-sm px-1">
                          Beli
                        </button>
                        <button className="btn btn-primary btn-sm px-1">
                          + Keranjang
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="video col-span-2">
            <iframe
              width="100%"
              height="400"
              src={video.embededYoutube}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="comments">
            <div className="comments-wrapper flex flex-col gap-2 px-4 h-60 overflow-auto">
              {comments.map((comment) => {
                return (
                  <div className="comment flex gap-2" key={comment._id}>
                    <div className="avatar block">
                      <div className="w-8 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="body bg-slate-500 px-2 py-1 rounded text-sm">
                      <h4 className="font-bold inline me-1">
                        {comment.username}
                      </h4>
                      <p className="inline">{comment.comment}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <form
              className="input-comment mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="hidden"
                // placeholder="Username"
                value={id}
                {...register("id")}
                // name="id"
                // className="input input-bordered input-sm w-full max-w-xs mb-2"
              />
              <input
                type="text"
                placeholder="Username"
                {...register("username")}
                name="username"
                className="input input-bordered input-sm w-full max-w-xs mb-2"
              />
              <textarea
                placeholder="Comment"
                {...register("comment")}
                name="comment"
                className="textarea textarea-bordered textarea-xs w-full max-w-xs"
              ></textarea>
              <input
                type="submit"
                className="btn btn-outline btn-success"
                value="Kirim"
              />
              {/* <button className="btn btn-outline btn-success">Kirim</button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailpage;
