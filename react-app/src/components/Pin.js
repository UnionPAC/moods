const Pin = ({ urls }) => {
  return (
    <div className="inline-flex p-2">
      <div className="flex items-center cursor-pointer w-[236px] box-border">
        <img
          src={urls}
          alt="pin"
          className="flex w-[100%] cursor-zoom-in rounded-[16px] object-cover"
        />
      </div>
    </div>
  );
};

export default Pin;
