import React, { useState, useEffect } from "react";

function RandomImage(props) {
  const [imgs, setImgs] = useState(props.images);
  const [newImg, setNewImg] = useState(
    imgs[Math.floor(Math.random() * imgs.length)]
  );

  const handleClick = link => {
    let newImgs = imgs.filter(img => img.link !== link);
    if (newImgs.length !== 0) setImgs(newImgs);
    else window.location.reload();
  };

  useEffect(() => {
    setNewImg(imgs[Math.floor(Math.random() * imgs.length)]);
  }, [imgs]);

  return (
    <div className="image-card">
      <img src={newImg.link} alt="Current slide" />
      <button onClick={() => handleClick(newImg.link)}>&#10140;</button>
      <p className="mt-2 mb-0">
        Image by{" "}
        <a
          target={"_blank"}
          href={`${
            newImg.user.profile
          }?utm_source=PresentationsWithRandomImages&utm_medium=referral`}
        >
          {newImg.user.name}
        </a>{" "}
        on{" "}
        <a
          target={"_blank"}
          href="https://unsplash.com/?utm_source=PresentationsWithRandomImages&utm_medium=referral"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
}

export default RandomImage;
