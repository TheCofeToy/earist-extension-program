// importing images
import image3 from "/src/assets/image3.jpg";

function News3() {
  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <img src={image3} className="w-[800px] mt-28" />
      <div className="text-justify flex flex-col items-center justify-center mt-5 text-white">
        <h3 className="text-3xl">News 3</h3>
        <p className="p-33">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet.
        </p>
      </div>
    </div>
  );
}

export default News3;
