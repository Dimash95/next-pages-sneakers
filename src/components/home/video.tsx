import Image from "next/image";

export function Video() {
  const onHandleChangeMute = () => {
    const video = document.querySelector("video");
    if (video) video.muted = !video.muted;
  };

  return (
    <div className="flex flex-wrap items-end justify-center gap-2 mt-10">
      <video className="rounded-3xl ml-20" width="900" height="600" autoPlay loop muted>
        <source src="/video-2.mp4" type="video/mp4" />
      </video>
      <button onClick={onHandleChangeMute}>
        <Image
          className="w-20 h-20 rounded-full"
          src="https://img.freepik.com/free-psd/headphone-headset-icon-isolated-3d-render-illustration_439185-12417.jpg?size=626&ext=jpg&ga=GA1.1.1993596534.1704884211&semt=sph"
          width="100"
          height="100"
          alt="headphone"
        />
      </button>
    </div>
  );
}
