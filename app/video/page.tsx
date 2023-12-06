import Sidebar from "@/components/Sidebar";

export default function page() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-10 bg-white">
      <Sidebar
        className="bg-white/70"
        selected="video"
      />
      <div className="min-h-[100vh] flex justify-center items-center flex-col  gap-12 w-full  py-14 ">
        <div className="font-normal text-7xl white  px-8 py-6 border-dashed w-4/5 border-gray-600/40  ">
          <p className="text-center">Video</p>
        </div>
        <iframe
          width={1000}
          height={600}
          src="https://www.youtube.com/embed/Sc7hZT9lUYU?si=Ice_eFledj0VPYak"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
