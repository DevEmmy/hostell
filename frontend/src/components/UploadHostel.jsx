import React, { useEffect, useState } from "react";
import FileBase64 from 'react-file-base64';
import { addHostel } from "../../request";

function uploadHostel() {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('')
  const [images, setImages] = useState([])
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [features, setFeatures] = useState('')
  const [available, setAvailable] = useState(false)
  const [availableRooms, setAvailableRooms] = useState('')

  useEffect(() => {
    const base64Images = files.map(file => file.base64);
    setImages(base64Images);
  }, [files])

  const handleSubmit = async() =>  {
  const response = await addHostel(title, images, location,description, price, features, available, availableRooms
    )
    console.log(response);
    return response
  }

  return (
    <section className="w-screen">
      <form onSubmit={(e) => e.preventDefault()} 
      className="w-full md:max-w-screen-xl md:mx-auto p-2">
        <div className="flex flex-col m-2">
          <label className="capitalize font-bold m-2">Title:</label>
          <input
            placeholder="Title"
            className="outline-none p-2 bg-slate-100 m-2 rounded"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 m-2">
          <label className="capitalize font-bold text-primary2">
            upload pictures
          </label>
          <div className="flex flex-col w-full">
            {/* Uploading of  the hostel images */}
            <div className="text-primary2">
          <FileBase64
        multiple={ true }
        onDone={(f) => setFiles(f)} />
        </div>
        <div className="flex flex-wrap m-2">
            {files.map((file, i) => {
             return (
              <div key={i} className="h-40 w-40">
                <img className="w-full h-full"  src={file.base64} onChange={() => setImages(file.base64)} />
              </div>
             )
})}
</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 m-2">
          <label className="capitalize font-bold text-primary2 m-2">
            Location:
          </label>
          <textarea
            className="outline-none p-2 bg-slate-100 m-2 rounded"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 m-2">
          <label className="capitalize font-bold text-primary2 m-2">
            Description
          </label>
          <textarea
            className="outline-none p-2 bg-slate-100 m-2 rounded"
            cols="30"
            rows="5"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col m-2">
          <label className="capitalize font-bold text-primary2 m-2">Price:</label>
          <input
             className="outline-none p-2 bg-slate-100 m-2 rounded"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 m-2">
          <label className="capitalize font-bold text-primary2 m-2">
            Features:
          </label>
          <textarea
             className="outline-none p-2 bg-slate-100 m-2 rounded"
            type="text"
            onChange={(e) => setFeatures(e.target.value)}
          />
        </div>
          <button onClick={() => {
            setAvailable((prev) => !prev)
          }} className={`p-3 m-3 ${available ? 'text-white bg-primary2' : 'bg-gray-200 text-black'} text-white bg-primary2 capitalize rounded w-fit`}>
            {/* <input type="radio" onChange={(e) => setAvailable(e.target.checked)} />
            <label>Available</label> */}
            available
          </button>
          <div className="flex flex-col m-2">
            <label className="capitalize font-bold text-primary2 m-2">
              Availble Rooms
            </label>
            <input
               className="outline-none p-2 bg-slate-100 m-2 rounded"
              type="number"
              onChange={(e) => setAvailableRooms(e.target.value)}
            />
          </div>
        <div>
          <button onClick={handleSubmit} className=" w-full bg-primary2 p-2 text-white rounded capitalize font-bold my-2">
            add hostel
          </button>
        </div>
      </form>
    </section>
  );
}

export default uploadHostel;
