import React from "react";

type Props = {
  params: { photoid: number };
};

const UserPhoto = ({ params: { photoid } }: Props) => {
  return <div>UserPhoto {photoid}</div>;
};

export default UserPhoto;
