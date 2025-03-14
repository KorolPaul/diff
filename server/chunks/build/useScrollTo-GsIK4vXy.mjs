const useScrollTo = (offset, callback) => {
  const fixedOffset = offset.toFixed();
  const onScroll = () => {
    if ((void 0).pageYOffset.toFixed() === fixedOffset) {
      (void 0).removeEventListener("scroll", onScroll);
      if (callback) {
        callback();
      }
    }
  };
  (void 0).addEventListener("scroll", onScroll);
  onScroll();
  (void 0).scrollTo({
    top: offset,
    behavior: "smooth"
  });
};

export { useScrollTo as u };
//# sourceMappingURL=useScrollTo-GsIK4vXy.mjs.map
