const TextureOverlay = () => {
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none opacity-60"
      style={{
        backgroundImage: 'url(/texture.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        mixBlendMode: 'lighten',
      }}
    />
  );
};

export default TextureOverlay;
