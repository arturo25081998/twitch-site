export default function ChanelItem(props) {
  return (
    <div className="flex justify-between items-center min-w-11 space-x-12">
      <div className="flex items-center space-x-2">
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/765dcabc-3337-4297-95d7-a166395e53f0-profile_image-70x70.png"
          alt=""
          className="rounded-full w-8"
        />
        <h1 className="font-semibold text-sm hidden sm:block">{props.name}</h1>
      </div>
      <h2 className="font-light text-sm hidden sm:block"> Desconectado</h2>
    </div>
  );
}
