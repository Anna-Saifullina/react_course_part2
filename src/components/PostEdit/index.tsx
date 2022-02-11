import React, { useState } from "react";
import makeRequest from "../../network";
import { OnePostType } from "../../store/Posts/types";
import Input from "../common/Input";

type PostEditPropsType = {
  post: OnePostType;
  submitHandler: (data: OnePostType) => void;
};

const PostEdit: React.FC<PostEditPropsType> = (props) => {
  const {
    post: { title, body, id, userId },
    submitHandler,
  } = props;
  const [titleValue, setTitleValue] = useState(title);
  const [bodyValue, setBodyValue] = useState(body);

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
