import React, { useMemo, useState } from "react";
import makeRequest from "../../network";
import { OnePostType } from "../../store/Posts/types";
import Input from "../common/Input";

type PostEditPropsType = {
  post: OnePostType;
  submitHandler: (data: OnePostType) => void;
};

const veryHardCompute = () => {
  let i = 0;
  while (i < 10000000) {
    i += 1;
  }
  return i;
};

const PostEdit: React.FC<PostEditPropsType> = (props) => {
  const {
    post: { title, body, id, userId },
    submitHandler,
  } = props;
  const [titleValue, setTitleValue] = useState(title);
  const [bodyValue, setBodyValue] = useState(body);

  const countInterate = useMemo(veryHardCompute, []);

  return (
    <div>
      <Input
        value={titleValue}
        setValue={setTitleValue}
        placeholder="Введите title"
        type="text"
        title="Title"
      />
      <Input
        value={bodyValue}
        setValue={setBodyValue}
        placeholder="Введите body"
        type="text"
        title="Body"
      />
      <p>{countInterate}</p>
      <button
        type="button"
        onClick={() =>
          submitHandler({ id, userId, title: titleValue, body: bodyValue })
        }>
        save
      </button>
    </div>
  );
};

export default PostEdit;
