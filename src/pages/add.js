import { useState } from "react";
import {
  Container,
  Button,
  TextInput,
  NativeSelect,
  Modal,
} from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
export default function Add() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState("");
  const [bezelInsert, setBezelInsert] = useState("");
  const [watchCase, setWatchCase] = useState("41mm case");
  const [crown, setCrown] = useState("Standard crown");
  const [strap, setStrap] = useState("");
  const [clasp, setClasp] = useState("Standard clasp");
  const [cRing, setCRing] = useState("Bulit-in rehaut");
  const [crystal, setCrystal] = useState("Sapphire crystal w cyclops");
  const [dial, setDial] = useState("Seiko");
  const [hands, setHands] = useState("");
  const [movement, setMovement] = useState("NH35A");
  const [priceCategory, setPriceCategory] = useState("regular");
  const handleAddImage = () => {
    if (imageName.trim() !== "") {
      setImages((images) => [...images, imageName]);
    }
    console.log(images);
  };

  const handleRemoveImage = (index) => {
    setImages((images) => images.filter((_, i) => i !== index));
  };
  const handleAdd = async () => {
    if (
      name === "" ||
      images.length === 0 ||
      bezelInsert === "" ||
      watchCase === "" ||
      crown === "" ||
      strap === "" ||
      clasp === "" ||
      crystal === "" ||
      cRing === "" ||
      dial === "" ||
      hands === "" ||
      movement === "" ||
      priceCategory === ""
    ) {
      console.log("missing info");
      //return;
    }
    const watch = {
      name: name,
      image: images,
      insert: bezelInsert,
      shell: watchCase,
      crown: crown,
      strap: strap,
      clasp: clasp,
      crystal: crystal,
      cRing: cRing,
      dial: dial,
      hands: hands,
      movement: movement,
      date: "",
      likes: 0,
      priceCat: priceCategory,
    };
    const res = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(watch),
    });
    const data = await res.json();
    console.log(data);
    setShowConfirm(false);
  };
  return (
    <>
      <Head>
        <title>Add</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svgs/gold.svg" />
      </Head>
      <Container className="py-2 w-1/2" px="xl">
        <TextInput
          className="pb-2"
          label="Name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="1 = NH35A, 2 = Fluted, F = Ladies, 3 = GMT, 4 = SKX"
          type="text"
        />
        <div className="font-semibold">Image Names</div>
        <div>
          {images.map((imageName, index) => (
            <div className="flex items-center justify-between pb-2" key={index}>
              <div className="">{imageName}</div>
              <Button onClick={() => handleRemoveImage(index)}>-</Button>
            </div>
          ))}
        </div>
        <div className="bg-neutral-800 p-4 rounded-md">
          <TextInput
            className="pb-2"
            label="New image name"
            onChange={(e) => setImageName(e.currentTarget.value)}
            placeholder="name + .jpg"
            type="text"
          />
          <div className="flex justify-end">
            <Button onClick={handleAddImage}>Add image</Button>
          </div>
        </div>
        <TextInput
          className="pb-2"
          label="Bezel Insert"
          value={bezelInsert}
          onChange={(e) => setBezelInsert(e.currentTarget.value)}
          placeholder="Black Submariner w additional markers"
          type="text"
        />
        <TextInput
          className="pb-2"
          label="Case"
          value={watchCase}
          onChange={(e) => setWatchCase(e.currentTarget.value)}
          placeholder="41mm case"
          type="text"
        />
        <TextInput
          className="pb-2"
          label="Crown"
          value={crown}
          onChange={(e) => setCrown(e.currentTarget.value)}
          placeholder="Standard crown"
          type="text"
        />
        <TextInput
          className="pb-2"
          label="Strap"
          value={strap}
          onChange={(e) => setStrap(e.currentTarget.value)}
          placeholder="Jubilee strap"
          type="text"
        />
        <TextInput
          className="pb-2"
          label="Clasp"
          value={clasp}
          onChange={(e) => setClasp(e.currentTarget.value)}
          placeholder="Standard clasp"
          type="text"
        />
        <TextInput
          className="pb-2"
          label="Chapter Ring"
          value={cRing}
          onChange={(e) => setCRing(e.currentTarget.value)}
          placeholder="Built-in rehaut"
          type="text"
        />
        <TextInput
          className="pb-2"
          label="Crystal"
          value={crystal}
          onChange={(e) => setCrystal(e.currentTarget.value)}
          placeholder="Sapphire crystal w cyclops"
          type="text"
        />
        <TextInput
          className="pb-2"
          label="Dial"
          value={dial}
          onChange={(e) => setDial(e.currentTarget.value)}
          placeholder="Seiko white GMT"
          type="text"
        />
        <TextInput
          className="pb-2"
          label="Hands"
          value={hands}
          onChange={(e) => setHands(e.currentTarget.value)}
          placeholder="Mercedes w red GMT"
          type="text"
        />
        <TextInput
          className="pb-2"
          label="Movement"
          value={movement}
          onChange={(e) => setMovement(e.currentTarget.value)}
          placeholder="NH35A"
          type="text"
        />
        <NativeSelect
          className="pb-2"
          label="Price Category"
          data={[
            { value: "regular", label: "regular" },
            { value: "gmt", label: "gmt" },
            { value: "ladies", label: "ladies" },
            { value: "NFS", label: "not for sale" },
          ]}
        />
        <div className="flex justify-end">
          <Button
            variant="filled"
            onClick={(e) => setShowConfirm(!showConfirm)}>
            Continue
          </Button>
        </div>
        <Modal
          className=""
          opened={showConfirm}
          title="Add watch"
          centered
          onClose={(e) => setShowConfirm(!showConfirm)}>
          Are you sure?
          <div className="flex justify-end pt-4">
            <Button variant="filled" onClick={handleAdd}>
              Yes
            </Button>
          </div>
        </Modal>
      </Container>
    </>
  );
}
